from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        id=1,
        username='Demo',
        email='demo@aa.io',
        password='password',
        first_name="Billy",
        last_name="Jean",
        zip_code=94606,
        user_picture_url='https://m.media-amazon.com/images/M/MV5BMTg4Nzg1MTYxMl5BMl5BanBnXkFtZTgwMjUxNDMyODE@._V1_.jpg'
    )
    marnie = User(
        id=2,
        username='marnie',
        email='marnie@aa.io',
        password='password',
        first_name="Mike",
        last_name="Tyson",
        zip_code=94505,
        user_picture_url='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg/1200px-Mike_Tyson_2019_by_Glenn_Francis.jpg'
    )
    bobbie = User(
        id=3,
        username='bobbie',
        email='bobbie@aa.io',
        password='password',
        first_name="Jake",
        last_name="Paul",
        zip_code=94510,
        user_picture_url='https://images.daznservices.com/di/library/DAZN_News/28/44/jake-paulnov2022_19ds7ztrgfx6o1subt8igwogil.jpg?t=1996720182&quality=60&h=450'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
