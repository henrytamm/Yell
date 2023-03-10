from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class BusinessImage(db.Model):
    __tablename__ = 'business_images'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    biz_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('bizes.id')),  nullable=False)
    url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    biz = db.relationship('Biz', back_populates='biz_images')

    def to_dict(self):
        return {
            'id': self.id,
            'bizId': self.biz_id,
            'url': self.url,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
