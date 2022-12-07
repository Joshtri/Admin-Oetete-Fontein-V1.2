var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const UserController = require('../controller/dataController');
const { isLoggedIn } = require('../middlewares/auth');

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





// There is 7 router

//DONE
router.get('/statistik/umur', isLoggedIn,  function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                
            ],
            data: [90, 60, 45, 80, 100, 40, 25],
            hoverOffset: 4,
        },
    );
});


router.get('/statistik/status', isLoggedIn,  function (req, res, next) {
    // konek
        // data dari tabel
    
        pool.getConnection((err, connection) => {
            if (err) throw err; //NOT CONNECTED.
            console.log(`Connected as ID ` + connection.threadId);
    
                //show data
                // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
    
    
          
            connection.query("SELECT SUM(status_perkawinan = 'Belum Menikah') AS TotalBelumMenikah FROM penduduk", (err, rows1) => {
                    //when done with the connection, release it.
                connection.query("SELECT SUM(status_perkawinan = 'Sudah Menikah') AS TotalSudahMenikah FROM penduduk", (err, rows2) => {
                        //when done with the connection, release it.
                    connection.query("SELECT SUM(status_perkawinan = 'Cerai Hidup') AS TotalCeraiHidup FROM penduduk", (err, rows3) => {
                            //when done with the connection, release it.
                        connection.query("SELECT SUM(status_perkawinan = 'Cerai Mati') AS TotalCeraiMati FROM penduduk", (err, rows4) => {
                                //when done with the connection, release it.
    
                            if (!err) {
                                res.json(
                                    {
                                        label: ["My First dataset"],
                                        backgroundColor: [
                                            "rgb(128,0,0)",
                                            "rgb(139,0,0)",
                                            "rgb(165,42,42)",
                                        ],
                                        data: [rows1[0].TotalBelumMenikah, rows2[0].TotalSudahMenikah, rows3[0].TotalCeraiHidup, rows4[0].TotalCeraiMati],
                                        hoverOffset: 4,
                                    },  
                                );
                            } else {
                                console.log(err);
                            }
                            // console.log("The data from user table: \n",  rows1, rows2, rows3, rows4);
                    
                        }); 
                    });
                });
            });
        });
});


router.get('/statistik/pendidikan', isLoggedIn,  function (req, res, next) {
  // konek
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

// data dari tabel
connection.query("SELECT SUM(pendidikan = 'Belum/Tidak Pernah Sekolah') AS TotalBelumSekolah FROM penduduk", (err, rows1) => {
    //when done with the connection, release it.
    connection.query("SELECT SUM(pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A') AS TotalBelumTamatSD FROM penduduk", (err, rows2) => {
        //when done with the connection, release it.
        connection.query("SELECT SUM(pendidikan = 'SD/SDLB/MI/Paket A') AS TotalSD FROM penduduk", (err, rows3) => {
            //when done with the connection, release it.
            connection.query("SELECT SUM(pendidikan = 'SMP/SMPLB/MTs/Paket B') AS TotalSMP FROM penduduk", (err, rows4) => {
                //when done with the connection, release it.
                connection.query("SELECT SUM(pendidikan = 'SMA/SMLB/MA/SMK/MAK/Paket C') AS TotalSMA FROM penduduk", (err, rows5) => {
                    //when done with the connection, release it.
                    connection.query("SELECT SUM(pendidikan = 'DI/DII/DIII') AS TotalD FROM penduduk", (err, rows6) => {
                        //when done with the connection, release it.
                        connection.query("SELECT SUM(pendidikan = 'DIV/S1') AS TotalS1 FROM penduduk", (err, rows7) => {
                                //when done with the connection, release it.
                            connection.query("SELECT SUM(pendidikan = 'S2') AS TotalS2 FROM penduduk", (err, rows8) => {
                                    //when done with the connection, release it.
                                connection.query("SELECT SUM(pendidikan = 'S3') AS TotalS3 FROM penduduk", (err, rows9) => {
                                            //when done with the connection, release it.

                                            if (!err) {
                                                res.json(
                                                    {
                                                        label: ["My First dataset"],
                                                        backgroundColor: [
                                                            "rgb(128,0,0)",
                                                            "rgb(139,0,0)",
                                                            "rgb(165,42,42)",
                                                        ],
                                                        data: [rows1[0].TotalBelumSekolah, rows2[0].TotalBelumTamatSD, rows3[0].TotalSD, rows4[0].TotalSMP, rows5[0].TotalSMA
                                                    , rows6[0].TotalD, rows7[0].TotalS1, rows8[0].TotalS2, rows9[0].TotalS3],
                                                        hoverOffset: 9,
                                                    },
                                                );
                                            } else {
                                                console.log(err);
                                            }
                                            // console.log("The data from user table: \n",  rows1, rows2, rows3, rows4, rows5, rows6, rows7, rows8, rows9);
                    
                                });
                            }); 
                        });                             
                    }); 
                }); 
            }); 
        });
    });
});
});
});

//
router.get('/statistik/jeniskelamin', isLoggedIn,  function (req, res, next) {
// konek
    // data dari tabel

    pool.getConnection((err, connection) => {
        if (err) throw err; //NOT CONNECTED.
        console.log(`Connected as ID ` + connection.threadId);

        //show data
        // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk

        connection.query("SELECT SUM(jenis_kelamin ='laki-laki') AS Total_laki FROM penduduk", (err, rows1) => {
                //when done with the connection, release it.
            connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows2) => {
                    //when done with the connection, release it.

                        if (!err) {
                            res.json(
                                {
                                    label: ["My First dataset"],
                                    backgroundColor: [
                                        "rgb(128,0,0)",
                                        "rgb(139,0,0)",
                                        "rgb(165,42,42)",
                                    ],
                                    data: [rows1[0].Total_laki, rows2[0].Total_perempuan],
                                    hoverOffset: 4,
                                },
                            );
                        } else {
                            console.log(err);
                        }
                        // console.log("The data from user table: \n",  rows2, rows1);
            });
        });
    });
});


//
router.get('/statistik/umkm', isLoggedIn,  function (req, res, next) {
    // konek
        // data dari tabel
    
        pool.getConnection((err, connection) => {
          if (err) throw err; //NOT CONNECTED.
          console.log(`Connected as ID ` + connection.threadId);
  
          //show data
          // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
  
      connection.query("SELECT COUNT(id_Usaha) AS Tmikro from umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows1) => {
          //when done with the connection, release it.
          connection.query("SELECT COUNT(id_Usaha) AS Tmenengah from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, rows2) => {
              //when done with the connection, release it.
              connection.query("SELECT COUNT(id_Usaha) AS Tkecil from umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, rows3) => {
                  //when done with the connection, release it.
              
 
  
                          if (!err) {
                              res.json(
                                  {
                                      label: ["My First dataset"],
                                      backgroundColor: [
                                      "rgb(128,0,0)",
                                      "rgb(139,0,0)",
                                      "rgb(165,42,42)",],
                                      data: [rows1[0].Tmikro, rows2[0].Tmenengah, rows3[0].Tkecil],
                                      hoverOffset: 3,},
                              );
                          } else {
                              console.log(err);
                          }
                          // console.log("The data from user table: \n", rows1, rows2, rows3);
              });
          });
      });
  });
});


router.get('/statistik/pekerjaan', isLoggedIn,  function (req, res, next) {
    // konek
    pool.getConnection((err, connection) => {
        if (err) throw err; //NOT CONNECTED.
        console.log(`Connected as ID ` + connection.threadId);
    
        // data dari tabel
        connection.query("SELECT SUM(pekerjaan = 'Belum Bekerja') AS TotalBelumBekerja FROM penduduk", (err, rows1) => {
            //when done with the connection, release it.
            connection.query("SELECT SUM(pekerjaan = 'Mengurus Rumah Tangga') AS TotalMengurusRumahTangga FROM penduduk", (err, rows2) => {
                //when done with the connection, release it.
                connection.query("SELECT SUM(pekerjaan = 'Pelajar/Mahasiswa') AS TotalPelajar FROM penduduk", (err, rows3) => {
                    //when done with the connection, release it.
                    connection.query("SELECT SUM(pekerjaan = 'Pensiunan') AS TotalPensiunan FROM penduduk", (err, rows4) => {
                        //when done with the connection, release it.
                        connection.query("SELECT SUM(pekerjaan = 'PNS') AS TotalPNS FROM penduduk", (err, rows5) => {
                            //when done with the connection, release it.
                            connection.query("SELECT SUM(pekerjaan = 'POLRI') AS TotalPOLRI FROM penduduk", (err, rows6) => {
                                //when done with the connection, release it.
                                connection.query("SELECT SUM(pekerjaan = 'TNI') AS TotalTNI FROM penduduk", (err, rows7) => {
                                        //when done with the connection, release it.
                                    connection.query("SELECT SUM(pekerjaan = 'WIRASWASTA') AS TotalWiraswasta FROM penduduk", (err, rows8) => {
                                            //when done with the connection, release it.
                                        connection.query("SELECT SUM(pekerjaan = 'SWASTA') AS TotalSwasta FROM penduduk", (err, rows9) => {
                                                    //when done with the connection, release it.
                                                connection.query("SELECT SUM(pekerjaan = 'Pegawai BUMN') AS TotalBUMN FROM penduduk", (err, rows10) => {
                                                        //when done with the connection, release it.
                                                    connection.query("SELECT SUM(pekerjaan = 'Pekerja Lepas') AS TotalPekerjaLepas FROM penduduk", (err, rows11) => {
                                                            //when done with the connection, release it.
                                                        connection.query("SELECT SUM(pekerjaan = 'Petani/Peternak/Pekebun') AS TotalPetaniPeternakPekebun FROM penduduk", (err, rows12) => {
                                                            //when done with the connection, release it.
                                                            connection.query("SELECT SUM(pekerjaan = 'Nelayan') AS TotalNelayan FROM penduduk", (err, rows13) => {
                                                                //when done with the connection, release it.
                                                                connection.query("SELECT SUM(pekerjaan = 'Industri') AS TotalIndustri FROM penduduk", (err, rows14) => {
                                                                    //when done with the connection, release it.
                                                                        if (!err) {
                                                                            res.json(
                                                                                {
                                                                                    label: ["My First dataset"],
                                                                                    backgroundColor: [
                                                                                        "rgb(128,0,0)",
                                                                                        "rgb(139,0,0)",
                                                                                        "rgb(165,42,42)",
                                                                                    ],
                                                                                    data: [rows1[0].TotalBelumBekerja, rows2[0].TotalMengurusRumahTangga, rows3[0].TotalPelajar, rows4[0].TotalPensiunan, rows5[0].TotalPNS
                                                                                ,   rows6[0].TotalPOLRI, rows7[0].TotalTNI, rows8[0].TotalWiraswasta, rows9[0].TotalSwasta,rows10[0].TotalBUMN, rows11[0].TotalPekerjaLepas, rows12[0].TotalPetaniPeternakPekebun, rows13[0].TotalNelayan, rows14[0].TotalIndustri],
                                                                                    hoverOffset: 14,
                                                                                },
                                                                            );
                                                                        } else {
                                                                            console.log(err);
                                                                        }
                                                                        // console.log("The data from user table: \n",  rows1, rows2, rows3, rows4, rows5, rows6, rows7, rows8, rows9, rows10, rows11, rows12, rows13, rows14);
                            
                                        }); });});});});});
                                    }); 
                                });                             
                            }); 
                        }); 
                    }); 
                });
            });
        });
    });
});




router.get('/statistik-pendidikan', isLoggedIn,  function (req, res, next) {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    //show data
    /*
        CATATAN !! 
            Tiap klasifikasi klo bisa querynya dibuat berurutan berdasarkan row di views!.
    */
    //belum/tidak pernah sekolah
    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend1 FROM penduduk WHERE pendidikan = 'Belum/Tidak Pernah Sekolah'", (err, pendpria1) => {
      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend1 FROM penduduk WHERE pendidikan = 'Belum/Tidak Pernah Sekolah'", (err, pendwan1) => {
        connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend1 FROM penduduk WHERE pendidikan  = 'Belum/Tidak Pernah Sekolah'", (err, totalpend1) => {

          //Belum/Tidak Tamat SD/SDLB/MI/Paket A. 
          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend2 FROM penduduk WHERE pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'", (err, pendpria2) => {
            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend2 FROM penduduk WHERE pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'", (err, pendwan2) => {
              connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend2 FROM penduduk WHERE pendidikan  = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'", (err, totalpend2) => {

                //SD/SDLB/MI/Paket A
                connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend3 FROM penduduk WHERE pendidikan = 'SD/SDLB/MI/Paket A'", (err, pendpria3) => {
                  connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend3 FROM penduduk WHERE pendidikan = 'SD/SDLB/MI/Paket A'", (err, pendwan3) => {
                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend3 FROM penduduk WHERE pendidikan  = 'SD/SDLB/MI/Paket A'", (err, totalpend3) => {

                      //SMP/SMPLB/MTs/Paket B
                      connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend4 FROM penduduk WHERE pendidikan = 'SMP/SMPLB/MTs/Paket B'", (err, pendpria4) => {
                        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend4 FROM penduduk WHERE pendidikan = 'SMP/SMPLB/MTs/Paket B'", (err, pendwan4) => {
                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend4 FROM penduduk WHERE pendidikan  = 'SMP/SMPLB/MTs/Paket B'", (err, totalpend4) => {

                            //#SMA/SMLB/MA/SMK/MAK/paket C. 
                            connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend5 FROM penduduk WHERE pendidikan = 'SMA/SMLB/MA/SMK/MAK/paket C'", (err, pendpria5) => {
                              connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend5 FROM penduduk WHERE pendidikan = 'SMA/SMLB/MA/SMK/MAK/paket C'", (err, pendwan5) => {
                                connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend5 FROM penduduk WHERE pendidikan  = 'SMA/SMLB/MA/SMK/MAK/paket C'", (err, totalpend5) => {

                                  //#DI/DII/DIII. 
                                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend6 FROM penduduk WHERE pendidikan = 'DI/DII/DIII'", (err, pendpria6) => {
                                    connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend6 FROM penduduk WHERE pendidikan = 'DI/DII/DIII'", (err, pendwan6) => {
                                      connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend6 FROM penduduk WHERE pendidikan  = 'DI/DII/DIII'", (err, totalpend6) => {

                                        //#DIV/S1. 
                                        connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend7 FROM penduduk WHERE pendidikan = 'DIV/S1'", (err, pendpria7) => {
                                          connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend7 FROM penduduk WHERE pendidikan = 'DIV/S1'", (err, pendwan7) => {
                                            connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend7 FROM penduduk WHERE pendidikan  = 'DIV/S1'", (err, totalpend7) => {

                                              //#S2. 
                                              connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend8 FROM penduduk WHERE pendidikan = 'S2'", (err, pendpria8) => {
                                                connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend8 FROM penduduk WHERE pendidikan = 'S2'", (err, pendwan8) => {
                                                  connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend8 FROM penduduk WHERE pendidikan  = 'S2'", (err, totalpend8) => {

                                                    //#S3. 
                                                    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend9 FROM penduduk WHERE pendidikan = 'S3'", (err, pendpria9) => {
                                                      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend9 FROM penduduk WHERE pendidikan = 'S3'", (err, pendwan9) => {
                                                        connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend9 FROM penduduk WHERE pendidikan  = 'S3'", (err, totalpend9) => {

                                                          connection.release();
                                                          if(!err){
                                                            res.render("statistik-pendidikan",{pendpria1,pendwan1,totalpend1,pendpria2,pendwan2,totalpend2,pendpria3,pendwan3,totalpend3,pendpria4,pendwan4,totalpend4,pendpria5,pendwan5,totalpend5,pendpria6,pendwan6,totalpend6,pendpria7,pendwan7,totalpend7,pendpria8,pendwan8,totalpend8,pendpria9,pendwan9,totalpend9});
                                                          }
                                                          else{
                                                            console.log(err);
                                                          } 
                                                          // console.log('The data from user table: \n', pendpria1,pendwan1,totalpend1,pendpria2,pendwan2,totalpend2,pendpria3,pendwan3,totalpend3,pendpria4,pendwan4,totalpend4,pendpria5,pendwan5,totalpend5,pendpria6,pendwan6,totalpend6,pendpria7,pendwan7,totalpend7,pendpria8,pendwan8,totalpend8,pendpria9,pendwan9,totalpend9);
                                                        }); 
                                                      }); 
                                                    }); 
                                                  }); 
                                                }); 
                                              }); 
                                            }); 
                                          }); 
                                        }); 
                                      }); 
                                    }); 
                                  }); 
                                }); 
                              }); 
                            }); 
                          }); 
                        }); 
                      }); 
                    }); 
                  }); 
                }); 
              }); 
            }); 
          }); 
        }); 
      }); 
    });  
  });

});
// res.render('statistik-pendidikan');

router.get('/statistik-umur', isLoggedIn,  function (req, res, next) {
    res.render('statistik-umur');
});

router.get('/statistik-jeniskelamin', isLoggedIn,  function (req, res, next) {
      //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query("SELECT SUM(jenis_kelamin ='Laki-Laki') AS Total_laki FROM penduduk", (err, rows1) => {
      //when done with the connection, release it.
      connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows2) => {
            //when done with the connection, release it.
            connection.query("SELECT COUNT(jenis_kelamin) AS TotalJK FROM penduduk", (err, rows3) => {
              connection.release();

              if(!err){
                  res.render("statistik-jeniskelamin",{rows1, rows2,rows3});
              }
              else{
                  console.log(err);
              } 
              // console.log('The data from user table: \n', rows1, rows2,rows3);
       });
    });
    });
  });
});



router.get('/statistik-status', isLoggedIn,  function (req, res, next) {
      //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query("SELECT COUNT(jenis_kelamin) AS TotalBelumMenikah FROM penduduk WHERE status_perkawinan = 'Belum Menikah'",(err,rows1totalblmnikah)=>{
        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaBelumMenikah FROM penduduk WHERE status_perkawinan = 'Belum Menikah'",(err,rows1sec) =>{
          //when done with the connection, release it.
          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaBelumMenikah FROM penduduk WHERE status_perkawinan = 'Belum Menikah'",(err,rows1third) =>{ 
              connection. query("SELECT COUNT(jenis_kelamin) AS TotalSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'", (err,rows2totalsdhnikah)=>{
                //when done with the connection, release it. 
                connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'", (err,rows2sec)=>{
                  //when done with the connection, release it. 
                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'", (err,rows2third)=>{
                    //when done with the connection, release it. 
                    //when done with the connection, release it. 

                    //UBAH INI !!!!
                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalCeraiHidup FROM penduduk WHERE status_perkawinan = 'Cerai Hidup'", (err,rows3totalceraihidup)=>{
                      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaCeraiHidup FROM penduduk WHERE status_perkawinan = 'Cerai Hidup'", (err,rows3sec)=>{
                        //when done with the connection, release it. 
                        connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaCeraiHidup FROM penduduk WHERE status_perkawinan = 'Cerai Hidup'", (err,rows3third)=>{
                          //when done with the connection, release it. 

                          //CERAII MATII!
                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalCeraiMati FROM penduduk WHERE status_perkawinan = 'Cerai Mati'", (err,rows4totalceraimati)=>{
                            //when done with the connection, release it. 
                            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaCeraiMati FROM penduduk WHERE status_perkawinan = 'Cerai Mati'", (err,rows4sec)=>{
                              //when done with the connection, release it. 
                              connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaCeraiMati FROM penduduk WHERE status_perkawinan = 'Cerai Mati'", (err,rows4third)=>{
                                //when done with the connection, release it. 
                                connection.release();

                                if(!err){
                                    res.render("statistik-status",{rows1totalblmnikah, rows1sec,rows1third, rows2totalsdhnikah,rows2sec,rows2third, rows3totalceraihidup,rows3sec,rows3third, rows4totalceraimati, rows4sec,rows4third});
                                }
                                else{
                                    console.log(err);
                                }
                                // console.log('The data from user table: \n', rows1totalblmnikah, rows1sec, rows1third, rows2totalsdhnikah, rows2sec, rows2third, rows3totalceraihidup,rows3sec,rows3third, rows4totalceraimati, rows4sec,rows4third);
                                });
                              });
                            });
                          });
                        });
                     }); 
                  });
               });
            });
          });
      });
    });
  });
});

// res.render('statistik-status');

router.get('/statistik-umkm', isLoggedIn,  function(req,res,next){
   
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    connection.query("SELECT COUNT(id_Usaha) AS Tmikro from umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows1) => {
      //when done with the connection, release it.
      connection.query("SELECT COUNT(id_Usaha) AS Tkecil from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, rows2) => {
          //when done with the connection, release it.
          connection.query("SELECT COUNT(id_Usaha) AS Tmenengah from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar'", (err, rows3) => {
              //when done with the connection, release it.
              connection.query("SELECT COUNT(id_Usaha) AS TotalUMKM FROM umkm", (err, rows4) => {
              //when done with the connection, release it.
                //when done with the connection, release it. 
                connection.release();

                if(!err){
                    res.render("statistik-umkm",{rows1, rows2, rows3,rows4});
                }
                else{
                    console.log(err);
                } 
                // console.log('The data from user table: \n', rows1, rows2, rows3,rows4);
              });
        });
      });
    });
  });
});
// res.render('statistik-umkm');

router.get('/statistik-pekerjaan', isLoggedIn,  function (req, res, next) {
    //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    //
    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja1 FROM penduduk WHERE pekerjaan = 'Belum Bekerja'", (err,pekerjapria1)=>{
      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja1 FROM penduduk WHERE pekerjaan = 'Belum Bekerja'", (err,pekerjawanita1)=>{
        connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja1  FROM penduduk WHERE pekerjaan  = 'Belum Bekerja'", (err,totalpekerja1)=>{

          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja2 FROM penduduk WHERE pekerjaan = 'Mengurus Rumah Tangga'", (err,pekerjapria2)=>{
            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja2 FROM penduduk WHERE pekerjaan = 'Mengurus Rumah Tangga'", (err,pekerjawanita2)=>{
              connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja2  FROM penduduk WHERE pekerjaan  = 'Mengurus Rumah Tangga'", (err,totalpekerja2)=>{

                connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja3 FROM penduduk WHERE pekerjaan = 'Pelajar/Mahasiswa'", (err,pekerjapria3)=>{
                  connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja3 FROM penduduk WHERE pekerjaan = 'Pelajar/Mahasiswa'", (err,pekerjawanita3)=>{
                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja3  FROM penduduk WHERE pekerjaan  = 'Pelajar/Mahasiswa'", (err,totalpekerja3)=>{

                      connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja4 FROM penduduk WHERE pekerjaan = 'Pensiunan'", (err,pekerjapria4)=>{
                        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja4 FROM penduduk WHERE pekerjaan = 'Pensiunan'", (err,pekerjawanita4)=>{
                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja4  FROM penduduk WHERE pekerjaan  = 'Pensiunan'", (err,totalpekerja4)=>{

                            connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja5 FROM penduduk WHERE pekerjaan = 'PNS'", (err,pekerjapria5)=>{
                              connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja5 FROM penduduk WHERE pekerjaan = 'PNS'", (err,pekerjawanita5)=>{
                                connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja5  FROM penduduk WHERE pekerjaan  = 'PNS'", (err,totalpekerja5)=>{

                                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja6 FROM penduduk WHERE pekerjaan = 'POLRI'", (err,pekerjapria6)=>{
                                    connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja6 FROM penduduk WHERE pekerjaan = 'POLRI'", (err,pekerjawanita6)=>{
                                      connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja6  FROM penduduk WHERE pekerjaan  = 'POLRI'", (err,totalpekerja6)=>{

                                        connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja7 FROM penduduk WHERE pekerjaan = 'TNI'", (err,pekerjapria7)=>{
                                          connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja7 FROM penduduk WHERE pekerjaan = 'TNI'", (err,pekerjawanita7)=>{
                                            connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja7  FROM penduduk WHERE pekerjaan  = 'TNI'", (err,totalpekerja7)=>{

                                              connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja8 FROM penduduk WHERE pekerjaan = 'WIRASWASTA'", (err,pekerjapria8)=>{
                                                connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja8 FROM penduduk WHERE pekerjaan = 'WIRASWASTA'", (err,pekerjawanita8)=>{
                                                  connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja8  FROM penduduk WHERE pekerjaan  = 'WIRASWASTA'", (err,totalpekerja8)=>{

                                                    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja9 FROM penduduk WHERE pekerjaan = 'SWASTA'", (err,pekerjapria9)=>{
                                                      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja9 FROM penduduk WHERE pekerjaan = 'SWASTA'", (err,pekerjawanita9)=>{
                                                        connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja9  FROM penduduk WHERE pekerjaan  = 'SWASTA'", (err,totalpekerja9)=>{

                                                          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja10 FROM penduduk WHERE pekerjaan = 'Pegawai BUMN'", (err,pekerjapria10)=>{
                                                            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja10 FROM penduduk WHERE pekerjaan = 'Pegawai BUMN'", (err,pekerjawanita10)=>{
                                                              connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja10  FROM penduduk WHERE pekerjaan  = 'Pegawai BUMN'", (err,totalpekerja10)=>{

                                                                connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja11 FROM penduduk WHERE pekerjaan = 'Pekerja Lepas'", (err,pekerjapria11)=>{
                                                                  connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja11 FROM penduduk WHERE pekerjaan = 'Pekerja Lepas'", (err,pekerjawanita11)=>{
                                                                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja11  FROM penduduk WHERE pekerjaan  = 'Pekerja Lepas'", (err,totalpekerja11)=>{

                                                                      connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja12 FROM penduduk WHERE pekerjaan = 'Petani/peternak/pekebun'", (err,pekerjapria12)=>{
                                                                        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja12 FROM penduduk WHERE pekerjaan = 'Petani/peternak/pekebun'", (err,pekerjawanita12)=>{
                                                                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja12  FROM penduduk WHERE pekerjaan  = 'Petani/peternak/pekebun'", (err,totalpekerja12)=>{

                                                                            connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja13 FROM penduduk WHERE pekerjaan = 'Nelayan'", (err,pekerjapria13)=>{
                                                                              connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja13 FROM penduduk WHERE pekerjaan = 'Nelayan'", (err,pekerjawanita13)=>{
                                                                                connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja13  FROM penduduk WHERE pekerjaan  = 'Nelayan'", (err,totalpekerja13)=>{
                                                                                  
                                                                                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja14 FROM penduduk WHERE pekerjaan = 'Industri'", (err,pekerjapria14)=>{
                                                                                    connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja14 FROM penduduk WHERE pekerjaan = 'Industri'", (err,pekerjawanita14)=>{
                                                                                      connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja14  FROM penduduk WHERE pekerjaan  = 'Industri'", (err,totalpekerja14)=>{

                                                                                        //when done with the connection, release it. 
                                                                                        connection.release();

                                                                                        if(!err){
                                                                                            res.render("statistik-pekerjaan",{pekerjapria1,pekerjawanita1,totalpekerja1,pekerjapria2,pekerjawanita2,totalpekerja2,pekerjapria3,pekerjawanita3,totalpekerja3,pekerjapria4,pekerjawanita4,totalpekerja4,
                                                                                            pekerjapria5,pekerjawanita5,totalpekerja5,pekerjapria6,pekerjawanita6,totalpekerja6,pekerjapria7,pekerjawanita7,totalpekerja7,pekerjapria8,pekerjawanita8,totalpekerja8,
                                                                                          pekerjapria9,pekerjawanita9,totalpekerja9,pekerjapria10,pekerjawanita10,totalpekerja10,pekerjapria11,pekerjawanita11,totalpekerja11,
                                                                                        pekerjapria12,pekerjawanita12,totalpekerja12,pekerjapria13,pekerjawanita13,totalpekerja13,pekerjapria14,pekerjawanita14,totalpekerja14});
                                                                                        }
                                                                                        else{
                                                                                            console.log(err);
                                                                                        } 
                                                                                    //     console.log('The data from user table: \n',pekerjapria1,pekerjawanita1,totalpekerja1,pekerjapria2,pekerjawanita2,totalpekerja2,pekerjapria3,pekerjawanita3,totalpekerja3,pekerjapria4,pekerjawanita4,totalpekerja4,
                                                                                    //     pekerjapria5,pekerjawanita5,totalpekerja5,pekerjapria6,pekerjawanita6,totalpekerja6,pekerjapria7,pekerjawanita7,totalpekerja7,pekerjapria8,pekerjawanita8,totalpekerja8,
                                                                                    //   pekerjapria9,pekerjawanita9,totalpekerja9,pekerjapria10,pekerjawanita10,totalpekerja10,pekerjapria11,pekerjawanita11,totalpekerja11,
                                                                                    // pekerjapria12,pekerjawanita12,totalpekerja12,pekerjapria13,pekerjawanita13,totalpekerja13,pekerjapria14,pekerjawanita14,totalpekerja14 );
                                                                                      });
                                                                                    });
                                                                                  });
                                                                                });
                                                                              });
                                                                            });
                                                                          });
                                                                        });
                                                                      });
                                                                    });
                                                                  });
                                                                });
                                                              });
                                                            });
                                                          });
                                                        });
                                                      });
                                                    });
                                                  });
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// res.render('statistik-pekerjaan');
module.exports = router;