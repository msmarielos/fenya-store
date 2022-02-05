const router = require('express').Router();
const authController = require('../../controllers/auth');
// isAuth = require('../../middlewares/isAuth');

router.post('/reg', authController.signUp);
router.post('/login', authController.signIn);

module.exports = router;
