var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main-admin', function (req, res, next) {
  res.render('main-admin');
});

// GET Pengguna
router.get('/pengguna',function(req,res,next){
  res.render('pengguna');
});

//GET Publikasi
router.get('/publikasi',function(req,res,next){
  res.render('publikasi');
});


// router.get('/statistik/umur', function (req, res, next) {
//   // konek
//   // data dari tabel

//   res.json(
//     {
//       label: ["My First dataset"],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//       ],

//       data: [200, 10],
//       hoverOffset: 4,
//     },
//   );
// });

// GET data-kbli
router.get('/data-umkm', function (req, res, next) {
  res.render('data-umkm');
});



// GET login view
router.get('/login', function (req, res, next) {
  res.render('login');
});



// router.get('/statistik-umur', function (req, res, next) {

//   res.render('statistik-umur');

// });

// router.get('/statistik-pekerjaan', function (req, res, next) {
//   res.render('statistik-pekerjaan');
// });

// router.get('/statistik-jeniskelamin', function (req, res, next) {
//   res.render('statistik-jeniskelamin');
// });

// router.get('/statistik-pendidikan', function (req, res, next) {
//   res.render('statistik-pendidikan');
// });

// // router.get('/statistik-pekerjaan', function(req,res,next){
// //   res.render('statistik-pekerjaan');
// // });

module.exports = router;
