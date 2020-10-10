'use strict'

let category={}
const db = require('../model/index')
const Categorymodel = db.category

category.get=(req, res)=>{
    Categorymodel.findAll({
        where:{is_active:1}
    })
    .then(category=> res.json(category))
    .catch(err=> res.status(400).json('Error'+ err));
}
category.add=(req, res)=>{
    const name= req.body.category_name;
    const description= req.body.category_description;
    const add_data={
        name,
        description
    }   
    Categorymodel.create(add_data)
    .then(()=> res.json('Category added'))
    .catch(err=> res.status(400).json('Error'+ err));
}

category.get_by_id=(req, res)=>{
    const id= req.params.id;
    Categorymodel.findByPk(parseInt(id))
    .then((category)=> {
        res.json(category)
    }
    ).catch(err=> res.status(400).json('Error'+ err));
}
category.delete=(req, res)=>{
    const id= parseInt(req.params.id)
    Categorymodel.deactivate(id)
    .then(()=> res.json('Category deleted'))
    .catch(err=> res.status(400).json('Error'+ err));
}

category.update=(req, res)=>{
    const id= parseInt(req.params.id)
    category.name= req.body.category_name;
    category.description= req.body.category_description;
    category.updatedAt= Date.now()
    Categorymodel.update(category, {
        where: { id: id }
    }).then((num)=>{
        if (num == 1) {
            res.json('Category updated')
        }else{
            res.status(400).json('Cant update '+ id)
        }
    } 
    ).catch(err=> res.status(400).json('Error'+ err))
}
module.exports= category

