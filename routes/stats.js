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
            data: [21, 10, 20, 29, 22, 24, 29, 39],
            hoverOffset: 4,
        },
    );

});

router.get('/statistik/status', function (req, res, next) {
    // konek
    // Connection Pool

    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            data: [50, 10, 34, 26],
            hoverOffset: 4,
        },
    );

});
router.get('/statistik/pendidikan', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(25, 34, 86)",
                "rgb(255, 99, 132)",

                "rgb(54, 16, 235)",
                "rgb(115, 25, 86)",
                "rgb(0, 99, 132)",
                "rgb(534, 162, 235)",

                "rgb(211, 15, 56)",

            ],
            data: [2, 10, 3, 5, 6, 7, 8, 5, 2],
            hoverOffset: 4,
        },
    );

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
        connection.query("SELECT Count(no_kk) AS TotalNo_kk FROM keluarga", (err, rows1) => {
            //when done with the connection, release it.
            // connection.release();
            connection.query("SELECT SUM(jenis_kelamin ='laki-laki') AS Total_laki FROM penduduk", (err, rows2) => {
                //when done with the connection, release it.
                connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows3) => {
                    //when done with the connection, release it.
                    connection.query("SELECT Count(nik) AS TotalNik FROM penduduk", (err, rows4) => {
                        connection.release();

                        if (!err) {
                            res.json(
                                {
                                    label: ["My First dataset"],
                                    backgroundColor: [
                                        "rgb(128,0,0)",
                                        "rgb(139,0,0)",
                                        "rgb(165,42,42)",
                                    ],
                                    data: [rows2[0].Total_laki, rows3[0].Total_perempuan],
                                    hoverOffset: 4,
                                },
                            );
                        } else {
                            console.log(err);
                        }
                        console.log("The data from user table: \n", rows1, rows2, rows3, rows4);
                    });
                });
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


router.get('/statistik-umkm', function (req, res, next) {
    res.render('statistik-umkm');
});

module.exports = router;