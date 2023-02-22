from .db import db, environment, SCHEMA, add_prefix_for_prod

class Hour(db.Model):
    __tablename__ = 'hours'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    biz_id = db.Column(db.Integer, nullable=False)
    mondayOpen = db.Column(db.Time, nullable=False)
    mondayClose = db.Column(db.Time, nullable=False)
    tuesdayOpen = db.Column(db.Time, nullable=False)
    tuesdayClose = db.Column(db.Time, nullable=False)
    wednesdayOpen = db.Column(db.Time, nullable=False)
    wednesdayClose = db.Column(db.Time, nullable=False)
    thursdayOpen = db.Column(db.Time, nullable=False)
    thursdayClose = db.Column(db.Time, nullable=False)
    fridayOpen = db.Column(db.Time, nullable=False)
    fridayClose = db.Column(db.Time, nullable=False)
    saturdayOpen = db.Column(db.Time, nullable=False)
    saturdayClose = db.Column(db.Time, nullable=False)
    sundayOpen = db.Column(db.Time, nullable=False)
    sundayClose = db.Column(db.Time, nullable=False)