var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var jwt = require('jsonwebtoken');

var secretKey = 'MyCoolSecretKey';

router.post('/authenticate', authenticate);
router.get('/people', isAuthenticated, getPeople);
router.get('/person/:id', isAuthenticated, getPerson);
router.get('/admin', isAuthenticated, getAdmin);
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

function isAuthenticated(req, res, next) {
  var bearerToken = req.headers["authorization"];
  if (typeof bearerToken !== 'undefined') {
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


function authenticate(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  console.log('processing authentication request ' + data.users);
  var user = data.users.find(function(user) {
    console.log('is this it?')
    return user.email === email && user.password === password;
  });
  if (user) {
    res.json({
      type: true,
      data: user.email,
      token: jwt.sign(user.email, secretKey/*, {expiresIn: '1h'}*/)
    });
  } else {
    res.sendStatus(403);
  }
}
