from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Hour(db.Model):
    __tablename__ = 'hours'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    biz_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('bizes.id')), nullable=False)
    monday_open = db.Column(db.Time, nullable=False)
    monday_close = db.Column(db.Time, nullable=False)
    tuesday_open = db.Column(db.Time, nullable=False)
    tuesday_close = db.Column(db.Time, nullable=False)
    wednesday_open = db.Column(db.Time, nullable=False)
    wednesday_close = db.Column(db.Time, nullable=False)
    thursday_open = db.Column(db.Time, nullable=False)
    thursday_close = db.Column(db.Time, nullable=False)
    friday_open = db.Column(db.Time, nullable=False)
    friday_close = db.Column(db.Time, nullable=False)
    saturday_open = db.Column(db.Time, nullable=False)
    saturday_close = db.Column(db.Time, nullable=False)
    sunday_open = db.Column(db.Time, nullable=False)
    sunday_close = db.Column(db.Time, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    biz = db.relationship('Biz', back_populates='hours')

    def to_dict(self):
        return {
            'id': self.id,
            'bizId': self.biz_id,
            'mondayOpen': self.monday_open,
            'mondayClose': self.monday_close,
            'tuesdayOpen': self.tuesday_open,
            'tuesdayClose': self.tuesday_close,
            'wednesdayOpen': self.wednesday_open,
            'wednesdayClose': self.wednesday_close,
            'thursdayOpen': self.thursday_open,
            'thursdayClose': self.thursday_close,
            'fridayOpen': self.friday_open,
            'fridayClose': self.friday_close,
            'saturdayOpen': self.saturday_open,
            'saturdayClose': self.saturday_close,
            'sundayOpen': self.sunday_open,
            'sundayClose': self.sunday_close,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
