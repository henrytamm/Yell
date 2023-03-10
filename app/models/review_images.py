from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class ReviewImage(db.Model):
    __tablename__ = 'review_images'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), nullable=False)
    url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    reviews = db.relationship('Review', back_populates='review_images')

    def to_dict(self):
        return {
            'id': self.id,
            'reviewId': self.review_id,
            'url': self.url,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
