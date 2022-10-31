var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const favicon = require('express-favicon');
require('dotenv').config();

// const fileUpload = require('express-fileupload');

var session = require('express-session');
// var flash = require('connect-flash');

var mysql = require('mysql');

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

// app.use('/upload', express.static('upload'));

app.use(session({
  secret : 'login',
  cookie:{maxAge : 3.24e+7},
  saveUninitialized : false,
  resave : true
}));

// app.use(flash());

//app.use(express.favicon(__dirname + '/public/images/favicon.ico'))
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });


// //connect db. 
// pool.getConnection((err,connection)=>{
//   if(err) throw err;
//   console.log(`Connected as ID ` + connection.threadId);
// });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(fileUpload());


app.use('/', indexRouter);  // most  top level sitemap. 
app.use('/data', datasRouter)
app.use('/users', usersRouter);
app.use('/tambah_data', addRouter);
app.use('/statistics', statsRouter);


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


app.listen(port, () => console.log(`listening on ${port}`));

