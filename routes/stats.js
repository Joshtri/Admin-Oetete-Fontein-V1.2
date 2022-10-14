var express = require('express');
var router = express.Router();
const mysql = require("mysql");

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


router.get('/statistik-pekerjaan', function (req, res, next) {
    res.render('statistik-pekerjaan');
});

router.get('/statistik-jeniskelamin', function (req, res, next) {
    res.render('statistik-jeniskelamin');
});

router.get('/statistik-pendidikan', function (req, res, next) {
    res.render('statistik-pendidikan');
});

// There is 7 router

//DONE
router.get('/statistik/umur', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                
            ],
            data: [90, 60, 45, 80, 100, 40, 25],
            hoverOffset: 4,
        },
    );
});

router.get('/statistik/pekerjaan', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            data: [21, 10,20,29,22,24,29,39],
            hoverOffset: 4,
        },
    );

});

router.get('/statistik/status', function (req, res, next) {
// konek
    // data dari tabel

    pool.getConnection((err, connection) => {
        if (err) throw err; //NOT CONNECTED.
        console.log(`Connected as ID ` + connection.threadId);

            //show data
            // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk


      
        connection.query("SELECT SUM(status_perkawinan = 'Belum Menikah') AS TotalBelumMenikah FROM penduduk", (err, rows1) => {
                //when done with the connection, release it.
            connection.query("SELECT SUM(status_perkawinan = 'Sudah Menikah') AS TotalSudahMenikah FROM penduduk", (err, rows2) => {
                    //when done with the connection, release it.
                connection.query("SELECT SUM(status_perkawinan = 'Cerai Hidup') AS TotalCeraiHidup FROM penduduk", (err, rows3) => {
                        //when done with the connection, release it.
                    connection.query("SELECT SUM(status_perkawinan = 'Cerai Hidup') AS TotalCeraiMati FROM penduduk", (err, rows4) => {
                            //when done with the connection, release it.

                        if (!err) {
                            res.json(
                                {
                                    label: ["My First dataset"],
                                    backgroundColor: [
                                        "rgb(128,0,0)",
                                        "rgb(139,0,0)",
                                        "rgb(165,42,42)",
                                    ],
                                    data: [rows1[0].TotalBelumMenikah, rows2[0].TotalSudahMenikah, rows3[0].TotalCeraiHidup, rows4[0].TotalCeraiMati],
                                    hoverOffset: 4,
                                },
                            );
                        } else {
                            console.log(err);
                        }
                        console.log("The data from user table: \n",  rows1, rows2, rows3, rows4);
                
                    }); 
                });
            });
        });
    });
});


router.get('/statistik/pendidikan', function (req, res, next) {
    // konek
    pool.getConnection((err, connection) => {
        if (err) throw err; //NOT CONNECTED.
        console.log(`Connected as ID ` + connection.threadId);

    // data dari tabel
    connection.query("SELECT SUM(pendidikan = 'Belum/Tidak Pernah Sekolah') AS TotalBelumSekolah FROM penduduk", (err, rows1) => {
        //when done with the connection, release it.
    connection.query("SELECT SUM(pendidikan = 'Belum/Tidak Tamat') AS TotalSudahMenikah FROM penduduk", (err, rows2) => {
            //when done with the connection, release it.
        connection.query("SELECT SUM(status_perkawinan = 'Cerai Hidup') AS TotalCeraiHidup FROM penduduk", (err, rows3) => {
                //when done with the connection, release it.
            connection.query("SELECT SUM(status_perkawinan = 'Cerai Hidup') AS TotalCeraiMati FROM penduduk", (err, rows4) => {
                    //when done with the connection, release it.

                if (!err) {
                    res.json(
                        {
                            label: ["My First dataset"],
                            backgroundColor: [
                                "rgb(128,0,0)",
                                "rgb(139,0,0)",
                                "rgb(165,42,42)",
                            ],
                            data: [rows1[0].TotalBelumMenikah, rows2[0].TotalSudahMenikah, rows3[0].TotalCeraiHidup, rows4[0].TotalCeraiMati],
                            hoverOffset: 4,
                        },
                    );
                } else {
                    console.log(err);
                }
                console.log("The data from user table: \n",  rows1, rows2, rows3, rows4);
        
            }); 
        });
    });
});
});
});

//
router.get('/statistik/jeniskelamin', function (req, res, next) {
// konek
    // data dari tabel

    pool.getConnection((err, connection) => {
        if (err) throw err; //NOT CONNECTED.
        console.log(`Connected as ID ` + connection.threadId);

        //show data
        // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk

            connection.query("SELECT SUM(jenis_kelamin ='laki-laki') AS Total_laki FROM penduduk", (err, rows1) => {
                //when done with the connection, release it.
                connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows2) => {
                    //when done with the connection, release it.

                        if (!err) {
                            res.json(
                                {
                                    label: ["My First dataset"],
                                    backgroundColor: [
                                        "rgb(128,0,0)",
                                        "rgb(139,0,0)",
                                        "rgb(165,42,42)",
                                    ],
                                    data: [rows1[0].Total_laki, rows2[0].Total_perempuan],
                                    hoverOffset: 4,
                                },
                            );
                        } else {
                            console.log(err);
                        }
                        console.log("The data from user table: \n",  rows2, rows1);
                });
            });
    });
});


//
router.get('/statistik/umkm', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            data: [8, 5, 3],
            hoverOffset: 4,
        },
    );

});


router.get('/statistik/penduduk', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(128,0,0)",
                "rgb(139,0,0)",
                "rgb(165,42,42)",
            ],
            data: [10, 15],
            hoverOffset: 4,
        },
    );

});

router.get('/statistik-umur', function (req, res, next) {
    res.render('statistik-umur');
});

router.get('/statistik-jeniskelamin', function (req, res, next) {
    res.render('statistik-jeniskelamin');
});


router.get('/statistik-status', function (req, res, next) {
    res.render('statistik-status');
});


router.get('/statistik-umkm', function(req,res,next){
    res.render('statistik-umkm');
});

module.exports = router;