from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Biz, Review, db
from ..forms.biz_form import BizForm
from ..forms.review_form import ReviewForm

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

    


@biz_routes.route('/', methods=["POST"])
@login_required
def new_bizes():
    """
    Create a new biz
    """
    form = BizForm()
    # if form.validate_on_submit():
    data = form.data
    # biz = Biz.query.filter(Biz.address == data['address']).all()
    # if(biz):
    #   tell user that address is already taken

    new_biz = Biz(
        owner_id=current_user.get_id(),
        address=data['address'],
        city=data['city'],
        state=data['state'],
        country=data['country'],
        lat=data['lat'],
        lng=data['lng'],
        name=data['name'],
        description=data['description'],
        preview_image=data['preview_image']
    )

    db.session.add(new_biz)
    db.session.commit()

    return new_biz.to_dict()

@biz_routes.route('/<int:bizId>', methods=["PUT"])
@login_required
def edit_biz(bizId):
    """
    Edit current biz
    """
    form = BizForm()

    data = form.data
    print('data eherer*****', data)
    biz = Biz.query.get(bizId)

    if(biz.owner_id==int(current_user.get_id())):
        for key, value in data.items():
            if hasattr(biz, key) and value is not None:
                setattr(biz, key, value)

    db.session.commit()

    return biz.to_dict()

@biz_routes.route('/<int:bizId>', methods=["DELETE"])
@login_required
def delete_biz(bizId):
    """
    Delete current biz
    """

    biz = Biz.query.get(bizId)
    if(biz.owner_id==int(current_user.get_id())):
        db.session.delete(biz)
        db.session.commit()
        return 'Successfully deleted'

    return 'Not authorized to delete'


@biz_routes.route('/<int:bizId>/reviews')
def reviews(bizId):
    """
    Query for all reviews of a business and returns them in a list of review dictionaries
    """
    reviews = Review.query.filter(Review.biz_id == bizId).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@biz_routes.route('/<int:bizId>/reviews/<int:reviewId>')
def review(bizId, reviewId):
    """
    Query for a review by id and returns that review in a dictionary
    """
    review = Review.query.get(reviewId)
    return review.to_dict()


@biz_routes.route('/<int:bizId>/reviews', methods=['POST'])
@login_required
def review_create(bizId):
    """
    Create a review for a business
    """
    form = ReviewForm()
    # if form.validate_on_submit():
    data = form.data
    # biz = Biz.query.filter(Biz.address == data['address']).all()
    # if(biz):
    #   tell user that address is already taken

    new_review = Review(
        user_id=current_user.get_id(),
        biz_id=bizId,
        stars=data['stars'],
        review=data['review']
    )

    db.session.add(new_review)
    db.session.commit()

    return new_review.to_dict()


@biz_routes.route('/<int:bizId>/reviews/<int:reviewId>', methods=["PUT"])
@login_required
def edit_review(bizId, reviewId):
    """
    Edit review for a business
    """
    form = ReviewForm()

    data = form.data
    review = Review.query.get(reviewId)

    if(review.user_id==int(current_user.get_id())):
        for key, value in data.items():
            if hasattr(review, key) and value is not None:
                setattr(review, key, value)

    db.session.commit()

    return review.to_dict()


@biz_routes.route('/<int:bizId>/reviews/<int:reviewId>', methods=["DELETE"])
@login_required
def delete_review(bizId, reviewId):
    """
    Delete a review for a business
    """

    review = Review.query.get(reviewId)
    if(review.user_id==int(current_user.get_id())):
        db.session.delete(review)
        db.session.commit()
        return 'Successfully deleted'

    return 'Not authorized to delete'