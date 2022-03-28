import os
import pandas as pd
import numpy as np

import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
# from wordcloud import WordCloud
# from PIL import Image
# import matplotlib.pyplot as plt
# import seaborn as sns
# % matplotlib inline

nltk.download('omw-1.4')
nltk.download('stopwords')
nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()
stopword = set(stopwords.words('english'))


def get_tidyTweet(s):
    url_pattern = re.compile(r'https?://\S+')
    no_url = url_pattern.sub(r'', str(s))
    username_pattern = re.compile(r'@\w+')
    no_username = username_pattern.sub(r'', no_url)
    hashtag_pattern = re.compile(r'#\w+')
    no_hashtag = hashtag_pattern.sub(r'', no_username)
    amp_pattern = re.compile(r'&amp;')
    tidy_tweet = amp_pattern.sub(r'and', no_hashtag)
    return tidy_tweet

def remove_punct(s):
    punct_pattern = re.compile(r'[^\w\s\']')
    no_punct = punct_pattern.sub(r'', str(s))
    return no_punct

def normalize_words(tokens):
    norm_tokens = [lemmatizer.lemmatize(t) for t in tokens]
    return norm_tokens

def remove_stopwords(tokens):
    result_tokens = []
    for t in tokens:
        if (t not in stopword and len(t) > 2 and not t.isnumeric()):
            result_tokens.append(t)
    return result_tokens

def words_preprocessing(tweet):
    tidy_tweet = get_tidyTweet(tweet).lower()
    tidy_tweet = remove_punct(tidy_tweet)
    tokens = tidy_tweet.split()
    norm_tokens = normalize_words(tokens)
    result_tokens = remove_stopwords(norm_tokens)
    return result_tokens

def gen_dataframe(path):
    def join_tokens(tokens):
        return ' '.join(tokens)
    # path = 'data/'
    files = os.listdir(path)
    df = pd.concat([pd.read_csv(path+f) for f in files], ignore_index=True)
    df = df.drop_duplicates()
    df = df[df['language']=='en']
    df = df.reset_index(drop=True)

    df = df[['date','tweet']]
    df['cleaned_tweet'] = df['tweet'].apply(words_preprocessing)
    df['cleaned_tweet'] = df['cleaned_tweet'].apply(join_tokens)

    return df