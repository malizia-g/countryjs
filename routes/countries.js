var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var country = require('countryjs');


router.get('/info/:state/', function(req, res, next){
  res.send(country.info(req.params.state)); //Rendiamo lo stato un parametro
})
module.exports = router; //esporta il modulo per poterlo usare in app.js
