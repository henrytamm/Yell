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
    newDict = {}
    index = 1
    for biz in bizes:
        newDict[index] = {
            "owner_id" : biz.owner_id,
            "address" : biz.address,
            "city" : biz.city,
            "state" : biz.state,
            "country" : biz.country,
            "lat" : biz.lat,
            "lng" : biz.lng,
            "name" : biz.name,
            "description" : biz.description,
            "preview_image" : biz.preview_image,
        }
        index += 1

    return newDict
