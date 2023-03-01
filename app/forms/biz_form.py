from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Biz, Review


class BizForm(FlaskForm):
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    lat = DecimalField('Latitutde', validators=[DataRequired()])
    lng = DecimalField('Longitude', validators=[DataRequired()])
    name = StringField('Business Name', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[])
    preview_image = StringField('Preview Image URL', validators=[])
