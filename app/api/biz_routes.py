from flask import Blueprint, jsonify
from sqlalchemy.exc import SQLAlchemyError
from flask_login import login_required, current_user
from app.models import Biz, Review, db, Hour, Category
from ..forms.biz_form import BizForm
from ..forms.review_form import ReviewForm
from ..forms.hours_form import HoursForm
from ..forms.biz_edit_form import BizEditForm
from ..forms.hours_edit_form import HoursEditForm


biz_routes = Blueprint('bizes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@biz_routes.route('/')
def bizes():
    """
    Query for all bizes and returns them in a list of biz dictionaries
    """
    bizes = Biz.query.all()
    return jsonify({'bizes': [biz.to_dict() for biz in bizes]})


@biz_routes.route('/<int:id>')
def biz(id):
    """
    Query for a biz by id and returns that biz in a dictionary
    """
    try:
        biz = Biz.query.get(id)
        if biz is None:
            raise SQLAlchemyError("Business not found!")
        return jsonify(biz.to_dict())
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:id>/hours')
def bizHours(id):
    """
    Query for hours of a biz by id and returns that hours in a dictionary
    """
    try:
        biz = Biz.query.get(id)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't get hours!")
        hours = Hour.query.filter(Hour.biz_id == id).first()
        if hours is None:
            return 'No hours added for business yet.'
        hoursDict = {
            'bizId': str(hours.biz_id),
            'mondayOpen': str(hours.monday_open),
            'mondayClose': str(hours.monday_close),
            'tuesdayOpen': str(hours.tuesday_open),
            'tuesdayClose': str(hours.tuesday_close),
            'wednesdayOpen': str(hours.wednesday_open),
            'wednesdayClose': str(hours.wednesday_close),
            'thursdayOpen': str(hours.thursday_open),
            'thursdayClose': str(hours.thursday_close),
            'fridayOpen': str(hours.friday_open),
            'fridayClose': str(hours.friday_close),
            'saturdayOpen': str(hours.saturday_open),
            'saturdayClose': str(hours.saturday_close),
            'sundayOpen': str(hours.sunday_open),
            'sundayClose': str(hours.sunday_close),
        }
        return hoursDict
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:id>/hours', methods=["POST"])
def createBizHours(id):
    """
    Create hours for a biz by id and returns that hours in a dictionary
    """
    form = HoursForm()
    data = form.data
    print('printing data from backend', data)
    try:
        biz = Biz.query.get(id)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't add hours!")
        try:

            if (biz.owner_id == int(current_user.get_id())):
                 if form.validate_on_submit():
                    hours = Hour(
                        biz_id=id,
                        monday_open=data['monday_open'],
                        monday_close=data['monday_close'],
                        tuesday_open=data['tuesday_open'],
                        tuesday_close=data['tuesday_close'],
                        wednesday_open=data['wednesday_open'],
                        wednesday_close=data['wednesday_close'],
                        thursday_open=data['thursday_open'],
                        thursday_close=data['thursday_close'],
                        friday_open=data['friday_open'],
                        friday_close=data['friday_close'],
                        saturday_open=data['saturday_open'],
                        saturday_close=data['saturday_close'],
                        sunday_open=data['sunday_open'],
                        sunday_close=data['sunday_close']
                    )
                    db.session.add(hours)
                    db.session.commit()
                    hoursDict = {
                        'bizId': str(hours.biz_id),
                        'mondayOpen': str(hours.monday_open),
                        'mondayClose': str(hours.monday_close),
                        'tuesdayOpen': str(hours.tuesday_open),
                        'tuesdayClose': str(hours.tuesday_close),
                        'wednesdayOpen': str(hours.wednesday_open),
                        'wednesdayClose': str(hours.wednesday_close),
                        'thursdayOpen': str(hours.thursday_open),
                        'thursdayClose': str(hours.thursday_close),
                        'fridayOpen': str(hours.friday_open),
                        'fridayClose': str(hours.friday_close),
                        'saturdayOpen': str(hours.saturday_open),
                        'saturdayClose': str(hours.saturday_close),
                        'sundayOpen': str(hours.sunday_open),
                        'sundayClose': str(hours.sunday_close),
                    }
                    return hoursDict
                 return {'errors': validation_errors_to_error_messages(form.errors)}, 401
            else:
                raise SQLAlchemyError(
                    'User not authorized to add hours.')
        except SQLAlchemyError as e:
            return jsonify({'error': str(e)}), 401
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:id>/hours/edit', methods=["PUT"])
def editBizHours(id):
    """
    Edit hours of a biz by id and returns that hours in a dictionary
    """
    form = HoursEditForm()
    data = form.data
    try:
        biz = Biz.query.get(id)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't edit hours!")
        try:
            hours = Hour.query.filter(Hour.biz_id == id).first()

            if (biz.owner_id == int(current_user.get_id())):
                for key, value in data.items():
                    if hasattr(hours, key) and value is not None:
                        setattr(hours, key, value)
                db.session.commit()
                hoursDict = {
                    'bizId': str(hours.biz_id),
                    'mondayOpen': str(hours.monday_open),
                    'mondayClose': str(hours.monday_close),
                    'tuesdayOpen': str(hours.tuesday_open),
                    'tuesdayClose': str(hours.tuesday_close),
                    'wednesdayOpen': str(hours.wednesday_open),
                    'wednesdayClose': str(hours.wednesday_close),
                    'thursdayOpen': str(hours.thursday_open),
                    'thursdayClose': str(hours.thursday_close),
                    'fridayOpen': str(hours.friday_open),
                    'fridayClose': str(hours.friday_close),
                    'saturdayOpen': str(hours.saturday_open),
                    'saturdayClose': str(hours.saturday_close),
                    'sundayOpen': str(hours.sunday_open),
                    'sundayClose': str(hours.sunday_close),
                }
                return hoursDict
            else:
                raise SQLAlchemyError(
                    'User not authorized to edit hours.')
        except SQLAlchemyError as e:
            return jsonify({'error': str(e)}), 401
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/', methods=["POST"])
@login_required
def new_bizes():
    """
    Create a new biz
    """
    form = BizForm()

    data = form.data
    if form.validate_on_submit():
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
            preview_image=data['preview_image'],

        )
        newCategory = Category.query.filter(Category.name==data['category']).first()
        new_biz.categories.append(newCategory)
        db.session.add(new_biz)
        db.session.commit()

        return new_biz.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@biz_routes.route('/<int:bizId>', methods=["PUT"])
@login_required
def edit_biz(bizId):
    """
    Edit current biz
    """
    form = BizEditForm()
    data = form.data

    try:
        biz = Biz.query.get(bizId)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't make edits!")
        try:
            if (biz.owner_id == int(current_user.get_id())):
                if form.validate_on_submit():
                    oldCategory = Category.query.filter(Category.name==data['oldCategory']).first()
                    if (oldCategory and oldCategory in biz.categories):
                        biz.categories.remove(oldCategory)
                    newCategory = Category.query.filter(Category.name==data['newCategory']).first()
                    if (newCategory and newCategory not in biz.categories):
                        biz.categories.append(newCategory)
                    for key, value in data.items():
                        if hasattr(biz, key) and value is not None:
                            setattr(biz, key, value)
                    db.session.commit()
                    return biz.to_dict()
                return {'errors': validation_errors_to_error_messages(form.errors)}, 401
            else:
                raise SQLAlchemyError(
                    'User not authorized to edit business.')
        except SQLAlchemyError as e:
            return jsonify({'error': str(e)}), 401
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:bizId>', methods=["DELETE"])
@login_required
def delete_biz(bizId):
    """
    Delete current biz
    """
    try:
        biz = Biz.query.get(bizId)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't delete!")
        try:
            if (biz.owner_id == int(current_user.get_id())):
                db.session.delete(biz)
                db.session.commit()
                return 'Successfully deleted business!'
            else:
                raise SQLAlchemyError(
                    'User not authorized to delete business.')
        except SQLAlchemyError as e:
            return jsonify({'error': str(e)}), 401
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:bizId>/reviews')
def reviews(bizId):
    """
    Query for all reviews of a business and returns them in a list of review dictionaries
    """
    try:
        biz = Biz.query.get(bizId)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't get reviews!")
        reviews = Review.query.filter(Review.biz_id == bizId).all()
        return {'reviews': [review.to_dict() for review in reviews]}
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:bizId>/reviews/<int:reviewId>')
def review(bizId, reviewId):
    """
    Query for a review by id and returns that review in a dictionary
    """
    try:
        biz = Biz.query.get(bizId)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't get review!")
        try:
            review = Review.query.filter(
                Review.biz_id == bizId, Review.id == reviewId).first()
            if review is None:
                raise SQLAlchemyError("Review not found!")
            return review.to_dict()
        except SQLAlchemyError as e:
            return jsonify({'error': str(e)}), 404
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:bizId>/reviews', methods=['POST'])
@login_required
def review_create(bizId):
    """
    Create a review for a business
    """
    form = ReviewForm()

    data = form.data

    try:
        biz = Biz.query.get(bizId)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't add a review!")
        if form.validate_on_submit():
            new_review = Review(
                user_id=current_user.get_id(),
                biz_id=bizId,
                stars=data['stars'],
                review=data['review']
            )

            db.session.add(new_review)
            db.session.commit()

            return new_review.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:bizId>/reviews/<int:reviewId>', methods=["PUT"])
@login_required
def edit_review(bizId, reviewId):
    """
    Edit review for a business
    """
    form = ReviewForm()

    data = form.data

    try:
        biz = Biz.query.get(bizId)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't get review!")
        try:
            review = Review.query.filter(
                Review.biz_id == bizId, Review.id == reviewId).first()
            if review is None:
                raise SQLAlchemyError("Review not found!")
            try:
                if (review.user_id == int(current_user.get_id())):
                    if form.validate_on_submit():
                        for key, value in data.items():
                            if hasattr(review, key) and value is not None:
                                setattr(review, key, value)
                        db.session.commit()
                        return review.to_dict()
                    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
                else:
                    raise SQLAlchemyError(
                        'User not authorized to edit review.')
            except SQLAlchemyError as e:
                return jsonify({'error': str(e)}), 401
        except SQLAlchemyError as e:
            return jsonify({'error': str(e)}), 404
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@biz_routes.route('/<int:bizId>/reviews/<int:reviewId>', methods=["DELETE"])
@login_required
def delete_review(bizId, reviewId):
    """
    Delete a review for a business
    """
    try:
        biz = Biz.query.get(bizId)
        if biz is None:
            raise SQLAlchemyError("Business not found so can't get review!")
        try:
            review = Review.query.filter(
                Review.biz_id == bizId, Review.id == reviewId).first()
            if review is None:
                raise SQLAlchemyError(
                    "Review not found so can't delete review!")
            try:
                if (review.user_id == int(current_user.get_id())):
                    db.session.delete(review)
                    db.session.commit()
                    return 'Successfully deleted review!'
                else:
                    raise SQLAlchemyError(
                        'User not authorized to delete review.')
            except SQLAlchemyError as e:
                return jsonify({'error': str(e)}), 401
        except SQLAlchemyError as e:
            return jsonify({'error': str(e)}), 404
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404
