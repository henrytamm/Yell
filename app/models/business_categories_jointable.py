from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.types import Integer, String

Base = declarative_base()

business_categories = Table(
    "business_categories",
    Base.metadata,
    Column("biz_id", ForeignKey("bizes.id"), primary_key=True),
    Column("category_id", ForeignKey("categories.id"), primary_key=True)
)
