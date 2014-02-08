springrest
==========

# Spring REST Component for Challenge team
* Simple <a href="http://projects.spring.io/spring-boot/">Spring Boot</a> application with <a href="http://www.mongodb.org/">MongoDB</a>.

# Getting started
After cloning this repo:
```
git remote add heroku git@heroku.com:hbpchallenge.git
```
You can now deploy to heroku if you have permissions.  Make sure to download the heroku Toolbelt on your system.

# Deployment Stuff
```
heroku ps:scale web=0
git push heroku master
heroku ps:scale web=1
```
#Usage

## Web

* http://hbpchallenge.herokuapp.com/
 
## API

### Challenges (http://hbpchallenge.herokuapp.com/challenge)

* GET /  (list all)
* GET /{id} (find by id)
* POST /  (new)
* PUT /  (update)

### Acceptances (http://hbpchallenge.herokuapp.com/acceptance)

* GET /  (list all)
* GET /{id} (find by id)
* POST /  (new)
* PUT /  (update)

