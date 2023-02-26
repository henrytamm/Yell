from app.models import db, Review, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    soup_kitchen_review_1 = Review(
        biz_id = 1,
        user_id = 2,
        review = "review1 text for soupkitchen!!!",
        stars = 1,
    )
    soup_kitchen_review_2 = Review(
        biz_id = 1,
        user_id = 3,
        review = "review2 text for soupkitchen!!!",
        stars = 2,
    )
    phosizzle_review_1 = Review(
        biz_id = 2,
        user_id = 1,
        review = "review1 text for phosizzle!!!",
        stars = 3,
    )
    phosizzle_review_2 = Review(
        biz_id = 2,
        user_id = 3,
        review = "review2 text for phosizzle!!!",
        stars = 4,
    )
    vegan_for_the_win_review_1 = Review(
        biz_id = 3,
        user_id = 1,
        review = "review1 text for vegan for the win!!!",
        stars = 5,
    )
    vegan_for_the_win_review_2 = Review(
        biz_id = 3,
        user_id = 2,
        review = "review2 text for vegan for the win!!!",
        stars = 4,
    )
    curry_shop_review_1 = Review(
        biz_id = 3,
        user_id = 2,
        review = "review1 text for curry shop!!!",
        stars = 5,
    )
    curry_shop_review_2 = Review(
        biz_id = 3,
        user_id = 3,
        review = "review2 text for curry shop!!!",
        stars = 4,
    )


    db.session.add(soup_kitchen_review_1)
    db.session.add(soup_kitchen_review_2)
    db.session.add(phosizzle_review_1)
    db.session.add(phosizzle_review_2)
    db.session.add(vegan_for_the_win_review_1)
    db.session.add(vegan_for_the_win_review_2)
    db.session.add(curry_shop_review_1)
    db.session.add(curry_shop_review_2)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_seed_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
