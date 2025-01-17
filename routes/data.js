const { response } = require("express");
var express = require("express");
var router = express.Router();
const url = require('url');

const UserController = require("../controller/dataView");
var database = require("../database");
const { isLoggedIn } = require("../middlewares/auth");

// GET data-penduduk
router.get("/data-keluarga", isLoggedIn,  UserController.view_keluarga);

router.get("/data-kematian", isLoggedIn,  UserController.view_kematian);


// GET data-penduduk
router.get("/data-penduduk", isLoggedIn,  UserController.view_penduduk);
router.get("/data-penduduk/delete/:nik", isLoggedIn,  function (request, response, next) {
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


router.get("/data-keluarga/delete/:no_kk", isLoggedIn,  function (request, response, next) {
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



// GET data-kelahiran
router.get("/data-kelahiran", isLoggedIn,  UserController.view_kelahiran);

router.get("/data-kelahiran/delete/:id_lahir", isLoggedIn,  function (request, response, next) {
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



// GET data-kematian
router.get("/data-kematian", isLoggedIn,  UserController.view_kematian);


// GET data-pekerjaan
router.get("/data-pekerjaan", isLoggedIn,  function (req, res, next) {
  res.render("data-pekerjaan");
});
// GET data-pindah
router.get("/data-pindah", isLoggedIn,  UserController.view_keluar);


router.get("/data-pindah/delete/:id_pindah", isLoggedIn, function (request, response, next) {
  var id_pindah = request.params.id_pindah;
  // User the connection
  var query = `DELETE FROM keluar WHERE id_pindah = "${id_pindah}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-pindah");
    }
  });
}
);


// router.get("/data-masuk", isLoggedIn,  function (req, res, next) {
//   res.render("data-masuk");
// });

// GET data-masuk
router.get("/data-masuk", isLoggedIn,  UserController.view_masuk);
router.get("/data-masuk/delete/:id_masuk", isLoggedIn,  function (request, response, next) {
  var id_masuk = request.params.id_masuk;
  // User the connection
  var query = `DELETE FROM masuk WHERE id_masuk = "${id_masuk}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-masuk");
    }
  });
});

// 🔥
router.post("/data-masuk/update/:id_masuk", isLoggedIn,  function (request, response, next) {
  var id_masuk = request.params.id_masuk;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE masuk SET
    id_masuk  = ?,
    nik_kk = ?,
    nomor_kk = ?,
    tgl_masuk = ?,
    alamat_sebelumnya = ?

    WHERE id_masuk = ?`;
  database.query(query, [
    request.body.id_masuk,
    request.body.nik_kk,
    request.body.nomor_kk,
    request.body.tgl_masuk,
    request.body.alamat_sebelumnya,

    id_masuk
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-masuk",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-masuk",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});


// GET data-penduduk
// router.get("/data-penduduk", isLoggedIn,  function (req, res, next) {
//   res.render("data-penduduk");
// });

// GET data-umkm
router.get("/data-umkm", isLoggedIn,  UserController.view_umkm);
//UPDATE UMKM!!!!
router.post("/data-umkm/update/:id_Usaha", isLoggedIn,  function (request, response, next) {
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


//GET Pengguna
router.get("/data-pengguna", isLoggedIn,  UserController.view_pengguna);


router.get("/data-pengguna/delete/:user_id", isLoggedIn, function (request, response, next) {
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

router.post("/data-keluarga/update/:no_kk", isLoggedIn,  function (request, response, next) {
  var no_kk = request.params.no_kk;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE keluarga SET
      no_kk = ?,
      kepala_kel = ?,
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
    request.body.kepala_kel,
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








//DELETE FEATURE IN UMKM.
router.get("/data-umkm/delete/:id_Usaha", isLoggedIn,  function (request, response, next) {
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


router.get("/data-kematian/delete/:id_kematian", isLoggedIn,  function (request, response, next) {
  var id_kematian = request.params.id_kematian;
  // User the connection
  var query = `DELETE FROM kematian WHERE id_kematian = "${id_kematian}"`;
  // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/data/data-kematian");
    }
  });
});

router.post("/data-kematian/update/:id_kematian", isLoggedIn,  function (request, response, next) {
  var id_kematian = request.params.id_kematian;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE kematian SET
    id_kematian  = ?,
    nik = ?,
    tgl_kematian = ?

    WHERE id_kematian = ?`;
  database.query(query, [
    request.body.id_kematian,
    request.body.nik,
    request.body.tgl_kematian,

    id_kematian
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-kematian",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-kematian",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});

router.post("/data-kelahiran/update/:id_lahir", isLoggedIn,  function (request, response, next) {
  var id_lahir = request.params.id_lahir;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE kelahiran SET
    id_lahir  = ?,
    nama = ?,
    jenis_kelamin = ?,
    tgl_lahir = ?

    WHERE id_lahir = ?`;
  database.query(query, [
    request.body.id_lahir,
    request.body.nama,
    request.body.jenis_kelamin,
    request.body.tgl_lahir,

    id_lahir
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-kelahiran",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-kelahiran",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});


//GET Publikasi
router.get("/data-publikasi", isLoggedIn,  UserController.view_publikasi);

router.get("/data-publikasi/edit/:id_publish", isLoggedIn,  UserController.edit_publikasi);
router.post("/data-publikasi/edit/:id_publish", isLoggedIn, UserController.update_publikasi);

// router.get("/editpublikasi/:id", isLoggedIn,  UserController.edit_publikasi);
router.get("/data-publikasi/delete/:id_publish",
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

// router.get("/data-publikasi", isLoggedIn,  function (req, res, next) {
//   res.render("data-publikasi");
// });

// 'INSERT INTO admin_login SET nama_lengkap = ?, user_name = ?, user_password = ?',
router.post("/data-pengguna/update/:user_id", isLoggedIn,  function (request, response, next) {
  var user_id = request.params.user_id;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE admin_login SET
      user_id = ?,
      nama_lengkap = ?,
      user_name = ?,
      user_password = ?

    WHERE user_id = ?`;
  database.query(query, [
    request.body.user_id,
    request.body.nama_lengkap,
    request.body.user_name,
    request.body.user_password,

    user_id
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-pengguna",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-pengguna",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});


router.post("/data-penduduk/update/:nik", isLoggedIn,  function (request, response, next) {
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




router.post("/data-pindah/update/:id_pindah", isLoggedIn,  function (request, response, next) {
  var id_pindah = request.params.id_pindah;
  // response.send("Cek No KK = " + no_kk);
  // response.send("Cek Body = " + JSON.stringify(request.body));

  let query = `
    UPDATE keluar SET
    id_pindah = ?,
    kel_nomor_kk = ?,
    tgl_pindah = ?,
    penduduk_nik = ?,
    alasan = ?

      
    WHERE id_pindah = ?`;
  database.query(query, [
    request.body.id_pindah,
    request.body.kel_nomor_kk,
    request.body.tgl_pindah,
    request.body.penduduk_nik,
    request.body.alasan,


    id_pindah,
  ], (err, row) => {
    if(err)
      return response.redirect(url.format({
        pathname:"/data/data-pindah",
        query: {
          "sukses": false,
          "pesan": "Gagal menyimpan perubahan"
        }
      }));
    return response.redirect(url.format({
      pathname:"/data/data-pindah",
      query: {
        "sukses": true,
        "pesan": "Berhasil menyimpan perubahan"
      }
    }));
  })
});
module.exports = router;