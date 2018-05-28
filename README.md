# nodejs express mongodb
RestFull api example with MongoDB, Joi validation, Handlebar Template Engine

# Run Project:
```sh
$ npm init
$ npm install
```
```sh
$ sudo npm install -g nodemon
```
```sh
$ nodemon
```

# Install MongoDB
[Install Mongo in Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)


# MogoDB CMD
```sh
$ sudo service mongod start
$ sudo service mongod stop
$ sudo service mongod restart
$ mongo --host 127.0.0.1:27017
```

# Uninstall MongoDB
Remove Packages
```sh
$ sudo apt-get purge mongodb-org*
```
Remove Data Directory
```sh
$ sudo rm -r /var/log/mongodb
$ sudo rm -r /var/lib/mongodb

```
Log: /var/log/mongodb/mongod.log

# Create Mongo Database
```sh
$ sudo service mongod start
$ mongo --host 127.0.0.1:27017
```
```sh
$ show dbs
$ use nodeapp
$ db.createCollection('books')
$ db.createCollection('genres')
$ db.genres.insert({name: 'Test name 1'})
$ db.genres.find().pretty()
$ db.books.insert({title : "Test title 1", genres : "Suspense", description : "This is for test description 1", author : "auther 1"});
$ db.books.find().pretty()
```
More info: https://docs.mongodb.com/manual/crud/

# Run Mongo Database
```sh
$ sudo service mongod start
```

# API Routes:
Books:
```sh
get: /api/books
get: /api/books/1
post: /api/books
put: /api/books/1
delete: /api/books/1
```

genres:

```sh
get: /api/genres
get: /api/genres/1
post: /api/genres
put: /api/genres/1
delete: /api/genres/1
```
### Use postman to test api
