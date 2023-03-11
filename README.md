# `<Yell>`
Yell is our attempt at creating a Yelp Clone which allows users to create a business page containing information about their business as well as the ability to review other's businesses.

### Screenshots
![Login]


[Sign up]: <img width="1226" alt="Screen Shot 2023-03-11 at 3 37 52 PM" src="https://user-images.githubusercontent.com/102117347/224516384-305f8546-421a-4959-a2bc-5b72a9ea76cb.png">

[Homepage]: <img width="1435" alt="Screen Shot 2023-03-11 at 3 38 23 PM" src="https://user-images.githubusercontent.com/102117347/224516406-842a33a4-1215-4ec7-8efd-59a3ef796bec.png">

[Business Page + Google Map API]: <img width="1170" alt="Screen Shot 2023-03-11 at 3 39 21 PM" src="https://user-images.githubusercontent.com/102117347/224516444-7dbca847-3cb3-44b8-ac1e-d3ec3c081ad3.png">


[Login]: Login.png



### Features
* Businesses
  * Create new business
  * Edit existing business
  * Delete existing business
  * Show details of a specific business

* Hours
  * Create new open and closing hours for a business
  * Edit existing business hours
  * Show hours of a specific business

* Categories
  * Link a business to a category
  * Unlink a business to a category
  * Show only businesses belonging to a specific category

* Google Map
  * Show a map with a pin of current business based on latitude and longitude

* Search
  * Search for all currently open businesses
  * Search for businesses by category

### Technologies Used
* Python
* Flask
* SQLAlchemy
* Sqlite3
* React
* Redux
* Html5
* Css
* Git
* Javascript


### Setting up the application
* Click the green dropdown menu called "<> Code" and copy the url "https://github.com/henrytamm/Yell.git"
* Open up a terminal and navigate to the folder you would like the files to be in
* Type git clone then hit space and paste the url "git clone https://github.com/henrytamm/Yell.git" into your terminal and press enter
* Make a .env file in the root folder '/yell/.env' and copy paste the following code or copy the .env.example file:
    ```json
        SECRET_KEY=lkasjdf09ajsdkfljalsiorj12n3490re9485309irefvn,u90818734902139489230
        DATABASE_URL=sqlite:///dev.db
        SCHEMA=flask_schema
    ```
* Navigate to frontend folder called '/yell/react-app' through your terminal and type "npm install" then press enter
* Navigate to root folder called '/yell' through your terminal and type "python --version" then press enter to check your current version of python
* Run the following command replacing 3.9.4 with your version number of python: pipenv install --python "$PYENV_ROOT/versions/3.9.4/bin/python"
* Then run this command: pipenv install click gunicorn itsdangerous python-dotenv six Flask Flask-Cors Flask-SQLAlchemy Flask-WTF Jinja2 MarkupSafe SQLAlchemy Werkzeug WTForms Flask-Migrate Flask-Login alembic python-dateutil python-editor greenlet Mako pycodestyle pylint psycopg2-binary email_validator
* Navigate to root folder through your terminal and type "pipenv shell" then press enter, then "flask run" and your backend should now be started
* Open a separate terminal and navigate to your frontend folder then type "npm start" to start your frontend
