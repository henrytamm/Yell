Needed features:
Business Page
Search / filters
Reviews / ratings
Map

Users:
get current user ('/user')
get user by id ('/user/<int:id>')
edit user ('/user/<int:id>')
logout user ('/user/<int:id>')
login user ('/session')
signup user ('/session)


Business:
get all businesses ('/biz')
create a business ('/biz')
edit a business ('/biz/<int:bizId>')
delete a business ('/biz/<int:bizId>')


Search/Filters:
business by category ('/biz')
business owned by user ('/user/<int:id>/biz)
businesses open or close ('/biz)


Reviews:
get all reviews of business ('/biz/<int:bizId>/reviews')
create a review ('/biz/<int:bizId>)
edit a review ('/biz/<int:bizId>/<int:reviewId>)
delete a review ('/biz/<int:bizId>/<int:reviewId>)


Map:
located on the biz page on yelp so most likely going to be ('/biz/<int:bizId>')



