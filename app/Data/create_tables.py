import pandas as pd

data_loc = 'app/Data'

customer = pd.DataFrame(columns = ['id', 'email', 'password'])
dogs = pd.DataFrame(columns = ['id', 'name', 'status char', 'breed char', 'height', 'weight',
                       'fitness' , 'favTreats', 'favPark', 'bestTrick', 'datingHistory',
                       'bio' ])

customer.to_csv(data_loc+'/customer.csv')
dogs.to_csv(data_loc+'/dogs.csv')

customer = customer.append({'id':2, 'email':'jnvd', 'password':'egjrgnv', 'dog_id':24},ignore_index=True)

