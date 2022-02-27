import pandas as pd
from config import DATA_PATH

def create_new_tables():
    data_loc = 'app/Data'

    customer = pd.DataFrame(columns = ['id', 'email', 'password'])
    dogs = pd.DataFrame(columns = ['id', 'name', 'status char', 'breed char', 'height', 'weight',
                           'fitness' , 'favTreats', 'favPark', 'bestTrick', 'datingHistory',
                           'bio' ])

    customer.to_csv(data_loc+'/customer.csv')
    dogs.to_csv(data_loc+'/dogs.csv')

    customer = customer.append({'id':2, 'email':'jnvd', 'password':'egjrgnv', 'dog_id':24},ignore_index=True)

def reset_match_data():
    matches = pd.DataFrame([{"id1":"auth0|621a9cf6a8c6dd0075e11fce","id2":"2"},{"id1":"auth0|621a9cf6a8c6dd0075e11fce","id2":"3"},{"id1":"3","id2":"4"},{"id1":"3","id2":"auth0|621a9cf6a8c6dd0075e11fce"}])
    matches.to_csv(DATA_PATH+'/Data/matches.csv',index=False)
    seen = pd.DataFrame([{"id1":"auth0|621a9cf6a8c6dd0075e11fce","id2":"2"},{"id1":"auth0|621a9cf6a8c6dd0075e11fce","id2":"3"},{"id1":"auth0|621a9cf6a8c6dd0075e11fce","id2":"4"},{"id1":"3","id2":"auth0|621a9cf6a8c6dd0075e11fce"},{"id1":"3","id2":"2"},{"id1":"3","id2":"4"},{"id1":"3","id2":"auth0|621a437e34996e0068851ade"}])
    seen.to_csv(DATA_PATH+'/Data/seenuser.csv',index=False)