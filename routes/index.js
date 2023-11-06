var express = require('express');
var router = express.Router();
var books = require('../resources/books');
//var Book = require('../models/book');

/* GET home page. */
router.get('/',  function (req, res, next) {
  //const books = await Book.find()
  res.render('index', { title: 'Book App', bookList: books });
});

module.exports = router;
