var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logController = require('./public/javascripts/controllers/log-controllers');
var fuelController = require('./public/javascripts/controllers/log-controllers.js');
var mpgController = require('./public/javascripts/controllers/mpg-controller.js');
var carController = require('./public/javascripts/controllers/car-controller.js');
mongoose.connect('mongodb://127.0.0.1:27017/logFuel/fuellogs');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/api/FuelLog',fuelController.create);
app.get('/api/FuelLog',fuelController.list);
app.post('/api/MpgLog',mpgController.create);
app.get('/api/MpgLog',mpgController.list);
app.post('/api/CarLog',carController.create);
app.get('/api/CarLog',carController.list);

app.use('/', index);
app.use('/users', users);
app.use('/js', express.static(__dirname + '/public/javascripts'));
// app.use('./public/javascripts',app);
// app.ues('./public/javascript/controllers',fuelController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
