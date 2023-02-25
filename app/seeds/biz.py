from app.models import db, Biz, Category, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_biz():
    soup_kitchen = Biz(
        owner_id=1,
        category_id=1,
        address='1234 First Street',
        city='Oakland',
        state='California',
        country='United States',
        lat=31231,
        lng=123123,
        name='Soup Kitchen',
        description='The best soups',
        preview_image='goodsoup.com/images/1',
    )
    phosizzle = Biz(
        owner_id=2,
        category_id=2,
        address='5678 Second Street',
        city='Berkeley',
        state='California',
        country='United States',
        lat=31231,
        lng=123123,
        name='Phosizzle',
        description='The best hangover food around',
        preview_image='picturesofpho.com/images/1',
    )
    vegan_for_the_win = Biz(
        owner_id=3,
        category_id=3,
        address='910 Third Street',
        city='San Francisco',
        state='California',
        country='United States',
        lat=31231,
        lng=123123,
        name='Vegan For The Win',
        description='Save the animals',
        preview_image='veganfood.com/images/1',
    )

#Category seeders
    vegan = Category(
        id=1,
        name="vegan",
    )
    mexican = Category(
        id=2,
        name="mexican",
    )
    asian = Category(
        id=3,
        name="asian",
    )
    soup = Category(
        id=4,
        name="soup",
    )
    db.session.add(soup_kitchen)
    db.session.add(phosizzle)
    db.session.add(vegan_for_the_win)
    db.session.add(vegan)
    db.session.add(mexican)
    db.session.add(asian)
    db.session.add(soup)
    soup_kitchen.categories.append(soup)
    soup_kitchen.categories.append(vegan)
    phosizzle.categories.append(soup)
    phosizzle.categories.append(asian)
    vegan_for_the_win.categories.append(vegan)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_biz():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.bizes RESTART IDENTITY CASCADE;")
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM bizes")
        db.session.execute("DELETE FROM categories")

    db.session.commit()
