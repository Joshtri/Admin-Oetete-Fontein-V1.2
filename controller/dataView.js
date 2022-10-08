const mysql = require("mysql");

//Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


//View data
exports.view_keluarga = (req, res) => {
 
    //connect db.
    pool.getConnection((err, connection) => {
      if (err) throw err; //NOT CONNECTED.
      console.log(`Connected as ID ` + connection.threadId);
      
      //show data
      connection.query('SELECT * FROM keluarga', (err,rows)=>{
          //when done with the connection, release it. 
          connection.release();
  
          if(!err){
              res.render("data-pendidikan",{rows});
          }
          else{
              console.log(err);
          }
          console.log('The data from user table: \n', rows);
  
      });
  
    });
  };