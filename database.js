const mysql = require('mysql');
require('dotenv').config();

const connection  = mysql.createConnection({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(function(error){
    if(error)
    {
        throw error; 
    }
    else{
        console.log('Mysql is connected succesfully.');
    }
});

module.exports = connection; 