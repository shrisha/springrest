springrest
==========

# Spring REST Component for Challenge team
* Simple <a href="http://projects.spring.io/spring-boot/">Spring Boot</a> application with <a href="http://www.mongodb.org/">MongoDB</a>.

# Heroku Setup info

A one time config change was made to enable MongoDB and the Spring config activation:

```
heroku addons:add mongohq
heroku config:set JAVA_OPTS='-Xmx384m -Xss512k -XX:+UseCompressedOops -Dspring.profiles.active=heroku'
```

# Getting started
After cloning this repo:
```
git remote add heroku git@heroku.com:hbpchallenge.git
```
You can now deploy to heroku if you have permissions.  Make sure to download the heroku Toolbelt on your system.

# Deployment Stuff

The app will run on your localhost using the local mongodb instance, but when deployed to Heroku, the "heroku" profile kicks in (thanks to the config setting above) and it uses MongoHQ.  Locally, you can run it from an IDE (Intellij, Eclipse) as an application (Application.java), you don't have to deploy it to a web container.

To re-deploy fresh code, stop the proc, push and start it:

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

```
POST /challenge HTTP/1.1
Host: hbpchallenge.herokuapp.com
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: dd751e3b-c7bb-32ae-9bc6-5a770fd82bef

{ "description": "This is a challenge from Postman", "rating": 5 }
```

* PUT /  (update)

### Acceptances (http://hbpchallenge.herokuapp.com/acceptance)

* GET /  (list all)
* GET /{id} (find by id)
* POST /  (new)

```
POST /acceptance/ HTTP/1.1
Host: hbpchallenge.herokuapp.com
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: bd77d3b9-0ec6-1d75-7cc5-ff6a24e495a0

{ "challengeId": "52f6923c036480de4032a56e", "contentUrl": null, "contentType": null, "notes": "my notes", "location": null, "rating": 0 }
```

* PUT /  (update)


