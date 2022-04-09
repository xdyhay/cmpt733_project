# CMPT 733 Final Project: Conspiracy Theories on Social Media

## Data Structure

```
.
├── bert
│   ├── model_best_bert                 # BERT classification output
│   │   │── *_labeled.csv               # Labeled test dataset
│   │   └── ...
│   │── bert.ipynb                      # BERT model source code
├── conspiracy_theories_data
│   └── ...
├── covid_data
│   └── ...
├── graph
│   └── ...
├── lstm
│   ├── lstm.ipynb                      # LSTM model source code
│   ├── *_result.csv                    # Labeled test dataset
│   └── ...
├── sentiment_graph
│   └── ...
├── truckers_data
│   └── ...
├── basic_analysis.ipynb
├── collect_data.ipynb
├── conspiracy_theories_data.csv
├── covid_data.csv
├── data_collection.py
├── dataset.csv
├── hashtag_list.txt
├── merge_data.ipynb
├── merged_data.csv
├── merged_data_all.csv
├── month.xlsx
├── sentiment.ipynb
├── test_covid_data.csv
├── test_truckers_data.csv
├── truckers_data.csv
└── README.md
```

### Install Modules

First, set up virtual environment if necessary, and then install Python libraries from `requirements.txt`. The following uses conda as an example.
```
conda create --name myenv
conda activate myenv
pip3 install -r requirements.txt
```

For furthue devlopment, simply activate the existing enviroment.
```
conda activate myenv
```


### Sentiment Analysis

To run the sentiment analysis
```
...
```


### BERT Model

To train the BERT classification model, run the Jupyter notebook `bert/bert.ipynb`. This training uses `dataset.csv` as the training dataset in the root directory. After training, it will output the model and the training status, such as training and evaluation loss, in the folder `bert/model_best_bert/.` 

The notebook file also includes a prediction process with two of the test datasets, `test_covid_data.csv` and `test_truckers_data.csv` in the root directory. The final labelled dataset will be output to `bert/model_best_bert/.`

To utilize this trained model in Jupyter notebook in the future, define the corresponding path and run the following code to load the configuration from the path directly. Here is the sample Python code:
```python
path = './model_best_bert'
model = BertForSequenceClassification.from_pretrained(path)
model = BertTokenizer.from_pretrained(path)
```


### LSTM Model

```
...
```


### Graph

