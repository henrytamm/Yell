from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Biz, Review, db
from forms.biz_form import BizForm

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


@biz_routes.route('/', methods=["POST"])
def new_bizes():
    """
    Create a new biz
    """
    form = BizForm()
    if form.validate_on_submit():
        data = form.data
        new_biz = Biz(
            address = data['address'],
            city = data['city'],
            state = data['state'],
            country = data['country'],
            lat = data['lat'],
            lng = data['lng'],
            name = data['name'],
            description = data['description'],
            preview_image = data['preview_image']
        )

        db.session.add(new_biz)
        db.session.commit()

        return new_biz.to_dict()