from .db import db, environment, SCHEMA, add_prefix_for_prod
from .business_categories_jointable import business_categories
from sqlalchemy.sql import func

class Category(db.Model):
    __tablename__ = 'categories'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    # biz_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    biz = db.relationship('Biz', secondary=business_categories, back_populates="categories")

    def to_dict(self):
        return {
            'id': self.id,
            # 'bizId': self.biz_id,
            'name': self.name,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
