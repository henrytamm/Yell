from .db import db, environment, SCHEMA, add_prefix_for_prod



business_categories = db.Table(
    "business_categories",
    db.Column("biz_id", db.Integer, db.ForeignKey(add_prefix_for_prod("bizes.id")), primary_key=True),
    db.Column("category_id", db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id")), primary_key=True)
)
