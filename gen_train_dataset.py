import pandas as pd

# imbalanced labels
# this reduce number of rows with 0
# generate train dataset based in labeled dataset
df = pd.read_csv('dataset.csv')
df = pd.concat((df.loc[df['Label']==0.0].sample(frac=.7), df.loc[df['Label']==1.0])).sort_index()
df.groupby(['Label']).count()
df.to_csv('train_dataset.csv', index=False)