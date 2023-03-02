Needed features:
Business Page
Search / filters
Reviews / ratings
Map

<!-- Users:
get current user ('/user')
get user by id ('/user/<int:id>')
edit user ('/user/<int:id>')
logout user ('/user/<int:id>')
login user ('/session')
signup user ('/session) -->


<!-- Business:
get all businesses ('/biz')
create a business ('/biz')
edit a business ('/biz/<int:bizId>')
delete a business ('/biz/<int:bizId>') -->


Search/Filters:
business by category ('/biz/categories/<int:categoryId>')
business owned by user ('/user/<int:id>/biz')
businesses open ('/biz/open')


<!-- Reviews:
get all reviews ('/reviews')
get all reviews of business ('/biz/<int:bizId>/reviews')
create a review ('/biz/<int:bizId>/reviews)
edit a review ('/biz/<int:bizId>/reviews/<int:reviewId>)
delete a review ('/biz/<int:bizId>/reviews/<int:reviewId>) -->


Map:
get map ('/map/<int:bizId>')
creating a pin on map



