from flask import Flask, request
from requests import request
import time

app = Flask(__name__)

@app.route("/gettime",methods=["GET","POST"])
def gettime():
    return str(time.time())

@app.route("/setuserid", methods=["POST"])
def predict():
    # Load the Input
    data = request.headers['x']

    # Load the model
    model = load_model()

    # Make predictions on input data
    model.predict(data)


app.run(host='0.0.0.0', port = 80)