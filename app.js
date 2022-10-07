var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const favicon = require('express-favicon');
require('dotenv').config(); 

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addRouter = require('./routes/add');
var statsRouter = require('./routes/stats');
var datasRouter = require('./routes/data');


const port = process.env.PORT || "3000";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.use(express.favicon(__dirname + '/public/images/favicon.ico'))
app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/dashboard', indexRouter);
app.use('/data', datasRouter)
app.use('/users', usersRouter);
app.use('/tambah_data', addRouter);
app.use('/statistik', statsRouter)

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

app.listen(port, () => console.log(`listening on ${port}`));