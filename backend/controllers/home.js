
let home={}
const db = require('../model/index')
const Homemodel = db.category

home.get=(req, res)=>{
    Homemodel.get_all_counts()
    .then(data=> res.json(data))
    .catch(err=> res.status(400).json('Error'+ err));
}

module.exports= home