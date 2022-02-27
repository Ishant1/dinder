import os
OPENAIKEY = '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'

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'DataBase/app.sqlite')

DATA_PATH = os.path.abspath(os.path.dirname(__file__))