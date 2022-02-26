from app import db
import sqlite3 as lite

owning = db.Table('owning', db.Model.metadata,
                      db.Column('id', db.Integer, db.ForeignKey('customer.id')),
                      db.Column('dogId', db.Integer, db.ForeignKey('dogs.dogId')))
                    

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), index=True)
    password = db.Column(db.String(50), index=True)
    dogs = db.relationship('Dogs', secondary = owning) 


class Dogs(db.Model):
    dogId = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), index=True)
    status = db.Column(db.String(50), index=True)
    breed = db.Column(db.String(50), index=True)
    height = db.Column(db.Integer, index=True)
    weight = db.Column(db.Integer, index=True)
    fitness = db.Column(db.String(150), index=True)
    favTreats = db.Column(db.String(150), index=True)
    favPark = db.Column(db.String(50), index=True)
    bestTrick = db.Column(db.String(50), index=True)
    datingHistory = db.Column(db.String(350), index=True)
    bio = db.Column(db.String(500), index=True)
    customers = db.relationship('Customer', secondary = owning)




db.create_all()