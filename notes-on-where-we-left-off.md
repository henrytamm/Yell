order by created_at for our reviews for recent activity

work on the rest of relationships / foreign keys

------------------------------------------------------------------------------------------------------------

pipenv install --python "$PYENV_ROOT/versions/3.9.4/bin/python"

pipenv install click gunicorn itsdangerous python-dotenv six Flask Flask-Cors Flask-SQLAlchemy Flask-WTF Jinja2 MarkupSafe SQLAlchemy Werkzeug WTForms Flask-Migrate Flask-Login alembic python-dateutil python-editor greenlet Mako pycodestyle pylint psycopg2-binary email_validator

pipenv shell

#delete migration folder and instance folder before running the below commands
pipenv run flask db init
pipenv run flask db migrate
pipenv run flask db upgrade
flask seed all

flask run

#for mac users make sure to change port to 5005 in react-app/package.json and when running flask run -p 5005






#review in bizPage.js needs to be put in a card, placeholder atm

#need to fix selector in bizPage because we hard coded the biz

#when you delete SoupKitchen, it also deletes both categories (vegan and soup) from the database



#changed the HTML for fontawesome to use a new account code so that we can pull fontawesome icons

#change homepage slice to 0, 8