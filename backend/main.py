from flask import Flask, render_template, request
from transformers import BertTokenizer, BertForSequenceClassification
from torch.utils.data import DataLoader
import pandas as pd
import torch
import random
import emoji
import numpy as np
from tqdm.notebook import tqdm
import json
from collections import Counter
import re
import os
from string import punctuation
#from sklearn.feature_extraction.text import TfidfVectorizer
#from sklearn.linear_model import PassiveAggressiveClassifier
import pandas as pd

app = Flask(__name__)

#loaded_model = pickle.load(open('model.pkl', 'rb'))
batch_size = 32
SEED = 9999
random.seed(SEED)
np.random.seed(SEED)
torch.manual_seed(SEED)
torch.backends.cudnn.deterministic = True
if torch.cuda.is_available():
    torch.cuda.manual_seed_all(SEED)
device = torch.device('cuda:0') if torch.cuda.is_available() else torch.device('cpu')

def remove_punct(s):
    punct_pattern = re.compile(r'[^\w\s\#]')
    no_punct = punct_pattern.sub(r'', s)
    return no_punct

def remove_emoji(string):
    allchars = [str for str in string]
    emoji_list = [c for c in allchars if c in emoji.UNICODE_EMOJI['en']]
    clean_text = ' '.join([str for str in string.split() if not any(i in str for i in emoji_list)])
    return clean_text

def read_data(data, test=False):
    texts = []
    labels = []
    if test == False:
        data.dropna(subset=['tidyTweet', 'Label'], inplace=True)
    else:
        data.dropna(subset=['tidyTweet'], inplace=True)

    for i in tqdm(data.itertuples(), total=len(data)):
        line = getattr(i, 'tidyTweet')
        line = line.strip()
        if not line:
            continue
        line = remove_emoji(line)
        line = remove_punct(line).strip()
        texts.append(line)

        if test == False:
            label = getattr(i, 'Label')
            labels.append(label)
            if label == 1.0:
                texts.extend([line] * 2)
                labels.extend([label] * 2)

    if test == False:
        assert len(texts) == len(labels)
        return texts, labels
    else:
        return texts
    
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

trained_bert_model = BertForSequenceClassification.from_pretrained('.')
trained_bert_tokenizer = BertTokenizer.from_pretrained('.')
trained_bert_model.to(device)

class Dataset(torch.utils.data.Dataset):
    def __init__(self, encodings, labels=None):
        self.encodings = encodings
        self.labels = labels

    def __getitem__(self, idx):
        idx = int(idx)
        item = {
            key: torch.tensor(val[idx])
            for key, val in self.encodings.items()
        }
        if self.labels is not None:
            item['labels'] = torch.tensor(label_ids[self.labels[idx]])
        return item

    def __len__(self):
        return len(self.encodings.input_ids)

def test_model(test_data, model, tokenizer):
    for data in test_data:
        
        test_df = pd.read_csv('./' + data)
        test_texts = read_data(test_df, test=True)
        test_encodings = tokenizer(test_texts,
                                truncation=True,
                                padding='max_length',
                                max_length=128)
        test_dataset = Dataset(test_encodings)
        test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

        model.eval()
        test_predictions = []
        for batch in test_loader:
            input_ids = batch['input_ids'].to(device)
            with torch.no_grad():
                outputs = model(input_ids)
            test_predictions.extend(torch.argmax(outputs.logits, dim=-1).cpu().numpy())

        test_pred_uniq = np.unique(test_predictions, return_counts=True)
        
        test_df_labeled = pd.concat((test_df, pd.Series(test_predictions, name='label')), axis=1)
        test_df_labeled.to_csv('result.csv', index=False)
        
    return test_df_labeled['label'].tolist()

def misleading_info_det(news):

    d = {'input_ids': [1], 'tidyTweet': [news]}
    df=pd.DataFrame(data=d)
    df.to_csv('test.csv')
    test_data = ['test.csv']
    pred=test_model(test_data, trained_bert_model, trained_bert_tokenizer)

    return pred[0]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        message = request.form['message']
        pred = fake_news_det(message)
        print(pred)
        return render_template('index.html', prediction=pred)
    else:
        return render_template('index.html', prediction="Something went wrong")

if __name__ == '__main__':
    app.run(debug=True)

