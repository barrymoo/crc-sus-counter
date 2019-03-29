var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var db = null;

MongoClient.connect(process.env.MONGO_URI, function (err, client) {
  if (err) throw err;

  db = client.db('statistics');
});

/* GET k8s page */
router.get('/', function(req, res, next) {
  var p = db.collection('sus').find().toArray();
  p.then(function(items) {
    res.render('index', { title: 'CRC SUs Counter', begin: items[0]['begin'], end: items[0]['end'] });
  });
});

/* Get data page */
router.get('/get', function(req, res, next) {
  var p = db.collection('counter').find().toArray();
  p.then(function(items) {
    res.send(items);
  });
});


module.exports = router;
