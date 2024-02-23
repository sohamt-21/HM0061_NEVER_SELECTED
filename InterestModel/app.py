from flask import Flask, render_template, request
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pandas as pd
import pickle

app = Flask(__name__)

# Load the dataset
df = pd.read_csv('dataset.csv')

# Preprocess the data
le = LabelEncoder()
# Combine all categories for encoding
combined_categories = pd.concat([df[col] for col in ['Interest1', 'Interest2', 'Skill1', 'Skill2', 'Skill3', 'ClubName']])
le.fit(combined_categories)

df['Interest1'] = le.transform(df['Interest1'])
df['Interest2'] = le.transform(df['Interest2'])
df['Skill1'] = le.transform(df['Skill1'])
df['Skill2'] = le.transform(df['Skill2'])
df['Skill3'] = le.transform(df['Skill3'])
df['ClubName'] = le.transform(df['ClubName'])

# Define features and target
X = df[['Interest1', 'Interest2', 'Skill1', 'Skill2', 'Skill3']]
y = df['ClubName']

# Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# Save the trained model to a file
with open('model.pkl', 'wb') as file:
    pickle.dump(model, file)

# Define routes
@app.route('/')
def index():
    return render_template('form.html')

@app.route('/predict', methods=['POST'])
def predict():
    interest1 = request.form['interest1']
    interest2 = request.form['interest2']
    skill1 = request.form['skill1']
    skill2 = request.form['skill2']
    skill3 = request.form['skill3']
    
    # Encode input data
    interest1_encoded = le.transform([interest1])[0]
    interest2_encoded = le.transform([interest2])[0]
    skill1_encoded = le.transform([skill1])[0]
    skill2_encoded = le.transform([skill2])[0]
    skill3_encoded = le.transform([skill3])[0]
    
    # Make prediction
    predicted_club_index = model.predict([[interest1_encoded, interest2_encoded, skill1_encoded, skill2_encoded, skill3_encoded]])[0]
    predicted_club = le.inverse_transform([predicted_club_index])[0]
    
    return render_template('result.html', interest1=interest1, interest2=interest2, skill1=skill1, skill2=skill2, skill3=skill3, predicted_club=predicted_club)

if __name__ == '__main__':
    app.run(debug=True)
# if __name__ == '__main__':
#     app.run(host='0.0.0.0',port=8080)