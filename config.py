<<<<<<< HEAD
import os

WTF_CSRF_ENABLED = True
SECRET_KEY = 'SECRETKEY982663535'

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db?check_same_thread=False')
SQLALCHEMY_TRACK_MODIFICATIONS = True
=======
import os

WTF_CSRF_ENABLED = True
SECRET_KEY = 'SECRETKEY982663535'

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db?check_same_thread=False')
SQLALCHEMY_TRACK_MODIFICATIONS = True
>>>>>>> 7847f4df3a30768d5869c3a509624d286ce608b3
