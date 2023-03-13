from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True)
    lastname = db.Column(db.String(120), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    reservas = db.relationship('Reservas', backref='user', lazy=True)
    


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "lastname":self.lastname,
            "email": self.email,
            "reservas":self.reservas,
            # do not serialize the password, its a security breach
        }

class Pistas(db.Model):
    __tablename__ = 'pistas'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    reservas = db.relationship('Reservas', backref='pistas', lazy=True)

    def __repr__(self):
        return f'<Pistas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "usuario":self.usuario,
            "reservas":self.reservas
        }
        
class Reservas(db.Model):
    __tablename__ = 'reservas'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    pistas_id=db.Column(db.Integer, db.ForeignKey('pistas.id'), nullable=False)
    startTime = db.Column(db.DateTime(), unique=True, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<reservas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id" : self.user_id,
            "pistas_id" : self.pistas_id,
            "startTime": self.startTime
        }
