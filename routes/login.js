var express = require('express');
var router = express.Router();
var passport = require('passport');

//*******************************************************//
//                  LOGIN (POST/GET)                     //
//*******************************************************//
/* GET */
// router.get('/login', function(req, res, next) {
//   // Set a flash message by passing the key, followed by the value, to req.flash().
//   let error_message = req.flash('error')[0];
//   res.locals.error_message = error_message;
//   res.render('login', {title: 'Login'});
// });

/* POST */

router.post('/login', passport.authenticate(
    'local', {
        successRedirect: '/userhomepage',
        failureRedirect: '/',
        failureFlash: true,
    }));

module.exports = router;