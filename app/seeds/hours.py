from app.models import db, Hour, environment, SCHEMA
from datetime import datetime, date, time, timedelta


# Adds a demo user, you can add other users here if you want
def seed_business_hours():
    soup_kitchen = Hour(
        biz_id = 1,
        monday_open = time(10, 00),
        monday_close = time(18, 00),
        tuesday_open = time(10, 00),
        tuesday_close = time(18, 00),
        wednesday_open = time(10, 00),
        wednesday_close = time(18, 00),
        thursday_open = time(10, 00),
        thursday_close = time(18, 00),
        friday_open = time(10, 00),
        friday_close = time(18, 00),
        saturday_open = time(10, 00),
        saturday_close = time(18, 00),
        sunday_open = time(10, 00),
        sunday_close = time(18, 00),
    )
    phosizzle = Hour(
        biz_id = 2,
        monday_open = time(10, 00),
        monday_close = time(18, 00),
        tuesday_open = time(10, 00),
        tuesday_close = time(18, 00),
        wednesday_open = time(10, 00),
        wednesday_close = time(18, 00),
        thursday_open = time(10, 00),
        thursday_close = time(18, 00),
        friday_open = time(10, 00),
        friday_close = time(18, 00),
        saturday_open = time(10, 00),
        saturday_close = time(18, 00),
        sunday_open = time(10, 00),
        sunday_close = time(18, 00),
    )
    vegan_for_the_win = Hour(
        biz_id = 3,
        monday_open = time(10, 00),
        monday_close = time(18, 00),
        tuesday_open = time(10, 00),
        tuesday_close = time(18, 00),
        wednesday_open = time(10, 00),
        wednesday_close = time(18, 00),
        thursday_open = time(10, 00),
        thursday_close = time(18, 00),
        friday_open = time(10, 00),
        friday_close = time(18, 00),
        saturday_open = time(10, 00),
        saturday_close = time(18, 00),
        sunday_open = time(10, 00),
        sunday_close = time(18, 00),
    )
    curry_shop = Hour(
        biz_id = 4,
        monday_open = time(10, 00),
        monday_close = time(18, 00),
        tuesday_open = time(10, 00),
        tuesday_close = time(18, 00),
        wednesday_open = time(10, 00),
        wednesday_close = time(18, 00),
        thursday_open = time(10, 00),
        thursday_close = time(18, 00),
        friday_open = time(10, 00),
        friday_close = time(18, 00),
        saturday_open = time(10, 00),
        saturday_close = time(18, 00),
        sunday_open = time(10, 00),
        sunday_close = time(18, 00),
    )


    db.session.add(soup_kitchen)
    db.session.add(phosizzle)
    db.session.add(vegan_for_the_win)
    db.session.add(curry_shop)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_seed_business_hours():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.hours RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM hours")

    db.session.commit()
