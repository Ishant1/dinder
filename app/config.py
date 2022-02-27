import os
OPENAIKEY = os.getenv('OPENAPI_KEY')

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'DataBase/app.sqlite')

DATA_PATH = os.path.abspath(os.path.dirname(__file__))
LABELS_PATH = os.path.abspath(os.path.dirname(__file__))+'/image_summary/labels-summary.json'