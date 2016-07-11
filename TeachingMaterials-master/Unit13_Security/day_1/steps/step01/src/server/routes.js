var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var jwt = require('jsonwebtoken');

var secretKey = 'MyCoolSecretKey';

router.get('/people', authenticate, getPeople);
router.get('/person/:id', authenticate, getPerson);
router.get('/admin', authenticate, getAdmin);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}

function getAdmin(req, res, next) {
  res.status(200).send(data.admin);
}

function authenticate(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    // validate token
    try {
      var decoded = jwt.verify(bearerToken, secretKey);
    } catch(err) {
      res.sendStatus(403);
      return;
    }
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
