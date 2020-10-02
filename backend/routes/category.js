const router = require('express').Router();

const validateToken = require('./helper/utils').validateToken;
const controller= require('../controllers/category')
router.route('/').get(validateToken, controller.get)

router.route('/add').post(controller.add)

router.route('/:id').get(validateToken,controller.get_by_id)

router.route('/:id').delete(controller.delete)

router.route('/update/:id').post(controller.update)
module.exports = router;