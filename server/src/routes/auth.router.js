const router = require('express').Router();
const authController = require('../controllers/auth');
// const isAuth = require('../../middlewares/isAuth');

router.post('/reg', authController.signUp);
router.post('/login', authController.signIn);
// router.get('/profile', isAuth, authController.getUserInfo);

module.exports = router;
