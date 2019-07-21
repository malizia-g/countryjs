var express = require('express'); //Carica il modulo express
var router = express.Router(); //Otteine un oggetto router
var country = require('countryjs');


router.get('/info/US', function(req, res, next) {
  res.send(country.info('US'));
});

router.get('/info/IT', function(req, res, next) {
  res.send(country.info('IT'));
});

module.exports = router; //esporta il modulo per poterlo usare in app.js
