import twint
import nest_asyncio
import pandas as pd

nest_asyncio.apply()

with open('hashtag_list.txt') as f:
    hashtags = f.read().splitlines()

columns = ['date',
           'user_id',
           'username',
           'language',
           'tweet',
           'hashtags',
           'nlikes',
           'nreplies',
           'nretweets',
           'reply_to'
           ]

for hashtag in hashtags:
    h = hashtag.lower()
    c = twint.Config()
    c.Search = '#' + h
    c.Pandas = True
    c.Lang = 'en'
    # c.Since = '2020-10-12'
    # c.until= '2021-01-20'
    twint.run.Search(c)

    df = twint.output.panda.Tweets_df
    if not df.empty:
        twint.output.panda.Tweets_df[columns].to_csv(
            'data/{}.csv'.format(h), index=False)
