const { response } = require("express");
var express = require("express");
var router = express.Router();

const UserController = require("../controller/dataView");
var database  = require('../database')


// // GET data-keluarga
// router.get('/data-keluarga', UserController.view_keluarga);

// GET data-penduduk
router.get("/data-keluarga", function (req, res, next) {
  res.render("data-keluarga");
});

// GET data-penduduk
router.get("/data-penduduk", function (req, res, next) {
  res.render("data-penduduk");
});

// GET data-kelahiran
router.get("/data-kelahiran", function (req, res, next) {
  res.render("data-kelahiran");
});
// GET data-kematian
router.get("/data-kematian", function (req, res, next) {
  res.render("data-kematian");
});
// GET data-pekerjaan
router.get("/data-pekerjaan", function (req, res, next) {
  res.render("data-pekerjaan");
});
// GET data-pindah
router.get("/data-pindah", function (req, res, next) {
  res.render("data-pindah");
});
// GET data-masuk
router.get("/data-masuk", function (req, res, next) {
  res.render("data-masuk");
});
// GET data-penduduk
router.get("/data-penduduk", function (req, res, next) {
  res.render("data-penduduk");
});

// GET data-umkm
router.get("/data-umkm", function (req, res, next) {
  res.render("data-umkm");
});

// GET Pengguna
// router.get("/data-pengguna", function (req, res, next) {
//   res.render("data-pengguna");
// });

//GET Pengguna
router.get("/data-pengguna", UserController.view_pengguna);

router.get('/data-pengguna/delete/:user_id',function(request, response,next){
    var user_id = request.params.user_id;
  // User the connection
  var query = `DELETE FROM admin_login WHERE user_id = "${user_id}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function(error, data){
    if(error){
      throw error;
    }
    else
    {
      response.redirect("/data/data-pengguna"); 
    }
   });
});

//GET Publikasi
router.get("/data-publikasi", UserController.view_publikasi);

router.get("/data-publikasi/edit/:id_publish", UserController.edit_publikasi);
router.post("/data-publikasi/edit/:id_publish", UserController.update_publikasi);

// router.get("/editpublikasi/:id", UserController.edit_publikasi);
router.get("/data-publikasi/delete/:id_publish",function(request, response, next){
    var id_publish = request.params.id_publish;
  // User the connection
  var query = `DELETE FROM publikasi WHERE id_publish = "${id_publish}"`;

  database.query(query, function(error, data){
    if(error){
      throw error;
    }
    else
    {
      response.redirect("/data/data-publikasi"); 
    }
   });
});

// router.get("/data-publikasi", function (req, res, next) {
//   res.render("data-publikasi");
// });

module.exports = router;
