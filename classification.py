import pandas as pd
import numpy as np
from pymongo import MongoClient

# connect to MongoDBAtlas

#start with the connection to cluster indside MongoDBAtlas (clustered)
client = MongoClient("mongodb://kmoularas:student123@ac-a9dcngf-shard-00-00.ikbpu1s.mongodb.net:27017,ac-a9dcngf-shard-00-01.ikbpu1s.mongodb.net:27017,ac-a9dcngf-shard-00-02.ikbpu1s.mongodb.net:27017/?ssl=true&replicaSet=atlas-evrb2u-shard-0&authSource=admin&appName=Cluster0")

# select the databse
db = client['analytics']  #database
collection = db["clickstream"]  #inside the database

#retrive documents
data = list(collection.find())

df = pd.DataFrame(data)

print(df.head())

# overview of descriptive statistics 

print(df.describe())

# check data types
print(df.info())
