var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var request = require('request');
  request('https://afrontend.github.io/',
    function (error, response, body) {
      var cheerio = require('cheerio');
      var $ = cheerio.load(body);
      var count = $('#blog-stats-18 > ul > li').text();
      res.render('index', { title: count});
    });
});

module.exports = router;
