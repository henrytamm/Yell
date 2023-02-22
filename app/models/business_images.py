from .db import db, environment, SCHEMA, add_prefix_for_prod

class BusinessImage(db.Model):
    __tablename__ = 'businessImages'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    biz_id = db.Column(db.Integer, nullable=False)
    url = db.Column(db.String, nullable=False)