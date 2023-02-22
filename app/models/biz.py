from .db import db, environment, SCHEMA, add_prefix_for_prod

class Biz(db.Model):
    __tablename__ = 'bizes'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('user.id')), nullable=False)
    owner_id = db.Column(db.Integer, nullable=False)
    category_id = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    lat = db.Columm(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
    preview_image = db.Column(db.String, nullable=True)
    num_reviews = db.Column(db.Integer, nullable=True)

    users = db.relationship('User', back_populates='bizes')
    reviews = db.relationship('Review', back_populates='bizes')



