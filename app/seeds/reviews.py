from app.models import db, Review, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review_1 = Review(
        id = 1,
        biz_id = 1,
        user_id = 2,
        review = "I thought it was just a girl. Then I saw the goat. OMG!",
        stars = 5,
    )
    review_2 = Review(
        id = 2,
        biz_id = 2,
        user_id = 3,
        review = "I found a bug in my food.",
        stars = 1,
    )
    review_3 = Review(
        id = 3,
        biz_id = 3,
        user_id = 1,
        review = "So great to find high protein vegan food!!",
        stars = 5,
    )
    review_4 = Review(
        id = 4,
        biz_id = 4,
        user_id = 3,
        review = "I think the fish was raw",
        stars = 1,
    )
    review_5 = Review(
        id = 5,
        biz_id = 5,
        user_id = 1,
        review = "Skimped on guac",
        stars = 3,
    )
    review_6 = Review(
        id = 6,
        biz_id = 6,
        user_id = 2,
        review = "10/10. Best place ever!",
        stars = 5,
    )
    review_7 = Review(
        id = 7,
        biz_id = 7,
        user_id = 1,
        review = "Don't know how to pronounce the name but the food is great!",
        stars = 4,
    )
    review_8 = Review(
        id = 8,
        biz_id = 8,
        user_id = 3,
        review = "I SCREAM FOR ICE CREAM!!!",
        stars = 5,
    )


    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.add(review_5)
    db.session.add(review_6)
    db.session.add(review_7)
    db.session.add(review_8)
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
