from app.models import db, BusinessImage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_business_images():
    soup_kitchen_image_1 = BusinessImage(
        id=1,
        biz_id = 1,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUbqm7PzL4jsPfa26nUSyoQsWnjNG6vYdhZKwcAMasV04R5wZVtCumQ5werObGSivppo&usqp=CAU',
    )
    soup_kitchen_image_2 = BusinessImage(
        id=2,
        biz_id = 1,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDanrLadg08kMKRU8ikI2pNxyzz88mTKE1A&usqp=CAU',
    )
    phosizzle_image_1 = BusinessImage(
        id=3,
        biz_id = 2,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIEdKIvIjE83z2dc_zVzKjiptekO4cae5Fw&usqp=CAU',
    )
    phosizzle_image_2 = BusinessImage(
        id=4,
        biz_id = 2,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTViA0vciZJHZ4TIq8aOs_hWLqn1yInHoSg&usqp=CAU',
    )
    vegan_for_the_win_image_1 = BusinessImage(
        id=5,
        biz_id = 3,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJDqjfFx2eWbB5Ut_OXkqs22ifdfg-aSYMA&usqp=CAU',
    )
    vegan_for_the_win_image_2 = BusinessImage(
        id=6,
        biz_id = 3,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uZUp9sLP19EjIrp8iplYiFmbRPouS0mq0g&usqp=CAU',
    )


    db.session.add(soup_kitchen_image_1)
    db.session.add(soup_kitchen_image_2)
    db.session.add(phosizzle_image_1)
    db.session.add(phosizzle_image_2)
    db.session.add(vegan_for_the_win_image_1)
    db.session.add(vegan_for_the_win_image_2)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_seed_business_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.business_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM business_images")

    db.session.commit()
