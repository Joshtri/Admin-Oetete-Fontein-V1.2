const mysql = require("mysql");
const url = require('url')

// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const pool = mysql.createPool({
  connectionLimit: 100,
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



exports.form_penduduk = (req, res) => {
  pool.getConnection((err, conn) => {
    /**
     * karena int pada js memiliki batasan maka no_kk diconvert ke
     * string
     */
    conn.query("SELECT *, CONVERT(no_kk, CHAR(17)) AS no_kk FROM keluarga", (err, rows) => {
      if(err) throw new Error(err)
      conn.release();
      res.render("tambah-data-penduduk", { keluarga: rows });
    })
  })

};
// Add new user
exports.create_penduduk = (req, res) => {
  const {
    kel_no_kk,
    nik,
    nama,
    jenis_kelamin,
    lahir,
    hubungan_keluarga,
    pendidikan,
    pekerjaan,
    status_perkawinan,
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO penduduk SET kel_no_kk = ?, nik = ?, nama = ?, jenis_kelamin = ?, lahir = ?, hubungan_keluarga = ?, pendidikan = ?, pekerjaan = ?, status_perkawinan = ?',
    [kel_no_kk, nik, nama, jenis_kelamin, lahir, hubungan_keluarga, pendidikan, pekerjaan, status_perkawinan],
    (err, rows) => {
      if(err) return res.send(err);
      if(err) return res.send(JSON.stringify(err));
      if(err)
        return res.redirect(url.format({
          pathname:"/data/data-penduduk",
          query: {
            "sukses": false,
            "pesan": "Gagal menambahkan data"
          }
        }));
      return res.redirect(url.format({
        pathname:"/data/data-penduduk",
        query: {
          "sukses": true,
          "pesan": "Berhasil menambahkan data"
        }
      }));
    }
  );
};


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


exports.create_kelahiran = (req,res) =>{
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
        res.render('tambah-data-kelahiran', {
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