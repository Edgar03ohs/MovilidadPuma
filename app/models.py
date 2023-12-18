from . import db

class Persona(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    nombre=db.Column(db.String(100))
    apellido=db.Column(db.String(100))
    email=db.Column(db.String(100), unique=True)
    password_hash=db.Column(db.BLOB(100))
    salt=db.Column(db.BLOB(100))