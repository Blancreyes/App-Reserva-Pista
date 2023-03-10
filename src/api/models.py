from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    reservas = db.relationship('Reservas', backref='user', lazy=True)
    


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "reservas":self.reservas,
            # do not serialize the password, its a security breach
        }

class Pistas(db.Model):
    __tablename__ = 'pistas'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    user= db.relationship('User', backref='pistas_user', lazy=True)
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
    pistas_id=db.Column(db.Integer, db.ForeignKey('pistas.id'),nullable=False)
    startDate = db.Column(db.DateTime(), unique=True, nullable=False)
    endDate = db.Column(db.DateTime(), unique=True, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<reservas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "startDate": self.startDate,
            "endDate": self.endDate,
        }
