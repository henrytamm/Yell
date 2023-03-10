from app.models import db, Hour, environment, SCHEMA
from datetime import datetime, date, time, timedelta


# Adds a demo user, you can add other users here if you want
def seed_business_hours():
    biz_1_hours = Hour(
        id=1,
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
    biz_2_hours = Hour(
        id=2,
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
    biz_3_hours = Hour(
        id=3,
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
    biz_4_hours = Hour(
        id=4,
        biz_id = 4,
        monday_open = time(10, 00),
        monday_close = time(18, 00),
        tuesday_open = time(10, 00),
        tuesday_close = time(18, 00),
        wednesday_open = time(10, 00),
        wednesday_close = time(22, 00),
        thursday_open = time(10, 00),
        thursday_close = time(18, 00),
        friday_open = time(10, 00),
        friday_close = time(18, 00),
        saturday_open = time(10, 00),
        saturday_close = time(18, 00),
        sunday_open = time(10, 00),
        sunday_close = time(18, 00),
    )
    biz_5_hours = Hour(
        id=5,
        biz_id = 5,
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
    biz_6_hours = Hour(
        id=6,
        biz_id = 6,
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
    biz_7_hours = Hour(
        id=7,
        biz_id = 7,
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
    biz_8_hours = Hour(
        id=8,
        biz_id = 8,
        monday_open = time(10, 00),
        monday_close = time(18, 00),
        tuesday_open = time(10, 00),
        tuesday_close = time(18, 00),
        wednesday_open = time(10, 00),
        wednesday_close = time(22, 00),
        thursday_open = time(10, 00),
        thursday_close = time(18, 00),
        friday_open = time(10, 00),
        friday_close = time(18, 00),
        saturday_open = time(10, 00),
        saturday_close = time(18, 00),
        sunday_open = time(10, 00),
        sunday_close = time(18, 00),
    )


    db.session.add(biz_1_hours)
    db.session.add(biz_2_hours)
    db.session.add(biz_3_hours)
    db.session.add(biz_4_hours)
    db.session.add(biz_5_hours)
    db.session.add(biz_6_hours)
    db.session.add(biz_7_hours)
    db.session.add(biz_8_hours)
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
