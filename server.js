// Babel ES6/JSX Compiler
require('babel-register');

var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Ship = require('./models/ship');
var config = require('./config');

mongoose.connect(config.database);
mongoose.connection.on('error', function () {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/**
 * POST /api/ships
 * Adds new ship to the database.
 */
app.post('/api/ships', function (req, res, next) {

    var info = req.body;
console.log(info);
    var ship = new Ship({
        name: info.name,
        faction: info.faction,
        command: info.command,
        squadron: info.squadron,
        engineering: info.engineering,
        frontShield: info.frontShield,
        rightShield: info.rightShield,
        rearShield: info.rearShield,
        leftShield: info.leftShield,
        movement: info.movement,
        redirect: info.redirect,
        evade: info.evade,
        brace: info.brace,
        Scatter: info.scatter,
        contain: info.contain,
        frontAttackDice: info.frontAttackDice,
        rightAttackDice: info.rightAttackDice,
        rearAttackDice: info.rearAttackDice,
        leftAttackDice: info.leftAttackDice,
        antiSquadronDice: info.antiSquadron,
        hullPoints: info.hullPoints,
        baseCost: info.cost
    });

    ship.save(function (err) {
        res.send({ message: ship.name + ' has been added successfully!' });
    });                  
});



app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    console.log(err);
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

