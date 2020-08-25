var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyparser = require('body-parser');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var super_adminRouter= require('./routes/super_admin');
var restaurant_adminRouter= require('./routes/restaurant_admin');
var mongoose=require('mongoose');
const bodyParser = require('body-parser');
const connection=mongoose.connect('mongodb+srv://iqraazizkhan:lkjhgf@clusterfyp.xoiqz.mongodb.net/open_restaurant?retryWrites=true&w=majority');
var app= express();
connection.then((db)=> {
  console.log("connected");
}, (err)=> {
  console.log(err);

});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/super_admin',super_adminRouter);
app.use('/restaurant_admin',restaurant_adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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