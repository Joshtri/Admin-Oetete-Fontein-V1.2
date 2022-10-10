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
exports.form_keluarga = (req, res) => {
  res.render('tambah-data-keluarga');
};
// Add new user
exports.create_keluarga = (req, res) => {
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

// //add new penduduk
// exports.form = (req, res) => {
//   res.render('tambah-data-penduduk');
// };

// // Add new user
// exports.create = (req, res) => {
//   const {
//     no_kk,
//     nik,
//     nama,
//     jk,
//     tgl_lahir,
//     hub_kel,
//     pend,
//     pekerjaan,
//     status,
//   } = req.body;
//   let searchTerm = req.body.search;

//   // User the connection
//   connection.query(
//     'INSERT INTO penduduk SET no_kk = ?, nik = ?, nama = ?, jk = ?, tgl_lahir = ?, hub_kel = ?, pend = ?, pekerjaan = ?, status = ?',
//     [no_kk, nik, nama, jk, tgl_lahir, hub_kel, pend, pekerjaan, status],
//     (err, rows) => {
//       if (!err) {
//         res.render("tambah-data-penduduk", {
//           alert: "User added successfully.",
//         });
//       } else {
//         console.log(err);
//       }
//       console.log("The data from user table: \n", rows);
//     }
//   );
// };

// // Add new user
// exports.create = (req, res) => {
//   const {
//     nama_usaha,
//     alamat_usaha,
//     nama_kk,
//     nama_pemilik,
//     umur,
//     alamat_tmpt_tnggl,
//     pendidikan_pemilik,
//     jenis_pengelolaan_usaha,
//     kbli,
//     rincian_kgiatan_usaha,
//     omset,
//     kekayaan_bersih_usaha,
//     tenaga_kerja,
//     modal_usaha,
//     bina_usaha,

//   } = req.body;
//   let searchTerm = req.body.search;

//   // User the connection
//   connection.query(
//     'INSERT INTO umkm SET nama_usaha = ?, alamat_usaha = ?, nama_kk = ?, nama_pemilik = ?, umur = ?, alamat_tmpt_tnggl = ?, pendidikan_pemilik = ?, jenis_pengelolaan_usaha = ?, kbli = ?, rincian_kgiatan_usaha = ?, omset = ?,kekayaan_bersih_usaha = ?, tenaga_kerja = ?, modal_usaha = ?, bina_usaha = ? ',
//     [nama_usaha, alamat_usaha , nama_kk, nama_pemilik, umur, alamat_tmpt_tnggl, pendidikan_pemilik , jenis_pengelolaan_usaha, kbli, rincian_kgiatan_usaha,omset, kekayaan_bersih_usaha,tenaga_kerja,modal_usaha,bina_usaha ],
//     (err, rows) => {
//       if (!err) {
//         res.render("tambah-data-umkm", {
//           alert: "User added successfully.",
//         });
//       } else {
//         console.log(err);
//       }
//       console.log("The data from user table: \n", rows);
//     }
//   );
// };


//add new pengguna
exports.form_pengguna_add = (req, res) => {
  res.render('tambah-data-pengguna');
};
// Add new pengguna
exports.create_pengguna = (req, res) => {
  const {
    nama_lengkap,
    user_password,
    user_name,
    
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO admin_login SET nama_lengkap = ?, user_name = ?, user_password = ?',
    [nama_lengkap, user_name, user_password],
    (err, rows) => {
      if (!err) {
        res.render('tambah-data-pengguna', {
          //send this in views.
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

//add new publikasi.
exports.form_publikasi_add = (req, res) => {
  res.render('tambah-data-publikasi');
};


exports.create_publikasi = (req,res) =>{
  const {
    file_article,
    tanggal_terbit,
    judul_publish
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO publikasi SET file_article = ?, tanggal_terbit = ?, judul_publish = ?',
    [file_article, tanggal_terbit, judul_publish],
    (err, rows) => {
      if (!err) {
        res.render('tambah-data-publikasi', {
          //send this in views.
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};