var express = require('express');
var router = express.Router();

var database  = require('../database')

/* GET home page. */
router.get('/main-admin', function (req, res, next) {
  res.render('main-admin');
});

//GET Publikasi
// router.get('/publikasi',function(req,res,next){
//   res.render('publikasi');
// });


// GET data-kbli
router.get('/data-umkm', function (req, res, next) {
  res.render('data-umkm');
});

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express', session : req.session });
});

router.post('/main-admin', function(request, response, next){

    var user_name = request.body.user_name;

    var user_password = request.body.user_password;

    if(user_name && user_password)
    {
        query = `SELECT * FROM admin_login 
        WHERE user_name = "${user_name}"`;

        database.query(query, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].user_password == user_password)
                    {
                        request.session.user_id = data[count].user_id;

                        response.redirect("/");
                    }
                    else
                    {
                        response.send('Incorrect Password');
                    }
                }
            }
            else
            {
                response.send('Incorrect Email Address');
            }
            response.end();
        });
    }
    else
    {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }

});

router.get('/logout', function(request, response, next){

    request.session.destroy();

    response.redirect("/");

});

module.exports = router;
