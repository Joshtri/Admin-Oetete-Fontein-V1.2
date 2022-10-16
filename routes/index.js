var express = require("express");
var router = express.Router();
const mysql = require("mysql");

var database = require("../database");

// Connection Pool
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  
  const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

/* GET home page. */
router.get("/main-admin", function (req, res, next) {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
    connection.query("SELECT Count(no_kk) AS TotalNo_kk FROM keluarga", (err, rows1) => {
      //when done with the connection, release it.
      // connection.release();
      connection.query("SELECT SUM(jenis_kelamin ='Laki-Laki') AS TotalLaki FROM penduduk", (err, rows2) => {
        //when done with the connection, release it.
        connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows3) => {
          //when done with the connection, release it.
          connection.query("SELECT Count(nik) AS TotalNik FROM penduduk", (err, rows4) => {
            //when done with the connection, release it.
            connection.query("SELECT COUNT(id_Usaha) AS TotalUMKM FROM umkm", (err, rows5) => {
              //when done with the connection, release it.
              connection.query("SELECT COUNT(id_kematian) AS TotalMati FROM kematian", (err, rows6) => {
                  //when done with the connection, release it.
                connection.query("SELECT COUNT(id_lahir) AS TotalLahir FROM kelahiran", (err, rows7) => {

                      connection.release();
            
                      if (!err) { 
                        res.render("main-admin", { rows1, rows2, rows3, rows4, rows5, rows6, rows7});
                      } else {
                        console.log(err);
                      }
                      console.log("The data from user table: \n",rows1, rows2, rows3,rows4,rows5, rows6, rows7);
                });
              });
            }); 
          }); 
        });
      });
      // if (!err) {
      //   res.render("main-admin", { rows });
      // } else {
      //   console.log(err);
      // }
      // console.log("The data from user table: \n", rows);
    });
    
    // SELECT SUM(jenis_kelamin ="Perempuan") AS Total_perempuan FROM penduduk;
    
  });
});

//GET Publikasi
// router.get('/publikasi',function(req,res,next){
//   res.render('publikasi');
// });

// GET data-kbli
router.get("/data-umkm", function (req, res, next) {
  res.render("data-umkm");
});

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Express", session: req.session });
});

router.post("/main-admin", function (request, response, next) {
  var user_name = request.body.user_name;

  var user_password = request.body.user_password;

  if (user_name && user_password) {
    query = `SELECT * FROM admin_login 
        WHERE user_name = "${user_name}"`;

    database.query(query, function (error, data) {
      if (data.length > 0) {
        for (var count = 0; count < data.length; count++) {
          if (data[count].user_password == user_password) {
            request.session.user_id = data[count].user_id;

            response.redirect("/");
          } else {
            response.send("Incorrect Password");
          }
        }
      } else {
        response.send("Incorrect Email Address");
      }
      response.end();
    });
  } else {
    response.send("Please Enter Email Address and Password Details");
    response.end();
  }
});

router.get("/logout", function (request, response, next) {
  request.session.destroy();

  response.redirect("/");
});

module.exports = router;
