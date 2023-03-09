from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, TextAreaField, TimeField
from wtforms.validators import DataRequired, Email, ValidationError, URL, Length
from app.models import Hour


class HoursEditForm(FlaskForm):
    monday_open = TimeField("Monday Open", validators=[])
    monday_close = TimeField("Monday Close", validators=[])
    tuesday_open = TimeField("Tuesday Open", validators=[])
    tuesday_close = TimeField("Tuesday Close", validators=[])
    wednesday_open = TimeField("Wednesday Open", validators=[])
    wednesday_close = TimeField("Wednesday Close", validators=[])
    thursday_open = TimeField("Thursday Open", validators=[])
    thursday_close = TimeField("Thursday Close", validators=[])
    friday_open = TimeField("Friday Open", validators=[])
    friday_close = TimeField("Friday Close", validators=[])
    saturday_open = TimeField("Saturday Open", validators=[])
    saturday_close = TimeField("Saturday Close", validators=[])
    sunday_open = TimeField("Sunday Open", validators=[])
    sunday_close = TimeField("Sunday Close", validators=[])

    class Meta:
        csrf=False
