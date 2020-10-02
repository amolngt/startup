const router = require('express').Router();
const controller= require("../controllers/login")

router.route('/checkuser').post(controller.login)

module.exports = router;