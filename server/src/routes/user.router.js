const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/users', userController.getUser);
router.put('/users', userController.updateUser);

module.exports = router;
