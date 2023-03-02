from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Category

category_routes = Blueprint('categories', __name__)


@category_routes.route('')
def all_categories():
    """
    Query for all categories and returns them in a list of category dictionaries
    """
    categories = Category.query.all()
    return {'categories': [category.to_dict() for category in categories]}
