const mysql = require("mysql");

// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// exports.form = (req,res)=>{
//     res.render('tambah-data-keluarga')
// }

//add new keluarga
exports.form = (req, res) => {
  res.render('tambah-data-keluarga');
};
// Add new user
exports.create = (req, res) => {
  const {
    no_kk,
    alamat,
    kepala_kel,
    rt,
    rw,
    kel_n_desa,
    kecamatan,
    kota_n_kab,
    provinsi,
    
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO keluarga SET no_kk = ?, alamat = ?, kepala_kel = ?, rt = ?, rw = ?, kel_n_desa = ?, kecamatan = ?, kota_n_kab = ?, provinsi = ?',
    [no_kk, alamat, kepala_kel, rt, rw, kel_n_desa, kecamatan, kota_n_kab, provinsi],
    (err, rows) => {
      if (!err) {
        res.render("tambah-data-keluarga", {
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

//add new penduduk
exports.form = (req, res) => {
  res.render('tambah-data-penduduk');
};

// Add new user
exports.create = (req, res) => {
  const {
    no_kk,
    nik,
    nama,
    jk,
    tgl_lahir,
    hub_kel,
    pend,
    pekerjaan,
    status,
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO penduduk SET no_kk = ?, nik = ?, nama = ?, jk = ?, tgl_lahir = ?, hub_kel = ?, pend = ?, pekerjaan = ?, status = ?',
    [no_kk, nik, nama, jk, tgl_lahir, hub_kel, pend, pekerjaan, status],
    (err, rows) => {
      if (!err) {
        res.render("tambah-data-penduduk", {
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

// Add new user
exports.create = (req, res) => {
  const {
    nama_usaha,
    alamat_usaha,
    nama_kk,
    nama_pemilik,
    umur,
    alamat_tmpt_tnggl,
    pendidikan_pemilik,
    jenis_pengelolaan_usaha,
    kbli,
    rincian_kgiatan_usaha,
    omset,
    kekayaan_bersih_usaha,
    tenaga_kerja,
    modal_usaha,
    bina_usaha,

  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO umkm SET nama_usaha = ?, alamat_usaha = ?, nama_kk = ?, nama_pemilik = ?, umur = ?, alamat_tmpt_tnggl = ?, pendidikan_pemilik = ?, jenis_pengelolaan_usaha = ?, kbli = ?, rincian_kgiatan_usaha = ?, omset = ?,kekayaan_bersih_usaha = ?, tenaga_kerja = ?, modal_usaha = ?, bina_usaha = ? ',
    [nama_usaha, alamat_usaha , nama_kk, nama_pemilik, umur, alamat_tmpt_tnggl, pendidikan_pemilik , jenis_pengelolaan_usaha, kbli, rincian_kgiatan_usaha,omset, kekayaan_bersih_usaha,tenaga_kerja,modal_usaha,bina_usaha ],
    (err, rows) => {
      if (!err) {
        res.render("tambah-data-umkm", {
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};
