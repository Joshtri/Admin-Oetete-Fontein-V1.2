const { response } = require("express");
var express = require("express");
var router = express.Router();
const url = require('url');

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
router.get("/data-umkm", UserController.view_umkm);
//UPDATE UMKM!!!!
router.post("/data-umkm/update/:id_Usaha", function (request, response, next) {
  var id_Usaha = request.params.id_Usaha;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));
  let query = `
    UPDATE umkm SET
    id_Usaha = ?,
    nama_usaha = ?,
    alamat_tempat_usaha = ?,
    nama_kk = ?,
    umur = ?,
    nama_pemilik = ?,
    alamat_tempat_tinggal = ?,
    pendidikan_pemilik = ?,
    jenis_lokasi_usaha = ?,
    jenis_pengelolaan_usaha = ?,
    kbli = ?,
    rincian_kgiatan_usaha = ?,
    omset = ?,
    kekayaan_bersih_usaha = ?,
    jumlah_tenaga_kerja = ?,
    modal_usaha = ?,
    bina_usaha = ?

    WHERE id_Usaha = ?`;
  database.query(query, [
    request.body.id_Usaha,
    request.body.nama_usaha,
    request.body.alamat_tempat_usaha,
    request.body.nama_kk,
    request.body.umur,
    request.body.nama_pemilik,
    request.body.alamat_tempat_tinggal,
    request.body.pendidikan_pemilik,
    request.body.jenis_lokasi_usaha,
    request.body.jenis_pengelolaan_usaha,
    request.body.kbli,
    request.body.rincian_kgiatan_usaha,
    request.body.omset,
    request.body.kekayaan_bersih_usaha,
    request.body.jumlah_tenaga_kerja,
    request.body.modal_usaha,
    request.body.bina_usaha,

    id_Usaha
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-umkm",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-umkm",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});

// GET Pengguna
// router.get("/data-pengguna", function (req, res, next) {
//   res.render("data-pengguna");
// });

//GET Pengguna
router.get("/data-pengguna", UserController.view_pengguna);
// router.post("/data-publikasi/edit/:nik", UserController.delete_publikasi);

router.get("/data-pengguna/delete/:user_id",function (request, response, next) {
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

router.post("/data-keluarga/update/:no_kk", function (request, response, next) {
  var no_kk = request.params.no_kk;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE keluarga SET
      no_kk = ?,
      rt = ?,
      rw = ?,
      alamat = ?,
      kel_n_desa = ?,
      kecamatan = ?,
      kota_n_kab = ?,
      provinsi = ?
    WHERE no_kk = ?`;
  database.query(query, [
    request.body.no_kk,
    request.body.rt,
    request.body.rw,
    request.body.alamat,
    request.body.kel_n_desa,
    request.body.kecamatan,
    request.body.kota_n_kab,
    request.body.provinsi,

    no_kk
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-keluarga",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-keluarga",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});





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


//DELETE FEATURE IN UMKM.
router.get("/data-umkm/delete/:id_Usaha", function (request, response, next) {
  var id_Usaha = request.params.id_Usaha;
  // User the connection
  var query = `DELETE FROM umkm WHERE id_Usaha = "${id_Usaha}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-umkm");
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


router.post("/data-penduduk/update/:nik", function (request, response, next) {
  var nik = request.params.nik;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE penduduk SET
      nik = ?,
      kel_no_kk = ?,
      nama = ?,
      jenis_kelamin = ?,
      lahir = ?,
      hubungan_keluarga = ?,
      pendidikan = ?,
      pekerjaan = ?,
      status_perkawinan = ?
    WHERE nik = ?`;
  database.query(query, [
    request.body.nik,
    request.body.kel_no_kk,
    request.body.nama,
    request.body.jenis_kelamin,
    request.body.lahir,
    request.body.hubungan_keluarga,
    request.body.pendidikan,
    request.body.pekerjaan,
    request.body.status_perkawinan,

    nik
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-penduduk",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-penduduk",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});

module.exports = router;