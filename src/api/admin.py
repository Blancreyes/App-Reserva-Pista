  
import os
from flask_admin import Admin
from .models import db, User, Pistas, Reservas
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    class ReservasAdmin(ModelView):
        column_list = ("id", "user_id", "pistas_id", "startTime")
        form_columns = ("user_id", "pistas_id", "startTime")
        column_hide_backrefs = False
    class UserAdmin(ModelView):
        column_list = ("id", "name", "lastname", "email", "password")
        form_columns = ("name", "lastname", "email", "password", "reservas")
        column_hide_backrefs = False
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(UserAdmin(User, db.session))
    admin.add_view(ModelView(Pistas, db.session))
    admin.add_view(ReservasAdmin(Reservas, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))