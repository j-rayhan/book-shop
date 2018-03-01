var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// APIs
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/bookshop');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'#Mongodb connection Error'));

// ----->> SET UP SESSION <-------
app.use(session({
	secret: 'mySecretString',
	saveUninitialized: false,
	resave:true,
	cookie: {maxAge: 1000 * 60 * 60 * 24 *2 },
	store: new MongoStore({mongooseConnection: db, ttl: 2* 24 * 60 *60})
}))
// SAVE SESSION CART API
app.post('/cart', function(req,res){
	var cart = req.body;
	req.session.cart = cart;
	req.session.save(function(err){
		if (err) {
			throw err
		}
		res.json(req.session.cart);
	})
});
// GET SESSION CART API
app.get('/cart', function(req,res){
	if (typeof req.session.cart !== 'undefined') {
		res.json(req.session.cart);
	}
});
//
// ----->> END SESSION <-------

var Books = require('./models/books.js');

	//---------->POST BOOKS <<<---
	app.post('/books', function(req, res){
		var book = req.body;

		Books.create(book, function(err, books){
			if (err) {
				throw err;
			}
			res.json(books);
		})
	});

	//---------->GET BOOKS <<<---
	app.get('/books', function(req, res){
		Books.find(function(err, books){
			if (err) {
				throw err;
			}
			res.json(books);
		})
	});

	//---------->UPDATE BOOKS <<<---
	app.put('/books/:_id', function(req, res){
		// console.log("Hello...");
		var book = req.body;
		var query = req.params._id;
	// IF THE FIELD DOESN'T EXIST $SET WILL SET A NEW FIELD
		var update ={
			'$set':{
				title: book.title,
				description: book.description,
				image: book.image,
				price: book.price
			}
		};
		// console.log(update);
		// WHEN TRUE RETURNS THE UPDATED DOCUMENT
		var options = {new : true};
		Books.findOneAndUpdate(query, update, options, function(err, books){
			if (err) {
				throw err;
			}
			res.json(books);
		})
	});

	//---------->DELETE BOOKS <<<---
	app.delete('/books/:_id', function(req, res){
		var query = {_id: req.params._id};

		Books.remove(query, function(err, books){
			if (err) {
				throw console.log("#API DELETE BOOK ", err);
			}
			res.json(books);
		})
	});

app.get('/images', function(req, res){
	const imgFolder = __dirname + '/public/images';
	//REQUIRE FILE SYSTEM
	const fs = require('fs');
	// READ ALL FILES IN THE DERECTORY
	fs.readdir(imgFolder, function(err, files){
		if (err) {
			return console.error(err);
		}
		const filesArr = [];
		// ITERATE ALL IMAGES IN THE DIRECTORY AND ADD TO THE ARRAY
		files.forEach(function(file){
			filesArr.push({name: file})
		});
		// SEND THE JSON RESPONSE WITH THE ARRAY
		res.json(filesArr);
	})
})
// END APIs

app.listen(3001, function(err){
	if (err) {
		return console.log(err);
	}
  console.log('API server Start on port : 3001');
})
