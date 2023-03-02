from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Biz, Review, Category, business_categories, db, Hour
from datetime import date, datetime, time

search_routes = Blueprint('categories', __name__)


@search_routes.route('/<int:categoryId>')
def bizes_by_category(categoryId):
    """
    Query for all bizes of the specified category by id
    """
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

@search_routes.route('/open')
def bizes_by_hours():
    """
    Query for all bizes by hours
    """
    today = date.weekday(date.today())
    if today == 0:
        day = "monday"
    elif today == 1:
        day = "tuesday"
    elif today == 2:
        day = "wednesday"
    elif today == 3:
        day = "thursday"
    elif today == 4:
        day = "friday"
    elif today == 5:
        day = "saturday"
    elif today == 6:
        day = "sunday"
    # print(today)
    now = datetime.now().time()
    print(now)
    print(type(now))
    # current_time = now.strftime("%H:%M:%S")
    # print(current_time)
    print(type(time(10, 00)))
    # print(type(time(int(current_time))))
    # print(type(time(10,00)))
    hours = Hour.query.filter(Hour.wednesday_open <= now and now <= Hour.wednesday_close)
    # users = db.session.query(User).filter(User.birthday.between(start_range, end_range)).all()
    # print(Hour.wednesday_open)
    # hours = db.session.query(Hour).filter(now.between(Hour.wednesday_open, Hour.wednesday_close)).all()
    print(hours)
    return "d"
 