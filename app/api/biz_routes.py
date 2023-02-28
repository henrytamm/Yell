from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Biz, Review

biz_routes = Blueprint('bizes', __name__)


@biz_routes.route('/')
def bizes():
    """
    Query for all bizes and returns them in a list of biz dictionaries
    """
    bizes = Biz.query.all()
    return {'bizes': [biz.to_dict() for biz in bizes]}


@biz_routes.route('/<int:id>')
def biz(id):
    """
    Query for a biz by id and returns that biz in a dictionary
    """
    biz = Biz.query.get(id)
    return biz.to_dict()

@biz_routes.route('/<int:bizId>/reviews')
def reviews(bizId):
    """
    Query for reviews of a biz by bizId
    """
    reviews = Review.query.filter(Review.biz_id == bizId).all()
    return {'reviews': [review.to_dict() for review in reviews]}
