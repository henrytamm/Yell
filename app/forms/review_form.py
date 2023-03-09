from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange
from app.models import User, Biz, Review

#checks to see if stars/rating is between 1-5
def stars_validator(form, field):
    stars = form.data['stars']
    if stars < 1 or stars > 5:
        raise ValidationError("Rating must be between 1 and 5")

class ReviewForm(FlaskForm):
    review = TextAreaField('Review', validators=[DataRequired()])
    stars = IntegerField('Rating', validators=[DataRequired(), stars_validator])

    class Meta:
        csrf=False
