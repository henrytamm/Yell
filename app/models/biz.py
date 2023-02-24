from .db import db, environment, SCHEMA, add_prefix_for_prod
from .business_categories_jointable import  business_categories

class Biz(db.Model):
    __tablename__ = 'bizes'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('user.id')), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('category.id')), nullable=False)
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

    users = db.relationship('User', back_populates='biz')
    reviews = db.relationship('Review', back_populates='biz')
    hours = db.relationship('Hours', back_populates='biz')
    categories = db.relationship('Categories', secondary=business_categories, back_populates='biz')
    biz_images = db.relationship('BusinessImage', back_populates="biz")



