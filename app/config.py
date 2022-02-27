import os
OPENAIKEY = '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'

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'DataBase/app.sqlite')

DATA_PATH = os.path.abspath(os.path.dirname(__file__))
LABELS_PATH = os.path.abspath(os.path.dirname(__file__))+'/image_summary/labels-summary.json'