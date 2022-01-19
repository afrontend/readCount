var request = require('request');
request('https://afrontend.github.io/',
  function (error, response, body) {
    const cheerio = require('cheerio')
    const $ = cheerio.load(body);
    console.log($('#blog-stats-18 > ul > li').text());
  });

