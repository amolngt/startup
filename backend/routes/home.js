const router = require('express').Router();
const validateToken = require('./helper/utils').validateToken;
const controller= require('../controllers/home')

router.route('/').get(validateToken, controller.get)

module.exports = router;