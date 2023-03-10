from app.models import db, ReviewImage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_review_images():
    soup_kitchen_review1_image_1 = ReviewImage(
        id=1,
        review_id = 1,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUbqm7PzL4jsPfa26nUSyoQsWnjNG6vYdhZKwcAMasV04R5wZVtCumQ5werObGSivppo&usqp=CAU',
    )
    soup_kitchen_review1_image_2 = ReviewImage(
        id=2,
        review_id = 1,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDanrLadg08kMKRU8ikI2pNxyzz88mTKE1A&usqp=CAU',
    )
    soup_kitchen_review2_image_1 = ReviewImage(
        id=3,
        review_id = 2,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUbqm7PzL4jsPfa26nUSyoQsWnjNG6vYdhZKwcAMasV04R5wZVtCumQ5werObGSivppo&usqp=CAU',
    )
    soup_kitchen_review2_image_2 = ReviewImage(
        id=4,
        review_id = 2,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDanrLadg08kMKRU8ikI2pNxyzz88mTKE1A&usqp=CAU',
    )
    phosizzle_review1_image_1 = ReviewImage(
        id=5,
        review_id = 3,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIEdKIvIjE83z2dc_zVzKjiptekO4cae5Fw&usqp=CAU',
    )
    phosizzle_review1_image_2 = ReviewImage(
        id=6,
        review_id = 3,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTViA0vciZJHZ4TIq8aOs_hWLqn1yInHoSg&usqp=CAU',
    )
    phosizzle_review2_image_1 = ReviewImage(
        id=7,
        review_id = 4,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIEdKIvIjE83z2dc_zVzKjiptekO4cae5Fw&usqp=CAU',
    )
    phosizzle_review2_image_2 = ReviewImage(
        id=8,
        review_id = 4,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTViA0vciZJHZ4TIq8aOs_hWLqn1yInHoSg&usqp=CAU',
    )
    vegan_for_the_win_review1_image_1 = ReviewImage(
        id=9,
        review_id = 5,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJDqjfFx2eWbB5Ut_OXkqs22ifdfg-aSYMA&usqp=CAU',
    )
    vegan_for_the_win_review1_image_2 = ReviewImage(
        id=10,
        review_id = 5,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uZUp9sLP19EjIrp8iplYiFmbRPouS0mq0g&usqp=CAU',
    )
    vegan_for_the_win_review2_image_1 = ReviewImage(
        id=11,
        review_id = 6,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJDqjfFx2eWbB5Ut_OXkqs22ifdfg-aSYMA&usqp=CAU',
    )
    vegan_for_the_win_review2_image_2 = ReviewImage(
        id=12,
        review_id = 6,
        url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uZUp9sLP19EjIrp8iplYiFmbRPouS0mq0g&usqp=CAU',
    )
    curry_shop_review1_image_1 = ReviewImage(
        id=13,
        review_id = 7,
        url = 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=0.665xw:0.998xh;0.139xw,0.00240xh&resize=1200:*',
    )
    curry_shop_review1_image_2 = ReviewImage(
        id=14,
        review_id = 7,
        url = 'https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005.jpg',
    )
    curry_shop_review2_image_1 = ReviewImage(
        id=15,
        review_id = 8,
        url = 'https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg',
    )
    curry_shop_review2_image_2 = ReviewImage(
        id=16,
        review_id = 8,
        url = 'hhttps://www.inspiredtaste.net/wp-content/uploads/2021/03/Chicken-Curry-Recipe-2-1200.jpg',
    )

    db.session.add(soup_kitchen_review1_image_1)
    db.session.add(soup_kitchen_review1_image_2)
    db.session.add(soup_kitchen_review2_image_1)
    db.session.add(soup_kitchen_review2_image_2)
    db.session.add(phosizzle_review1_image_1)
    db.session.add(phosizzle_review1_image_2)
    db.session.add(phosizzle_review2_image_1)
    db.session.add(phosizzle_review2_image_2)
    db.session.add(vegan_for_the_win_review1_image_1)
    db.session.add(vegan_for_the_win_review1_image_2)
    db.session.add(vegan_for_the_win_review2_image_1)
    db.session.add(vegan_for_the_win_review2_image_2)
    db.session.add(curry_shop_review1_image_1)
    db.session.add(curry_shop_review1_image_2)
    db.session.add(curry_shop_review2_image_1)
    db.session.add(curry_shop_review2_image_2)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_seed_review_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.review_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM review_images")

    db.session.commit()
