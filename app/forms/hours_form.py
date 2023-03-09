from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, TextAreaField, TimeField
from wtforms.validators import DataRequired, Email, ValidationError, URL, Length
from app.models import Hour


class HoursForm(FlaskForm):
    monday_open = TimeField("Monday Open", validators=[DataRequired()])
    monday_close = TimeField("Monday Close", validators=[DataRequired()])
    tuesday_open = TimeField("Tuesday Open", validators=[DataRequired()])
    tuesday_close = TimeField("Tuesday Close", validators=[DataRequired()])
    wednesday_open = TimeField("Wednesday Open", validators=[DataRequired()])
    wednesday_close = TimeField("Wednesday Close", validators=[DataRequired()])
    thursday_open = TimeField("Thursday Open", validators=[DataRequired()])
    thursday_close = TimeField("Thursday Close", validators=[DataRequired()])
    friday_open = TimeField("Friday Open", validators=[DataRequired()])
    friday_close = TimeField("Friday Close", validators=[DataRequired()])
    saturday_open = TimeField("Saturday Open", validators=[DataRequired()])
    saturday_close = TimeField("Saturday Close", validators=[DataRequired()])
    sunday_open = TimeField("Sunday Open", validators=[DataRequired()])
    sunday_close = TimeField("Sunday Close", validators=[DataRequired()])

    class Meta:
        csrf=False
