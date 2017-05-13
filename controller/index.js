var express = require('express'),
router = express.Router();
// router.get('/',function(req,res){
//    res.send('main controller');
// });
router.use('/signup',require('./signup'));
router.use('/login',require('./login'));
router.use('/checklogin',require('./checklogin'));
router.use('/logout',require('./logout'));
router.use('/deletecard',require('./deletecard'));
router.use('/getDataById',require('./getDataById'));
router.use('/updatecard',require('./updatecard'));
// router.use('/updatecard',require('./updatecard'));
//router.use('/',require('./auth'));
router.use('/addcard',require('./auth'),require('./addcard'));
//router.use('/',require('./logout'));
router.use('/getData',require('./auth'),require('./getData'));
router.use('/deletecard',require('./deletecard'));



//router.use('/',require('./addcard'))
module.exports = router;
