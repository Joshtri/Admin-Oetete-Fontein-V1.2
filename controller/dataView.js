var express = require("express");
const mysql = require("mysql");

//Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

var database  = require('../database');

//View data
exports.view_keluarga = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM keluarga", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("data-keluarga", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    });
  });
};


//View data
exports.view_penduduk = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM penduduk", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("data-penduduk", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    });
  });
};





//View data-pengguna
//View data
exports.view_pengguna = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT nama_lengkap,user_name,user_password, user_id FROM admin_login;", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("data-pengguna", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    });
  });
};

//View data-publikasi
//View data all.
exports.view_publikasi = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT file_article, judul_publish, tanggal_terbit, id_publish FROM publikasi", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("data-publikasi", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    });
  });
};

//view kelahiran
exports.view_kelahiran = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM kelahiran", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("data-kelahiran", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    });
  });
};


//view kematian
exports.view_kematian = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM kematian", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("data-kematian", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    });
  });
};

// Delete User
exports.delete_publikasi = (req, res) => {

  // User the connection
  connection.query('DELETE FROM publikasi id_publish = ?', [req.params.id_publish], (err, rows) => {

    if(!err) {
      res.redirect('/data/data-publikasi');
    } else {
    console.log(err);
    }
    console.log('The data from user table: \n', rows);

  });
};

// Delete User
exports.delete_penduduk = (req, res) => {

  // Delete a record

  // User the connection
  connection.query('DELETE FROM penduduk nik = ?', [req.params.nik], (err, rows) => {

    if(!err) {
      res.redirect('/data/data-penduduk');
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);

  });

};

// // Delete User
// exports.delete_pengguna = (req, res) => {

//   var user_id = req.params.user_id
//   // User the connection
//   var query = `DELETE FROM admin_login WHERE user_id = "${user_id}"`;
//   // connection.query('DELETE FROM admin_login WHERE user_id = ?', [req.params.user_id], (err, row

//   database.query(query, function(error, data){
//     if(error){
//       throw error;
//     }
//     else
//     {
//       res.redirect("/data")
//     }
//   });
// };


// Edit publikasi
exports.edit_publikasi = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM publikasi WHERE id_publish = ?', [req.params.id_publish], (err, rows) => {
    if (!err) {
      res.render('data-publikasi', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

// Update publikasi
exports.update_publikasi = (req, res) => {
  const { file_article, judul_publish, tanggal_terbit, id_publish} = req.body;
  // User the connection
  connection.query('UPDATE user SET file_article = ?, judul_publish = ?, tanggal_terbit = ? WHERE id_publish = ?', [file_article, judul_publish, tanggal_terbit, req.params.id_publish], (err, rows) => {

    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE id_publish = ?', [req.params.id_publish], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('data-publikasi', { rows, alert: `${judul_publish} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

