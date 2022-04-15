# CMPT 733 Final Project: Conspiracy Theories on Social Media

## Data Structure

```
.
├── bert
│   ├── model_best_bert                 # BERT classification output
│   │   │── *_labeled.csv               # Labeled test dataset
│   │   │── eval_stats                  # Evaluation stats
│   │   │── train_stats                 # Training stats
│   │   └── ...
│   │── bert.ipynb                      # BERT model source code
├── Web                                 # Contains data_analysis_app and detector_app
│   ├── data_analysis_app/my-project    # Our data analysis web app
│   ├── detector_app                    # Our misinformation detection app   
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
├── truckers_data
│   └── ...
├── basic_analysis.ipynb
├── collect_data.ipynb
├── conspiracy_theories_data.csv
├── covid_data.csv
├── dataset.csv
├── merge_data.ipynb
├── month.xlsx
├── sentiment.ipynb
├── test_covid_data.csv
├── test_truckers_data.csv
└── README.md
```

### Install Modules

First, set up a virtual environment if necessary, and then install Python libraries from `requirements.txt.` The following uses conda as an example.
```
conda create --name myenv
conda activate myenv
pip3 install -r requirements.txt
```

For further development, simply activate the existing environment.
```
conda activate myenv
```



### Data Collection

To collect the data on the daily basis, run the Jupyter notebook `collect_data.ipynb`. 



### Data Exploration

To perform the data exploration, run the Jupyter notebook `data_exploration.ipynb`. 

The datasets used in the analysis include `dataset.csv` in the root directory.



### Sentiment Analysis

To perform the sentiment analysis, run the Jupyter notebook `sentiment.ipynb`. 

The datasets used in the analysis include `conspiracy_theories_data.csv`, `dataset.csv`, and `month.xlsx` in the root directory.



### BERT Model

To train the BERT classification model, run the Jupyter notebook `bert/bert.ipynb`. This training uses `dataset.csv` as the training dataset in the root directory. After training, it will output the model and the stats, such as training and evaluation loss and accuracy, to the folder `bert/model_best_bert/.` 

The notebook file also includes a prediction process for the two test datasets, `test_covid_data.csv` and `test_truckers_data.csv` in the root directory. The final labelled dataset will be output to `bert/model_best_bert/.`

To utilize this trained model configuration in Jupyter notebook in the future, define the corresponding path and run the following code to load the configuration directly. Here is the sample Python code:
```python
path = './model_best_bert'
model = BertForSequenceClassification.from_pretrained(path)
tokenizer = BertTokenizer.from_pretrained(path)
```


### LSTM Model

In the Jupyter notebook `lstm/lstm.ipynb`, we train an LSTM prediction model to predict whether a tweet contains conspiracy theories. It trains Word2Vec Embedding with Gensim and use the trained embedding vector in embedding layer of LSTM Model.

The training model with best performance will be saved in `lstm` folder, and the metrics to evaluate model for each epoch will be stored in `lstm/lstm_train.txt` file.



### Prediction Analysis

To perform the prediction analysis, run the Jupyter notebook `prediction_analysis.ipynb`. 

The datasets used in the analysis include `test_truckers_data_labeled.csv` and `test_covid_data_labeled.csv` in the `bert/model_best_bert/` folder and `month.xlsx` in the root directory.



### How to run our misinformation detector(cmpt733_project/Web/detector_app/)

1. Download our models from: https://drive.google.com/drive/folders/1CHSfRisOBbB64FtCQPULEBVMboTZ1hIH (Please download all files)
2. Put the downloaded model files, ```main.py``` ,```static``` and ```templates``` in the same directory.
3. Run main.py: ```python main.py```
4. Follow the link shown to http://127.0.0.1:5000/ and you're ready to use our misinformation detector!

