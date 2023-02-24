from .db import db, environment, SCHEMA, add_prefix_for_prod
from .business_categories_jointable import business_categories

class Category(db.Model):
    __tablename__ = 'categories'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    biz_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)

    biz = db.relationship('Biz', secondary=business_categories, back_populates="categories")