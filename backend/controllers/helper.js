let helper={}
const db = require('../model/index')
const Categorymodel = db.category
const Subcategorymodel = db.subcategory

// helper.get_all_categories=(req,res)=>{
//     Subcategorymodel.get_all_categories()
//     .then(subcategory=> res.json(subcategory))
//     .catch(err=> res.status(400).json('Error'+ err));
// }

exports.default=helper;