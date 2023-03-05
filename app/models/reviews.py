from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Review(db.Model):
    __tablename__ = 'reviews'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    biz_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('bizes.id')), nullable=False)
    review = db.Column(db.String, nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    biz = db.relationship('Biz', back_populates='reviews')
    users = db.relationship('User', back_populates='reviews')
    review_images = db.relationship('ReviewImage', cascade="all, delete", back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'bizId': self.biz_id,
            'review': self.review,
            'stars': self.stars,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'userInfo': self.users.to_dict()
        }
