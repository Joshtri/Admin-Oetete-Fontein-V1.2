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

//add new 

exports.form_pengguna = (req, res) => {
  res.render('tambah-data-pengguna');
};
// Add new pengguna
exports.create_pengguna = (req, res) => {
  const {
    user_id,
    nama_lengkap,
    user_name,
    user_password,
    
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO admin_login SET user_id = ?, nama_lengkap = ?, user_name = ?, user_password = ?',
    [user_id, nama_lengkap, user_name, user_password],
    (err, rows) => {
      if (!err) {
        res.render('tambah-data-pengguna', {
          //send this in views.
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      // console.log("The data from user tabl\e: \n", rows);
    }
  );
};

//add new keluarga
exports.form_keluarga = (req, res) => {
  res.render('tambah-data-keluarga');
};
// Add new user
exports.create_keluarga = (req, res) => {
  const {
    no_kk,
    kepala_kel,
    alamat,
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
    'INSERT INTO keluarga SET no_kk = ?, kepala_kel = ?, alamat = ?, rt = ?, rw = ?, kel_n_desa = ?, kecamatan = ?, kota_n_kab = ?, provinsi = ?',
    [no_kk, kepala_kel, alamat, rt, rw, kel_n_desa, kecamatan, kota_n_kab, provinsi],
    (err, rows) => {
      if (!err) {
        res.render("tambah-data-keluarga", {
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      // console.log("The data from user table: \n", rows);
    }
  );
};

// (not use)id_Usaha, nama_usaha, alamat_tempat_usaha, nama_kk, umur, nama_pemilik, alamat_tempat_tinggal, pendidikan_pemilik, jenis_lokasi_usaha, jenis_pengelolaan_usaha, kbli, rincian_kgiatan_usaha, omset, kekayaan_bersih_usaha, jumlah_tenaga_kerja, modal_usaha, bina_usaha
//add new umkm
exports.form_umkm = (req, res) => {
  
  res.render('tambah-data-umkm');
};
// Add new  UMKM
exports.create_umkm = (req, res) => {
  const {
    nama_usaha,
    alamat_tempat_usaha,
    nama_kk,
    umur,
    nama_pemilik,
    alamat_tempat_tinggal,
    pendidikan_pemilik,
    jenis_lokasi_usaha,
    jenis_pengelolaan_usaha,
    kbli,
    rincian_kgiatan_usaha,
    omset,
    kekayaan_bersih_usaha,
    jumlah_tenaga_kerja,
    modal_usaha,
    bina_usaha,
    
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO umkm SET nama_usaha = ?, alamat_tempat_usaha = ?, nama_kk = ?, umur = ?, nama_pemilik = ?, alamat_tempat_tinggal = ?, pendidikan_pemilik = ?, jenis_lokasi_usaha = ?, jenis_pengelolaan_usaha = ?, kbli = ?, rincian_kgiatan_usaha = ?, omset = ?, kekayaan_bersih_usaha = ?, jumlah_tenaga_kerja = ?, modal_usaha = ?, bina_usaha = ?',
    [nama_usaha, alamat_tempat_usaha, nama_kk, umur, nama_pemilik, alamat_tempat_tinggal, pendidikan_pemilik, jenis_lokasi_usaha, jenis_pengelolaan_usaha, kbli, rincian_kgiatan_usaha, omset, kekayaan_bersih_usaha, jumlah_tenaga_kerja, modal_usaha, bina_usaha],
    (err, rows) => {
      if (!err) {
        res.render("tambah-data-umkm", {
          alert: "User added successfully.",
        });
      } else {
        console.log(err);
      }
      // console.log("The data from user table: \n", rows);
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
    });
  });
};

// Add new penduduk
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

exports.form_kematian = (req, res) => {
  pool.getConnection((err, conn) => {
    /**
     * karena int pada js memiliki batasan maka no_kk diconvert ke
     * string
     */
    conn.query("SELECT *, CONVERT(nik, CHAR(17)) AS nikPen FROM penduduk", (err, rows) => {
      if(err) throw new Error(err)
      conn.release();
      res.render("tambah-data-kematian", { penduduk: rows });
    });
  });
};

// Add new kematian
exports.create_kematian = (req, res) => {
  const {
    id_kematian,
    nik,
    tgl_kematian,

  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO kematian SET id_kematian = ?, nik = ?, tgl_kematian = ?',
    [id_kematian, nik, tgl_kematian],
    (err, rows) => {
      if(err) return res.send(err);
      if(err) return res.send(JSON.stringify(err));
      if(err)
        return res.redirect(url.format({
          pathname:"/data/data-kematian",
          query: {
            "sukses": false,
            "pesan": "Gagal menambahkan data"
          }
        }));
      return res.redirect(url.format({
        pathname:"/data/data-kematian",
        query: {
          "sukses": true,
          "pesan": "Berhasil menambahkan data"
        }
      }));
    }
  );
};


exports.form_kelahiran  = (req, res) => {
  pool.getConnection((err, conn) => {
    /**
     * karena int pada js memiliki batasan maka no_kk diconvert ke
     * string
     */
    conn.query("SELECT *, CONVERT(no_kk, CHAR(17)) AS nomorKK FROM keluarga", (err, rows) => {
      if(err) throw new Error(err)
      conn.release();
      res.render("tambah-data-kelahiran", { keluarga: rows });
    });
  });
};



// Add new user
exports.create_kelahiran = (req, res) => {
  const {
    id_lahir,
    kel_nomor_kk,
    nama,
    jenis_kelamin,
    tgl_lahir,

  } = req.body;
  let searchTerm = req.body.search;
    // User the connection
    connection.query(
      'INSERT INTO kelahiran SET id_lahir = ?, kel_nomor_kk = ?, nama = ?,  jenis_kelamin = ?, tgl_lahir = ? ',
      [id_lahir,kel_nomor_kk, nama, jenis_kelamin,tgl_lahir],
      (err, rows) => {
        if(err) return res.send(err);
        if(err) return res.send(JSON.stringify(err));
        if(err)
          return res.redirect(url.format({
            pathname:"/data/data-kelahiran",
            query: {
              "sukses": false,
              "pesan": "Gagal menambahkan data"
            }
          }));
        return res.redirect(url.format({
          pathname:"/data/data-kelahiran",
          query: {
            "sukses": true,
            "pesan": "Berhasil menambahkan data"
          }
        }));
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
    judul_publish,
    tanggal_terbit,
    id_publish
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO publikasi SET file_article = ?, judul_publish = ?, tanggal_terbit = ?,  id_publish = ?',
    [file_article, judul_publish,tanggal_terbit, id_publish],
    (err, rows) => {
      if(err) return res.send(err);
      if(err) return res.send(JSON.stringify(err));
      if(err)
        return res.redirect(url.format({
          pathname:"/data/data-publikasi",
          query: {
            "sukses": false,
            "pesan": "Gagal menambahkan data"
          }
        }));
      return res.redirect(url.format({
        pathname:"/data/data-publikasi",
        query: {
          "sukses": true,
          "pesan": "Berhasil menambahkan data"
        }
      }));
    }
  );
};




exports.form_keluar_add = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query("SELECT *, CONVERT(nik, CHAR(17)) AS nik_pen FROM penduduk", (err, rows1) => {
      //when done with the connection, release it.
          connection.release();

          if(!err){
              res.render("tambah-data-pindah",{ penduduk: rows1 });
          }

          else{
              console.log(err);
          } 
          // console.log('The data from user table: \n', rows1);
    });
  });
};


exports.create_keluar = (req,res) =>{
  const {
    id_pindah,
    kel_nomor_kk,
    tgl_pindah,
    penduduk_nik,
    alasan
  } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    'INSERT INTO keluar SET id_pindah = ?, kel_nomor_kk = ?, tgl_pindah = ?, penduduk_nik = ?,  alasan = ?',
    [id_pindah,kel_nomor_kk,tgl_pindah,penduduk_nik,alasan],
    (err, rows) => {
      if(err) return res.send(err);
      if(err) return res.send(JSON.stringify(err));
      if(err)
        return res.redirect(url.format({
          pathname:"/data/data-pindah",
          query: {
            "sukses": false,
            "pesan": "Gagal menambahkan data"
          }
        }));
      return res.redirect(url.format({
        pathname:"/data/data-pindah",
        query: {
          "sukses": true,
          "pesan": "Berhasil menambahkan data"
        }
      }));
    }
  );
};
