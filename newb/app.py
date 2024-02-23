import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from xgboost import XGBRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score 
from pymongo import MongoClient

# This is For the DataBase Connection and Reading values 
hostname = 'mongodb://localhost'
port = 27017

data = pd.read_csv('./App.csv')

client = MongoClient(hostname, port)
db = client['Responses']

UserRes_collection=db.get_collection("userresponses")

field="EmailId"

with open('user.txt', 'r') as file:
    content = file.read()

requiredUser= UserRes_collection.find_one({field:content})

FirstQuestion=requiredUser['FirstQuestion']
SecondQuestion=requiredUser['SecondQuesion']
ThirdQuestion=requiredUser['ThirdQuestion']
FourthQuestion=requiredUser['FourthQuestion']
FifthQuestion=requiredUser['FifthQuestion']
SixthQuestion=requiredUser['SixthQuestion']
SeventhQuestion=requiredUser['SeventhQuestion']
EighthQuestion=requiredUser['EighthQuestion']
NinethQuestion=requiredUser['NinethQuestion']
TenthQuestion=requiredUser['TenthQuestion']

# This is End for the user and user value 

# This is Start For AI Model 

X = data.drop(columns=['rating'])
y = data['rating']

X_train, X_eval, y_train, y_eval = train_test_split(X, y, test_size=0.2, random_state=42)

numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

model = Pipeline(steps=[
    ('preprocessor', numeric_transformer),
    ('regressor', XGBRegressor(n_estimators=100, max_depth=5, learning_rate=0.1, random_state=42))  
])

model.fit(X_train, y_train)

y_pred = model.predict(X_eval)

accuracy = r2_score(y_eval, y_pred) * 100

test_data_point = np.array([FirstQuestion,SecondQuestion,ThirdQuestion,FourthQuestion,FifthQuestion,SixthQuestion,SeventhQuestion,EighthQuestion,NinethQuestion,TenthQuestion]).reshape(1, -1) 

predicted_review = model.predict(test_data_point)

print(predicted_review[0]) 

# This is For End Of AI Model 