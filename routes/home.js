var express = require('express');
var router = express.Router();


//*******************************************************//
//                  HOME (GET)                     //
//*******************************************************//
/* GET */
router.get('/', function(req, res, next) {
    //let error_message = req.flash('error')[0];
    //res.locals.error_message = error_message;
    res.render('homeMain');
});

module.exports = router;