import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from xgboost import XGBRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score 

# Read the data
data = pd.read_csv('./Userdata.csv')

# Shuffle the data
data = data.sample(frac=1, random_state=42).reset_index(drop=True)

# Remove null values if any
data.dropna(inplace=True)

# Remove outliers if any
# Here you can add your outlier removal technique

# Split the data into features and target variable
X = data.drop(columns=['rating'])
y = data['rating']

# Split data into train and evaluation sets
X_train, X_eval, y_train, y_eval = train_test_split(X, y, test_size=0.2, random_state=42)

# Define the numeric transformer for preprocessing
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

# Define the model pipeline
model = Pipeline(steps=[
    ('preprocessor', numeric_transformer),
    ('regressor', XGBRegressor(n_estimators=100, max_depth=5, learning_rate=0.1, random_state=42))  
])

# Fit the model
model.fit(X_train, y_train)

# Make predictions on the evaluation set
y_pred = model.predict(X_eval)

# Calculate R^2 score
accuracy = r2_score(y_eval, y_pred) * 100

# Define a test data point for prediction
test_data_point = np.array([4,4,4,4,5,5,4,4,5,4]).reshape(1, -1) 

# Make prediction on the test data point
predicted_review = model.predict(test_data_point)

# Print the predicted review value
print("Predicted Review Value:", predicted_review[0])
