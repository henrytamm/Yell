from flask.cli import AppGroup
from .users import seed_users, undo_users
from .biz import seed_biz, undo_biz
from .business_images import seed_business_images, undo_seed_business_images
from .hours import seed_business_hours, undo_seed_business_hours
from .reviews import seed_reviews, undo_seed_reviews
from .review_images import seed_review_images, undo_seed_review_images

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_biz()
        undo_seed_business_images()
        undo_seed_business_hours()
        undo_seed_reviews()
        undo_seed_review_images()
    seed_users()
    # Add other seed functions here
    seed_biz()
    seed_business_images()
    seed_business_hours()
    seed_reviews()
    seed_review_images()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_biz()
    undo_seed_business_images()
    undo_seed_business_hours()
    undo_seed_reviews()
    undo_seed_review_images()
