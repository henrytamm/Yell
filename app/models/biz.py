from .db import db, environment, SCHEMA, add_prefix_for_prod
from .business_categories_jointable import  business_categories
from sqlalchemy.sql import func

class Biz(db.Model):
    __tablename__ = 'bizes'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    # category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('category.id')), nullable=False)
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    preview_image = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    users = db.relationship('User', back_populates='biz')
    reviews = db.relationship('Review', cascade="all, delete", back_populates='biz')
    hours = db.relationship('Hour', cascade="all, delete", back_populates='biz')
    categories = db.relationship('Category', secondary=business_categories, back_populates='biz')
    biz_images = db.relationship('BusinessImage', cascade="all, delete", back_populates="biz")

    def category_to_dict(self):
        categoryObj = {}
        for category in self.categories:
            categoryObj[category.id] = category.name
        return categoryObj


    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            # 'categoryId': self.category_id,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'lat': self.lat,
            'lng': self.lng,
            'name': self.name,
            'description': self.description,
            # 'numReviews': self.num_reviews,
            'previewImage': self.preview_image,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'categoryObj': self.category_to_dict()
        }
