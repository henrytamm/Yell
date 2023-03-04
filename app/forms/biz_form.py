from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, URL, Length
from app.models import User, Biz, Review

def location_exists(form, field):
    # Checking if user exists
    address = form.data['address']
    city = form.data['city']
    state = form.data['state']
    biz = Biz.query.filter(Biz.address == address, Biz.city == city, Biz.state == state).first()
    if biz:
        raise ValidationError('Location is already in use.')

class BizForm(FlaskForm):
    # owner_id = IntegerField('Owner Id', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired(), location_exists, Length(min=4)])
    city = StringField('City', validators=[DataRequired(), location_exists, Length(min=2)])
    state = StringField('State', validators=[DataRequired(), location_exists, Length(min=2)])
    country = StringField('Country', validators=[DataRequired(), Length(min=2)])
    lat = DecimalField('Latitude', validators=[DataRequired()])
    lng = DecimalField('Longitude', validators=[DataRequired()])
    name = StringField('Business Name', validators=[DataRequired(), Length(min=2)])
    description = TextAreaField('Description', validators=[DataRequired()])
    preview_image = StringField('Preview Image URL', validators=[DataRequired(), URL(require_tld=True)])
