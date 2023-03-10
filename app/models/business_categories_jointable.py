from .db import db, environment, SCHEMA, add_prefix_for_prod
# association_table_args = {}
# if environment == 'production':
#     association_table_args['__table_args__'] = {"schema": SCHEMA}

business_categories = db.Table(
    "business_categories",
    db.Column("biz_id", db.Integer, db.ForeignKey(add_prefix_for_prod("bizes.id"), ondelete="CASCADE"), primary_key=True),
    db.Column("category_id", db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id"), ondelete="CASCADE"), primary_key=True),
    # **association_table_args
)
if environment == "production":
    business_categories.schema = SCHEMA
