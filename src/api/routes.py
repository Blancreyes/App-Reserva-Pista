"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Reservas
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Generate endpoints
@api.route('/user', methods=['POST'])
def handle_create_user():
    #se debe pasar la información a formato json
    request_body=request.json
    
    #se verifica si el usuario ya existe
    user_info_query=User.query.filter_by(email=request_body["email"]).first()
    
    #Si el usuario no existe, entonces se crea usuario
    if user_info_query is None:
        user=User(
            email=request_body["email"],
            password=request_body["password"]
        )
        
        db.session.add(user)
        db.session.commit()
        response_body = {
            "msg": "usuario creado correctamente"
        }
        return jsonify(response_body), 200
    
    else:
        return jsonify("Este usaurio ya existe"), 400
        

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route('/login', methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    #hacemos una consulta para saber si el user ya existe
    user= User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "User doesnt exist"}), 404
    
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    return jsonify({"result":user.serialize()}), 200

#Endpoint para crear las reservas
@api.route('/reservas', methods=['POST'])
def handle_create_reservas():
    #se debe pasar la información a formato json
    request_body=request.json
    
    #se verifica si la reserva ya existe
    reservas_info_query=Reservas.query.filter_by(startTime=request_body["startTime"], user_id=request_body["user_id"]).first()
    
    #Si la reserva no existe, entonces se crea reserva
    if reservas_info_query is None:
        reservas=Reservas(
            user_id=request_body["user_id"],
            pistas_id=request_body["pistas_id"],
            startTime=request_body["startTime"]
        )
        
        db.session.add(reservas)
        db.session.commit()
        response_body = {
            "msg": "Reserva creada correctamente"
        }
        return jsonify(response_body), 200
    
    else:
        return jsonify("Esta reserva ya existe"), 400