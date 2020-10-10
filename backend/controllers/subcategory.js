'use strict'

let subcategory={}
const db = require('../model/index')
const Subcategorymodel = db.subcategory
// const helper= require('./helper')

subcategory.get=(req, res)=>{
    Subcategorymodel.get_all_subcategories()
    .then(subcategory=> {
        res.json(subcategory)
    }).catch(err=> res.status(400).json('Error'+ err));
}

subcategory.get_by_category_id=(req,res)=>{

    const id= req.params.id;
    Subcategorymodel.get_by_category_id(parseInt(id))
    .then((subcategory)=> {
        res.json(subcategory)
    }
    ).catch(err=> res.status(400).json('Error'+ err));
}
subcategory.add=(req, res)=>{
    const name= req.body.subcategory_name;
    const description= req.body.subcategory_description;
    const category_id= req.body.category_id;
    const add_data={
        name,
        description,
        category_id
    }
    Subcategorymodel.create(add_data)
    .then(()=> res.json('Subcategory added'))
    .catch(err=> res.status(400).json('Error'+ err));
}

subcategory.get_by_id=(req, res)=>{
    const id= req.params.id;
    Subcategorymodel.findByPk(parseInt(id))
    .then((subcategory)=> {
        res.json(subcategory)
    }
    ).catch(err=> res.status(400).json('Error'+ err));
}
subcategory.delete=(req, res)=>{
    const id= parseInt(req.params.id)
    Subcategorymodel.deactivate(id)
    .then(()=> res.json('Subcategory deleted'))
    .catch(err=> res.status(400).json('Error'+ err));
}

subcategory.update=(req, res)=>{
    const id= parseInt(req.params.id)
    subcategory.name= req.body.subcategory_name;
    subcategory.description= req.body.subcategory_description;
    subcategory.category_id= req.body.category_id
    subcategory.updatedAt= Date.now()
    Subcategorymodel.update(subcategory, {
        where: { id: id }
    }).then((num)=>{
        if (num == 1) {
            res.json('Subcategory updated')
        }else{
            res.status(400).json('Cant update '+ id)
        }
    } 
    ).catch(err=> res.status(400).json('Error'+ err))
}
module.exports= subcategory

