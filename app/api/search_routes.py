from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Biz, Review, Category, business_categories, db

search_routes = Blueprint('categories', __name__)

@search_routes.route('/<int:categoryId>')
def bizes_by_category(categoryId):
  """
  Query for all bizes of the specified category by id
  """
  print("in search route")

  category = Category.query.filter(Category.id == categoryId).first()
  bizes = category.biz
  print("----------------", type(bizes), bizes)
  # bizzes = Biz.query.get(id for id in bizes.)
  return "bizes"
  # biz_categories = db.session.query(Biz, Category).join(Biz.categories).join(Category.biz).filter(Biz.id == 1).all()
  # print("------------------------------biz_categories", biz_categories)
  # return biz_categories
  # return "1"
  # biz_categories = db.session.query(Biz) \
  #                       .join(Category)  \
  #                       .filter(Category.id == categoryId)
  # print(biz_categories)
  # return dict(biz_categories)
