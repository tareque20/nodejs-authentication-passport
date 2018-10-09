# nodejs express mongodb Passport
Login app example with MongoDB, Joi validation, Handlebar Template Engine, Passport

# Run Project:
```sh
$ npm init
$ npm install
```
```sh
$ sudo npm install -g nodemon
```
if Getting error : [nodemon] Internal watch failed: watch ENOSPC
```sh
sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p
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
$ use loginapp
$ db.createCollection('users')
$ db.books.insert({name : "User 1", email : "user1@gmail.com", username : "user1", password : "123"});
$ db.books.find().pretty()
```
More info: https://docs.mongodb.com/manual/crud/

# Run Mongo Database
```sh
$ sudo service mongod start
```

# API Routes:

```sh
get: /
post: /user/login
post: /user/register
get: /user/logout
```
### Use postman to test api
