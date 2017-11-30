var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// mongodb database connection 
mongodb://<dbuser>:<dbpassword>@ds063715.mlab.com:63715/cabbooking

var mongodbUrl = "mongodb://admin:admin123*@ds063715.mlab.com:63715/cabbooking"
//  var mongodbUrl = "mongodb://localhost:27017/cab_db"
mongoose.connect(mongodbUrl, {
  useMongoClient: true
});


var db = mongoose.createConnection(mongodbUrl, {
  useMongoClient: true
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('MongoDB connection established');
});



var index = require('./routes/index');
var users = require('./routes/users');


// mongoose-gen rest apis with model approch
var city = require('./city/cityRoutes');
var services = require('./services/servicesRoutes')
var city_services = require('./city_services/city_servicesRoutes')
var c_charges = require('./c_charges/c_chargesRoutes')
var destination = require('./destination/destinationRoutes');
var os_charges = require('./os_charges/os_chargesRoutes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// cab_booking_apis_end_points
app.use('/city', city);
app.use('/services', services);
app.use('/city_services', city_services);
app.use('/c_charges', c_charges);
app.use('/destination', destination);
app.use('/os_charges', os_charges);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
