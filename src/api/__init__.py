from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail

app=Flask(_name_)

app.config["SECRET_KEY"]="thisisfirstflaskapp"


app.config['MAIL_SERVER']='sandbox.smtp.mailtrap.io'
app.config['MAIL_PORT'] = 2525
app.config['MAIL_USERNAME'] = '34eac7fc655adc'
app.config['MAIL_PASSWORD'] = '74da2dfbb47b7a'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False