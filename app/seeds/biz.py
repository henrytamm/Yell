from app.models import db, Biz, Category, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_biz():
    girl_and_the_goat = Biz(
        id=1,
        owner_id=1,
        address='555-3 Mateo St Ste 300',
        city='Lost Angeles',
        state='California',
        country='United States',
        lat=34.0402372642409,
        lng=-118.23315289372836,
        name='Girl & The Goat',
        description='Innovative New American dishes with global flavors served in a trendy restaurant with high ceilings.',
        preview_image='https://lh3.googleusercontent.com/p/AF1QipPNuCwaHVHqER_uLmReh1U8ouZXM4i76y4lVdmU=s680-w680-h510',
    )
    panda_express = Biz(
        id=2,
        owner_id=2,
        address='1480 Fillmore St',
        city='San Francisco',
        state='California',
        country='United States',
        lat=37.7831880343032,
        lng=-122.43242058382866,
        name='Panda Express',
        description='The fast food of Chinese food. It is great that no matter which restaurant you go to',
        preview_image='https://imgs.search.brave.com/VU8eLkxNcZyvJUz9FF6G8B3r7wjGQF62g_OhTdxbdIw/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9oaXAy/c2F2ZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDMv/UGFuZGEtRXhwcmVz/cy1NZWFscy5qcGc',
    )
    the_butcher_son = Biz(
        id=3,
        owner_id=3,
        address='1954 University Ave',
        city='Berkeley',
        state='California',
        country='United States',
        lat=37.87157764896451,
        lng=-122.27162666109074,
        name='The Butcher Son Vegan Delicatessen',
        description='Charming, industrial-chic bakery & vegan deli for pastries, coffee & creative vegetable-based mains.',
        preview_image='https://s3-media0.fl.yelpcdn.com/bphoto/oCKqDs0vq6e3jjbJbR1t6A/o.jpg',
    )
    sushi_house = Biz(
        id=4,
        owner_id=3,
        address='2375 Shore Line Dr',
        city='Alameda',
        state='California',
        country='United States',
        lat=37.754786920972265,
        lng=-122.25051431057418,
        name='Sushi House',
        description='Japanese eatery offering creative sushi rolls, udon, tempura & mains in a busy, comfortable space.',
        preview_image='https://s3-media0.fl.yelpcdn.com/bphoto/qooKsSJfsLrAMndzlaILeg/o.jpg',
    )
    chipotle = Biz(
        id=5,
        owner_id=3,
        address='1050 Gilman St',
        city='Berkeley',
        state='California',
        country='United States',
        lat=37.879397109780754,
        lng=-122.29636376378403,
        name='Chipotle',
        description='Chipotle is an American chain of fast casual restaurants specializing in bowls, tacos and Mission burritos made to order in front of the customer.',
        preview_image='https://tb-static.uber.com/prod/image-proc/processed_images/8ea6182d78b6a4b6cf52bd181606ae72/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg',
    )
    bagel = Biz(
        id=6,
        owner_id=3,
        address='3170 College Ave',
        city='Berkeley',
        state='California',
        country='United States',
        lat=37.851488475110415,
        lng=122.25269217970987,
        name='Boichik Bagel',
        description='Patrons line up for vegan, kosher, New York-style bagels with organic elements at this buzzy shop.',
        preview_image='https://cdn.shopify.com/s/files/1/0367/7621/4668/files/Social-Boichik_1024x1024.png?v=1613762178',
    )
    thai = Biz(
        id=7,
        owner_id=2,
        address='14704 Ventura Blvd',
        city='Sherman Oaks',
        state='California',
        country='United States',
        lat=34.15152905285713,
        lng=-118.4533786851251,
        name='Anajak Thai',
        description='Pleasant, longtime Thai place offering a varied menu, plus beer, wine & happy-hour deals.',
        preview_image='https://lh3.googleusercontent.com/p/AF1QipOwBD47vEMpStAqQzI5Vn9wk-eFulGuz6tn7D8=s1360-w1360-h1020',
    )
    ice_cream = Biz(
        id=8,
        owner_id=1,
        address='1669 E Monte Vista Ave',
        city='Vacaville',
        state='California',
        country='United States',
        lat=38.37041398385567,
        lng=-121.96137703450425,
        name='Fentons Creamery',
        description='Fentons Creamery is known for its handmade ice cream. ',
        preview_image='https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg',
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
    american = Category(
        id=5,
        name="american"
    )
    bakery = Category(
        id=6,
        name="bakery"
    )
    coffee = Category(
        id=7,
        name="coffee"
    )
    dessert = Category(
        id=8,
        name="dessert"
    )

    girl_and_the_goat.categories.append(american)
    panda_express.categories.append(asian)
    the_butcher_son.categories.append(vegan)
    sushi_house.categories.append(asian)
    chipotle.categories.append(mexican)
    chipotle.categories.append(vegan)
    bagel.categories.append(bakery)
    thai.categories.append(asian)
    ice_cream.categories.append(dessert)

    db.session.add(girl_and_the_goat)
    db.session.add(panda_express)
    db.session.add(the_butcher_son)
    db.session.add(sushi_house)
    db.session.add(chipotle)
    db.session.add(bagel)
    db.session.add(thai)
    db.session.add(ice_cream)

    db.session.add(vegan)
    db.session.add(mexican)
    db.session.add(asian)
    db.session.add(american)
    db.session.add(bakery)
    db.session.add(soup)
    db.session.add(coffee)
    db.session.add(dessert)
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
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.business_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM bizes")
        db.session.execute("DELETE FROM categories")
        db.session.execute("DELETE FROM business_categories")

    db.session.commit()
