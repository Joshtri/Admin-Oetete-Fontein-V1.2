var express = require('express');
var router = express.Router();

const UserController = require('../controller/dataView');

// GET data-keluarga
router.get('/data-keluarga', UserController.view_keluarga); 

// GET data-penduduk
router.get('/data-penduduk', function (req, res, next) {
    res.render('data-penduduk');
});

// GET data-kelahiran
router.get('/data-kelahiran', function (req, res, next) {
    res.render('data-kelahiran');
});
// GET data-kematian
router.get('/data-kematian', function (req, res, next) {
    res.render('data-kematian');
});
// GET data-pekerjaan
router.get('/data-pekerjaan', function (req, res, next) {
    res.render('data-pekerjaan');
});
// GET data-pindah
router.get('/data-pindah', function (req, res, next) {
    res.render('data-pindah');
});
// GET data-masuk
router.get('/data-masuk', function (req, res, next) {
    res.render('data-masuk');
});
// GET data-penduduk
router.get('/data-penduduk', function (req, res, next) {
    res.render('data-penduduk');
});

// GET data-umkm
router.get('/data-umkm', function (req, res, next) {
    res.render('data-umkm');
});



module.exports = router;