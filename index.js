import createError from 'http-errors';
import express from 'express';
import path from 'path';

import { config } from 'dotenv';
import session from 'express-session';
// import mysql from 'mysql';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import indexRoute from './routes/index.route.js';
import dashboardRoute from './routes/dashboard.route.js';
import keluargaRoute from './routes/keluarga.route.js';
import wargaRoute from './routes/warga.route.js';
import kelahiranRoute from './routes/kelahiran.route.js';
import kematianRoute from './routes/kematian.route.js';

// import usersRouter from './routes/users.mjs';
// import addRouter from './routes/add.mjs';
// import statsRouter from './routes/stats.mjs';
// import datasRouter from './routes/data.mjs';

const app = express();
const port = process.env.PORT || "3001";



// Tentukan lokasi folder views
const viewsDirectories = [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views', 'keluarga'),
  path.join(__dirname, 'views', 'warga'),
  path.join(__dirname, 'views', 'kelahiran'),
  path.join(__dirname, 'views', 'kematian')
];

// view engine setup
app.set('views', viewsDirectories);
app.set('view engine', 'ejs');

app.use(session({
  secret: 'login',
  cookie: { maxAge: 3.24e+7 },  //more longer than before. 
  saveUninitialized: false,
  resave: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);  // most top level sitemap. 
app.use('/adm', dashboardRoute);  // most top level sitemap. 
app.use('/adm/data', keluargaRoute, wargaRoute, kelahiranRoute, kematianRoute);
// app.use('/users', usersRouter);
// app.use('/tambah_data', addRouter);
// app.use('/statistics', statsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(port, () => console.log(`listening on ${port}`));
