var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET classes page. */
router.get('/classes', function(req, res, next) {
  res.render('classes', { title: 'Classes' });
});

/* GET gallery page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Gallery' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


module.exports = router;
