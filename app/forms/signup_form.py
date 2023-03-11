from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, URL, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), username_exists, Length(min=4)])
    first_name = StringField('First Name', validators=[DataRequired(), Length(min=2)])
    last_name = StringField('Last Name', validators=[DataRequired(), Length(min=2)])
    email = StringField('Email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('Password', validators=[DataRequired(), Length(min=6)])
    zip_code = IntegerField('Zip Code', validators=[DataRequired()])
    user_picture_url = StringField('Password', validators=[DataRequired(), URL(require_tld=True)])

    # class Meta:
    #     csrf=False