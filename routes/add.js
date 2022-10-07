var express = require('express');
var router = express.Router();

const UserController = require('../controller/addData');


// GET tambah kematian.
router.get('/tambah-data-kematian', function (req, res, next) {
    res.render('tambah-data-kematian');
});
router.get('/tambah-data-pindah', function (req, res, next) {
    res.render('tambah-data-pindah');
});

router.get('/tambah-data-keluarga', UserController.form);
router.post('/tambah-data-keluarga', UserController.create); 

// GET tambah penduduk.
router.get('/tambah-data-penduduk', UserController.form)
router.post('/tambah-data-penduduk', UserController.create); 

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