const router = require('express').Router();
const validateToken = require('./helper/utils').validateToken;
const controller= require('../controllers/subcategory')

router.route('/').get(validateToken, controller.get)

router.route('/get_by_category_id/:id').get(validateToken, controller.get_by_category_id)

router.route('/add').post(validateToken,controller.add)

router.route('/:id').get(validateToken,controller.get_by_id)

router.route('/:id').delete(validateToken,controller.delete)

router.route('/update/:id').post(validateToken,controller.update)
module.exports = router;