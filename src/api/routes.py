"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint,current_app
from api.models import db, User, Reservas, Pistas
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_mail import Message #importamos Message() de flask_mail
import random #importamos ramdom y string para generar una clave aleatoria nueva
import string


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
            name=request_body["name"],
            lastname=request_body["lastname"],
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
        return jsonify("Este usuario ya existe"), 400
        

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

@api.route('/user', methods=['GET'])
def get_all_user():
   
    #se verifica si la reserva ya existe
    all_user_info= User.query.all()

    result=list(map(lambda item: item.serialize(), all_user_info))
    
  
    
    if all_user_info:
        response_body = {
            "msg": "Reservas existentes para este usuario",
            "result": result
            
        }
        return jsonify(response_body), 200
    else:
        return jsonify("request error"), 400

@api.route('/perfil', methods=['GET'])
@jwt_required()
def get_user_byId():
   
    user_token=get_jwt_identity()
    
    user=User.query.filter_by(email=user_token).first()
      

    return jsonify(user.serialize()), 200
    

@api.route('/reservas/<int:user_id>', methods=['GET'])
def handle_consult_reservas_byUserId(user_id):
   
    #se verifica si la reserva ya existe
    reservas_info_query=Reservas.query.filter_by(user_id=user_id).all()
    result=list(map(lambda item: item.serialize(), reservas_info_query))
    
    print(result)
    
    if reservas_info_query:
        response_body = {
            "msg": "Reservas existentes para este usuario",
            "result": result
            
        }
        return jsonify(response_body), 200
    else:
        return jsonify("El usuario introducido no posee reservas o no existe"), 400

@api.route('/reservas', methods=['GET'])
def handle_consult_reservas():
    
    #se verifica si la reserva ya existe
    # reservas_info_query=Reservas.query.all()
    
    reservas_info_query=Reservas.query.filter_by(user_id=User.id).first()
    
    
    result=list(map(lambda item: item.serialize(), reservas_info_query))
    print(result)
    
    response_body = {
        "msg": "Estas son todas las reservas existentes",
        "result": result
        
    }
    return jsonify(response_body), 200
    
@api.route('/reservas', methods=['PUT'])
def handle_update_reservas():
    #se debe pasar la información a formato json
    request_body=request.json
    
    #se verifica si la reserva ya existe
    reservas_info_query=Reservas.query.filter_by(user_id=request_body["user_id"], id=request_body["id"]).first()
    # result=list(map(lambda item: item.serialize(), reservas_info_query))
 
    
    reservas_info_query.startTime=request_body["startTime"]
    
    db.session.add(reservas_info_query)
    db.session.commit()
    response_body = {
        "msg": "Reserva existe",
        # "result": result
        
    }
    return jsonify(response_body), 200

# CONSEGUIMOS EL TOKEN QUE ENVIAREMOS POR EMAIL PARA CAMBIAR CONTRASEÑA

@api.route('/password', methods=["POST"])
def recover_password():
    email = request.json.get("email", None)
    
    user= User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "Este correo electrónico no está asociado a ningún usuario"}), 404

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# CON ESE TOKEN CONFIRMAMOS EL USUARIO Y LO AUTORIZAMOS

@api.route("/password", methods=["GET"])
@jwt_required()
def get_user_data():
    
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    return jsonify({"result":user.serialize()}), 200

# RECUPERACION DE CONTRASEÑA

@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) #clave aleatoria nueva

    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
	#busco si el correo existe en mi base de datos
    user = User.query.filter_by(email=recover_email).first()
    if recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #si existe guardo la nueva contraseña aleatoria
    user.password = recover_password
    db.session.commit()
	#luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200


@api.route("/pistas", methods=["GET"])
def get_pistas():
    # Access the identity of the current user with get_jwt_identity
    pistas = Pistas.query.all()
    results=list(map(lambda item: item.serialize(), pistas))
   # return jsonify({"result":user.serialize()}), 200
    return jsonify(results), 200

# Con este ENDPOINT pretendemos traer solamente la infor de una pista determinada pasara por parametro
@api.route("/infopista/<int:id>", methods=["GET"])
def get_info_pista(id):
    
    pista = Pistas.query.filter_by(id=id).first()
    response_body = {
        "msg":"Este es el nombre de la pista",
        "datosPista": pista.serialize()
    }
    print(response_body)
    # return jsonify({"result":user.serialize()}), 200
    return jsonify({"result":pista.serialize()}), 200

@api.route('/pistas/reservas/<int:id_pista>', methods=['GET'])
def handle_pistasreservas(id_pista):
    #se debe pasar la información a formato json
    #se verifica si la reserva ya existe
    reservas_info_query=Reservas.query.filter_by(pistas_id=id_pista).all()
    result=list(map(lambda item: item.startTime, reservas_info_query))
    print(result)
    
    
    response_body = {
        # "msg": "Reserva existe",
        "result": result
        
    }
    return jsonify(response_body), 200