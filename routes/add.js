var express = require('express');
var router = express.Router();

// GET tambah penduduk.
router.get('/tambah-data-penduduk', function (req, res, next) {
    res.render('tambah-data-penduduk');
});

// GET tambah kematian.
router.get('/tambah-data-kematian', function (req, res, next) {
    res.render('tambah-data-kematian');
});
router.get('/tambah-data-pindah', function (req, res, next) {
    res.render('tambah-data-pindah');
});

router.get('/tambah-data-keluarga', function (req, res, next) {
    res.render('tambah-data-keluarga');
});

router.get('/tambah-data-kelahiran', function (req, res, next) {
    res.render('tambah-data-kelahiran');
});
router.get('/tambah-data-masuk', function (req, res, next) {
    res.render('tambah-data-masuk');
});

router.get('/tambah-pengguna', function (req,res,next){
    res.render('tambah-pengguna');
});

router.get('/tambah-data-umkm',function(req,res,next){
    res.render('tambah-data-umkm');
});

router.get('/tambah-publikasi',function(req,res,next){
    res.render('tambah-publikasi');
});


module.exports = router;