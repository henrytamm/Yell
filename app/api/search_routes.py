from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Biz, Review, Category, business_categories, db, Hour
from datetime import date, datetime, time
from sqlalchemy.exc import SQLAlchemyError

search_routes = Blueprint('search', __name__)


@search_routes.route('/<int:categoryId>')
def bizes_by_category(categoryId):
    """
    Query for all bizes of the specified category by id
    """
    try:
        # biz = Biz.query.get(id)
        category = Category.query.filter(Category.id == categoryId).first()
        if category is None:
            raise SQLAlchemyError("Category not found!")
        bizes = category.biz
        newDict = {}

        for biz in bizes:
            newDict[biz.id] = {
                "category": category.name,
                "biz_id": biz.id,
                "owner_id": biz.owner_id,
                "address": biz.address,
                "city": biz.city,
                "state": biz.state,
                "country": biz.country,
                "lat": biz.lat,
                "lng": biz.lng,
                "name": biz.name,
                "description": biz.description,
                "preview_image": biz.preview_image,
            }

        return {'bizes_in_category': [biz for biz in newDict.values()]}
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 404


@search_routes.route('/open')
def bizes_by_hours():
    """
    Query for all bizes by hours
    """
    today = date.weekday(date.today())

    hours = None
    now = datetime.now().time()

    if today == 0:
        hours = Hour.query.filter(
            Hour.monday_close >= now, Hour.monday_open <= now).all()
    elif today == 1:
        hours = Hour.query.filter(
            Hour.tuesday_close >= now, Hour.tuesday_open <= now).all()
    elif today == 2:
        hours = Hour.query.filter(
            Hour.wednesday_close >= now, Hour.wednesday_open <= now).all()
    elif today == 3:
        hours = Hour.query.filter(
            Hour.thursday_close >= now, Hour.thursday_open <= now).all()
    elif today == 4:
        hours = Hour.query.filter(
            Hour.friday_close >= now, Hour.friday_open <= now).all()
    elif today == 5:
        hours = Hour.query.filter(
            Hour.saturday_close >= now, Hour.saturday_open <= now).all()
    elif today == 6:
        hours = Hour.query.filter(
            Hour.sunday_close >= now, Hour.sunday_open <= now).all()

    bizes = []
    for hour in hours:
        bizes.append(hour.biz)

    newDict = {}
    index = 1
    for biz in bizes:
        newDict[index] = {
            "owner_id": biz.owner_id,
            "address": biz.address,
            "city": biz.city,
            "state": biz.state,
            "country": biz.country,
            "lat": biz.lat,
            "lng": biz.lng,
            "name": biz.name,
            "description": biz.description,
            "preview_image": biz.preview_image,
        }
        index += 1
    if (newDict):
        return newDict
    return 'No businesses open at that time'
