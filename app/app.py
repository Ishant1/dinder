from flask import Flask, request
from requests import request
import time
from config import DATA_PATH
import pandas as pd

app = Flask(__name__)

@app.route("/gettime",methods=["GET","POST"])
def gettime():
    return str(time.time())

@app.route("/getcustomers",methods=["GET","POST"])
def getcustomer():
    customers = pd.read_csv(DATA_PATH+'/Data/customer.csv')
    json_customers = customers.to_json(orient='records')
    reply = {'data':json_customers}
    return reply

@app.route("/setuserid", methods=["POST"])
def predict():
    # Load the Input
    data = request.headers['x']

    # Load the model
    model = load_model()

    # Make predictions on input data
    model.predict(data)


app.run(host='0.0.0.0', port = 8000)