var request = require('request');
request('https://agvim.wordpress.com/',
  function (error, response, body) {
    const cheerio = require('cheerio')
    const $ = cheerio.load(body);
    console.log($('#blog-stats-18 > ul > li').text());
  });

