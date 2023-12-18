from flask import Blueprint, render_template
from flask import request, jsonify
from .models import db, Persona
import hashlib
import os
import jwt
from sqlalchemy.exc import IntegrityError

main = Blueprint('main',__name__)

@main.route('/')
def landing_page():
    return render_template('landing_page.html')

#@main.route('/')
#def index():
#    return render_template('index.html')

@main.route('/mapas')
def mapas():
    return render_template('mapas.html')

@main.route('/formulario')
def formulario():
    return render_template('formulario.html')

@main.route('/inicioSesion')
def inicioSesion():
    return render_template('inicioSesion.html')

@main.route('/submit_form', methods=['POST'])
def submit_form():
    # data = request.get_json()
    
    # nombre = data.get('nombre')
    # apellido = data.get('apellido')
    # email = data.get('email')
    # contraseña = data.get('contraseña')

    nombre=request.form.get('nombre')
    apellido=request.form.get('apellido')
    email=request.form.get('email')
    contraseña=request.form.get('contraseña')

    # if not nombre or not apellido or not email or not contraseña:
    #     return jsonify({'message': 'Por favor, llene todos los campos'}), 400
    
    try:
        # Generar salt
        salt = os.urandom(16)
        salted_password = contraseña.encode() + salt

        # Hash de la contraseña
        password_hash = hashlib.pbkdf2_hmac('sha256', salted_password, salt, 100000)

        nueva_persona = Persona(nombre=nombre, apellido=apellido, email=email, password_hash=password_hash, salt=salt)
        db.session.add(nueva_persona)

        db.session.commit()

        return render_template('exito.html')
        # return jsonify({'message': 'Usuario registrado exitosamente'}), 201, render_template('exito.html')
    
    except IntegrityError:
        # Violación de integridad, el usuario ya existe
        db.session.rollback()
        return jsonify({'message': 'Ya existe un usuario registrado con este correo'}), 400

    except Exception as e:
        # Ocurrió un error, deshacer los cambios
        db.session.rollback()
        return jsonify({'message': 'Error interno del servidor'}), 500
    
    #existing_user = Persona.query.filter_by(nombre=nombre).first()

    # if existing_user:
    # # El usuario ya existe          
    #     db.session.rollback()
    #     return jsonify({'message': 'User already exists'}), 400
    
    # else:
    # # El usuario no existe, se procede a la creación
        
    #     # Generar salt
    #     salt = os.urandom(16)
    #     salted_password = contraseña.encode() + salt

    #     # Hash de la contraseña
    #     password_hash = hashlib.pbkdf2_hmac('sha256', salted_password, salt, 100000)


    #     nueva_persona = Persona(nombre=nombre, apellido=apellido, email=email, contraseña=contraseña)
    #     db.session.add(nueva_persona)
    #     db.session.commit()

    #     return jsonify({'message': 'Usuario registrado exitosamente'}), 201, render_template('exito.html')

# Clave secreta para la generación de tokens
SECRET_KEY = "your-secret-key"

@main.route('/login', methods=['POST'])
def login():
    email=request.form.get('email')
    contraseña=request.form.get('contraseña')
    
    # Consultar al usuario en la base de datos
    user = Persona.query.filter_by(email=email).first()

    # Si el usuario no existe, regresar error
    if not user:
        return jsonify({'message': 'Datos invalidos'}), 401
    
    user_id = user.id
    user_name = user.nombre
    user_password_hash = user.password_hash
    user_salt = user.salt

    # Generar el hash de la contraseña proporcionada
    salted_password = contraseña.encode() + user_salt
    password_hash = hashlib.pbkdf2_hmac('sha256', salted_password, user_salt, 100000)

    # Si la contraseña no coincide, regresar error
    if password_hash != user_password_hash:
        return jsonify({'message': 'Datos invalidos'}), 401

    # Generar el token
    token = jwt.encode({'email': email}, SECRET_KEY, algorithm='HS256')

    #return jsonify({'token': token}), 200

    return render_template('landing_page.html')    

@main.route('/ver_registros')
def ver_registros():
    personas=Persona.query.all()
    return render_template('ver_registros.html',
                           personas=personas)