from flask import Blueprint, render_template
from flask import request
from .models import db, Persona

main = Blueprint('main',__name__)

@main.route('/')
def landing_page():
    return render_template('landing_page.html')

#@main.route('/')
#def index():
#    return render_template('index.html')

@main.route('/formulario')
def formulario():
    return render_template('formulario.html')

@main.route('/inicioSesion')
def inicioSesion():
    return render_template('inicioSesion.html')

@main.route('/submit_form', methods=['POST'])
def submit_form():
    nombre=request.form.get('nombre')
    apellido=request.form.get('apellido')
    email=request.form.get('email')
    nueva_persona=Persona(nombre=nombre,
                          apellido=apellido,
                          email=email)
    db.session.add(nueva_persona)
    db.session.commit()

    return render_template('exito.html') 

@main.route('/login', methods=['POST'])
def login():
    email=request.form.get('email')
    return render_template('landing_page.html')    

@main.route('/ver_registros')
def ver_registros():
    personas=Persona.query.all()
    return render_template('ver_registros.html',
                           personas=personas)