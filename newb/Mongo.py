from pymongo import MongoClient
hostname = 'mongodb://localhost'
port = 27017

client = MongoClient(hostname, port)
db = client['Responses']

UserRes_collection=db.get_collection("userresponses")

field="EmailId"
value="adityasuryawanshi5451@gmail.com"

requiredUser= UserRes_collection.find_one({field:value})