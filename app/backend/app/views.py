from flask import render_template, flash, redirect, session, request, url_for, make_response, Markup
from flask_admin.contrib.sqla import ModelView
import sqlite3 as lite
from sqlite3 import Error
from app import app, db, admin, models
from datetime import timedelta
from datetime import datetime
import json
import os
from werkzeug.utils import secure_filename
import hashlib
import numpy as np
from .models import Customer, Dogs

#adding the models to flask admin
admin.add_view(ModelView(Customer, db.session))
admin.add_view(ModelView(Dogs, db.session))



# landing page
@app.route('/')
def index():
    return '''
 
 
    <title>Hello World</title>
 
    <h1>Hello World !!!</h1>
 
    '''
