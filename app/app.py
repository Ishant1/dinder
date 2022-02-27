from flask import Flask, request
from flask_cors import CORS
import time
from config import DATA_PATH
import pandas as pd
import json
from Data.create_tables import reset_match_data
from image_summary.openai_summary import get_summary_for_labels

app = Flask(__name__)

@app.route("/gettime",methods=["GET","POST"])
def gettime():
    return str(time.time())

@app.route("/getcustomers",methods=["GET","POST"])
def getcustomer():
    customers = pd.read_csv(DATA_PATH+'/Data/dogs.csv')
    json_customers = customers.to_json(orient='records')
    reply = {'data':json.loads(json_customers)}
    return reply

@app.route('/getacustomer',methods=["GET"])
def getacustomer():
    d1 = request.args.get('id1')
    customers = pd.read_csv(DATA_PATH + '/Data/dogs.csv')
    single = customers.loc[customers['id']==d1,:]
    if single.shape[0]>0:
        json_dog = single.to_json(orient='records')
        reply = {'data': json.loads(json_dog)}
        return reply
    else:
        return False



@app.route("/createuser", methods = ["POST"])
def createuser():
    data = request.json
    try:
        dogs = pd.read_csv(DATA_PATH+'/Data/dogs.csv')
        dogs_new = dogs.append(data,ignore_index=True)
        dogs_new.to_csv(DATA_PATH+'/Data/dogs.csv')
        return 'Added new user'
    except:
        return 'Error'


@app.route("/unseen", methods = ["GET"])
def unseenusers():
    d1 = request.args.get('id1')
    seen = pd.read_csv(DATA_PATH+'/Data/seenuser.csv', usecols=["id1", "id2"])
    seen1 = seen.loc[seen.id1==d1,'id2'].to_list()+[d1]
    customers = pd.read_csv(DATA_PATH + '/Data/dogs.csv')
    customers_unseen = customers.loc[~customers['id'].isin(seen1),:]
    json_dog = customers_unseen.to_json(orient='records')
    reply = {'data':json.loads(json_dog)}
    return reply

@app.route("/match", methods = ["POST"])
def matches():
    data = request.json
    d1 = data['id1']
    d2 = data['id2']
    try:
        matches = pd.read_csv(DATA_PATH+'/Data/matches.csv', usecols=["id1", "id2"])
        matches_new = matches.append({'id1':d1,'id2':d2},ignore_index=True)
        matches_new.to_csv(DATA_PATH+'/Data/matches.csv')
        return 'Match Uploaded'
    except:
        return 'Error'

@app.route("/likeusers", methods = ["GET"])
def likeusers():
    d1 = request.args.get('id1')
    matches = pd.read_csv(DATA_PATH+'/Data/matches.csv', usecols=["id1", "id2"])
    matches1 = matches.loc[matches.id1==d1,'id2'].to_list()
    print(matches1)
    customers = pd.read_csv(DATA_PATH + '/Data/dogs.csv')
    customers_matched = customers.loc[customers['id'].isin(matches1), :]
    json_dog = customers_matched.to_json(orient='records')
    reply = {'data': json.loads(json_dog)}
    return reply

@app.route("/matchusers", methods = ["GET"])
def matchusers():
    d1 = request.args.get('id1')
    matches = pd.read_csv(DATA_PATH+'/Data/matches.csv', usecols=["id1", "id2"])
    matches1 = matches.loc[matches.id1==d1,'id2'].to_list()
    matches2 = matches.loc[((matches['id1'].isin(matches1))&(matches['id2']==d1)),'id1'].to_list()
    customers = pd.read_csv(DATA_PATH + '/Data/dogs.csv')
    customers_matched = customers.loc[customers['id'].isin(matches2), :]
    json_dog = customers_matched.to_json(orient='records')
    reply = {'data': json.loads(json_dog)}
    return reply

@app.route("/seenuser", methods=["POST"])
def seenuser():
    data = request.json
    d1 = data['id1']
    d2 = data['id2']

    try:
        seenuser = pd.read_csv(DATA_PATH + '/Data/seenuser.csv', usecols=["id1", "id2"])
        seenuser_new = seenuser.append({'id1': d1, 'id2': d2}, ignore_index=True)
        seenuser_new.to_csv(DATA_PATH + '/Data/seenuser.csv')
        return 'seen user Uploaded'
    except:
        return 'Error'

@app.route("/automatebio",methods=["GET"])
def automated_bio():
    name = request.args.get('name')
    breed = request.args.get('breed')
    treat = request.args.get('treat')
    park = request.args.get('park')
    trick = request.args.get('trick')
    list_of_features = [name,breed,treat,park,trick]
    summary = get_summary_for_labels(list_of_features)
    return summary[0]


@app.route("/resetdata", methods=["GET"])
def resetdata():
    reset_match_data()
    return 'Reset match data'

CORS(app, resources={r"*": {"origins": "*"}})
app.run(host='0.0.0.0', port = 8000)