# Sentiment Analysis on Online Products
![f1](https://user-images.githubusercontent.com/90550363/211163782-fd7a87f9-2828-4600-a26f-d3923d657508.PNG)
***

# Sentiment Analysis
Sentiment analysis is a subfield of natural language processing (NLP) that aims to extract subjective information from text data. It involves identifying and extracting opinions, attitudes, and emotions expressed in written or spoken language. This can be useful for businesses to understand how their customers feel about their products or services, or for researchers to understand public sentiment about a particular topic. 


# Dataset
The scrapping of datasets is done from 3 different sources:
- Amazon Reviews by WebScrapping
- YouTube Scripts
- YouTube Comments and Comments Under Comments
- Online Websites

# Workflow
![workflow](https://user-images.githubusercontent.com/90550363/211164902-c344288b-9f76-470d-a74d-7f554370d893.png)

# Steps

**1.** Web Scrapping<br/>
**2.** Data Preprocessing<br/>
    - Remove Punctuations, special symbols and special characters.<br/>
    - Stopword Removal<br/>
    - Tokenization<br/>
    - Stemming<br/>
**3.** Model Training and Testing<br/>

# Word Clouds
![macbook m1](https://user-images.githubusercontent.com/90550363/211164428-40869861-a755-4bca-854d-04702dc4bb3b.PNG)

# Model Training
Models Used: <br/>
 **1.** SVM (Support Vector Machine)<br/>
 **2.** Naive Bayes<br/>
 **3.** BERT (Bidirectional Encoder Representations from Transformers)<br/>

## SVM
- First, gather a large dataset of text documents that have been labeled with their sentiment (positive, neutral, or negative). This dataset will be used to train the SVM model.
- Preprocess the text data by removing any irrelevant information (such as punctuation or numbers), and converting the text to lowercase.
- Use techniques such as stemming or lemmatization to reduce the text to its root words, and create a document-term matrix to represent the data.
- Split the dataset into a training and testing set, with a ratio of approximately 80/20.
- Train the SVM model using the training set, using parameters such as the kernel type and regularization term.
- Test the model on the testing set to evaluate its performance.

![svm](https://user-images.githubusercontent.com/90550363/211166233-060741eb-3f9f-445c-928d-9cfd09d1474a.png)
## Naive Bayes
- This involves gathering a large dataset of text documents that have been labeled as either positive or negative in sentiment. Pre-processing involves cleaning and formatting the data, such as removing irrelevant words or punctuation.
- The next step is to create a list of all the unique words in the dataset. This will be used to build the model's understanding of the language.
- For each word in the vocabulary list, we need to calculate how many times it appears in the positive and negative documents. This will help us determine which words are most indicative of positive or negative sentiment.
- Using the frequency counts, we can calculate the probability of each word occurring in a positive or negative document. This probability will be used in the final prediction step.
- Using the probabilities calculated in step 4, we can train the model to accurately predict the sentiment of new documents.
- To ensure that the model is accurately predicting sentiment, we can test it on a separate dataset of labeled documents and evaluate its performance.
- Use the model to predict the sentiment of new documents: Once the model has been trained and tested, it can be used to predict the sentiment of new, unseen documents. The model will use the probabilities calculated in step 4 to make its prediction.

![naivebayes](https://user-images.githubusercontent.com/90550363/211166235-f349d7d3-27c8-4d25-ab83-0e2a107dab51.png)
## BERT
- Collect a dataset of labeled text data for sentiment analysis (e.g. positive, negative, neutral).
- Pre-process the text data by removing stop words, stemming, and lemmatizing.
- Create a list of all unique words in the pre-processed text data.
- Calculate the probability of each sentiment label in the dataset.
- For each unique word in the list, calculate the probability of it occurring in each sentiment label.
- For a given input text, pre-process it in the same way as the training data.
- Calculate the probability of the input text being in each sentiment label using the probabilities calculated in steps 4 and 5.
- Choose the sentiment label with the highest probability as the predicted sentiment of the input text.

![bert](https://user-images.githubusercontent.com/90550363/211166534-055d04ce-22b2-4f28-bb9e-a2485a0dd66e.png)
***

# Results
## Confusion Matrix
    The confusion matrix for the analysis of results and actual outcome is presented below for only one product
    
## Pie Chart
    A visual representation of results, provided by the BERT model is presented in the form of piechart below:

![macbook_piechart](https://user-images.githubusercontent.com/90550363/211164634-6a7ecac9-93ad-40ed-83ff-678fda1fd326.PNG)

## Accuracy
    The accuracies through different models is presented below:

![ppppppppp](https://user-images.githubusercontent.com/90550363/211165157-4e50a547-aaa8-4204-abdb-4324e299a464.PNG)

    Maximum accuracy is provided by BERT for our dataset so it will be used in our website to show results
