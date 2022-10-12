const { response } = require("express");
var express = require("express");
var router = express.Router();

const UserController = require("../controller/dataView");
var database = require("../database");

// // GET data-keluarga
// router.get('/data-keluarga', UserController.view_keluarga);

// GET data-penduduk
router.get("/data-keluarga", UserController.view_keluarga);

// GET data-penduduk
router.get("/data-penduduk", UserController.view_penduduk);
router.get("/data-penduduk/delete/:nik", function (request, response, next) {
  var nik = request.params.nik;
  // User the connection
  var query = `DELETE FROM penduduk WHERE nik = "${nik}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-penduduk");
    }
  });
});



// GET data-kelahiran
router.get("/data-kelahiran", UserController.view_kelahiran);

router.get("/data-kelahiran/delete/:id_lahir", function (request, response, next) {
  var id_lahir = request.params.id_lahir;
  // User the connection
  var query = `DELETE FROM kelahiran WHERE id_lahir = "${id_lahir}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-kelahiran");
    }
  });
});

router.get("/data-kematian/delete/:id_kematian", function (request, response, next) {
  var id_kematian = request.params.id_kematian;
  // User the connection
  var query = `DELETE FROM kelahiran WHERE id_kematian = "${id_kematian}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-kematian");
    }
  });
});

// GET data-kematian
router.get("/data-kematian", UserController.view_kematian);


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
// router.get("/data-penduduk", function (req, res, next) {
//   res.render("data-penduduk");
// });

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
// router.post("/data-publikasi/edit/:nik", UserController.delete_publikasi);

router.get(
  "/data-pengguna/delete/:user_id",
  function (request, response, next) {
    var user_id = request.params.user_id;
    // User the connection
    var query = `DELETE FROM admin_login WHERE user_id = "${user_id}"`;
    // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

    database.query(query, function (error, data) {
      if (error) {
        throw error;
      } else {
        response.redirect("/data/data-pengguna");
      }
    });
  }
);

router.get("/data-keluarga/delete/:no_kk", function (request, response, next) {
  var no_kk = request.params.no_kk;
  // User the connection
  var query = `DELETE FROM keluarga WHERE no_kk = "${no_kk}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-keluarga");
    }
  });
});

//GET Publikasi
router.get("/data-publikasi", UserController.view_publikasi);

router.get("/data-publikasi/edit/:id_publish", UserController.edit_publikasi);
router.post(
  "/data-publikasi/edit/:id_publish",
  UserController.update_publikasi
);

// router.get("/editpublikasi/:id", UserController.edit_publikasi);
router.get(
  "/data-publikasi/delete/:id_publish",
  function (request, response, next) {
    var id_publish = request.params.id_publish;
    // User the connection
    var query = `DELETE FROM publikasi WHERE id_publish = "${id_publish}"`;

    database.query(query, function (error, data) {
      if (error) {
        throw error;
      } else {
        response.redirect("/data/data-publikasi");
      }
    });
  }
);

// router.get("/data-publikasi", function (req, res, next) {
//   res.render("data-publikasi");
// });

router.post("/editing-pengguna", function (request, response, next) {
  var action = request.body.action;

  if (action == "fetch") {
    var query = "SELECT * FROM admin_login ORDER BY user_id";

    database.query(query, function (error, data) {
      response.json({
        data: data,
      });
    });
  }

  if (action == "fetch_single") {
    var user_id = request.body.user_id;

    var query = `SELECT * FROM admin_login WHERE user_id = "${user_id}"`;

    database.query(query, function (error, data) {
      response.json(data[0]);
    });
  }
  q;
  if (action == "Edit") {
    var user_id = request.body.user_id;
    var nama_lengkap = request.body.nama_lengkap;
    var user_name = request.body.user_name;
    var user_password = request.body.user_password;
    // var = request.body.age;

    var query = `
		UPDATE admin_login 
		SET nama_lengkap = "${nama_lengkap}", 
		user_name = "${user_name}", 
		user_password = "${user_password}", 
		WHERE user_id = "${user_id}"
		`;

    database.query(query, function (error, data) {
      response.json({
        message: "Data Edited",
      });
    });
  }
});

module.exports = router;
