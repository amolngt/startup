'use strict'

let products={}
const db = require('../model/index')
const Productsmodel = db.product

products.get=(req, res)=>{
    Productsmodel.get_allproducts()
    .then(products=> res.json(products))
    .catch(err=> res.status(400).json('Error'+ err));
}
products.add=(req, res)=>{
    const {name, description, image,price, category_id, subcategory_id}= req.body;
   
    const add_data={
        name, description, image,price, category_id, subcategory_id
    }
    Productsmodel.create(add_data)
    .then(()=> res.json('products added'))
    .catch(err=> res.status(400).json('Error'+ err));
}

products.get_by_id=(req, res)=>{
    const id= req.params.id;
    Productsmodel.findByPk(parseInt(id))
    .then((products)=> {
        res.json(products)
    }
    ).catch(err=> res.status(400).json('Error'+ err));
}
products.delete=(req, res)=>{
    const id= parseInt(req.params.id)
    Productsmodel.deactivate(id)
    .then(()=> {
        res.json('products deleted')
    })
    .catch(err=> res.status(400).json('Error'+ err));
}

products.update=(req, res)=>{
    const id= parseInt(req.params.id)
    let product={}
    product.name= req.body.name;
    product.description= req.body.description;
    product.image= req.body.image;
    product.price= req.body.price;
    product.category_id= req.body.category_id;
    product.subcategory_id= req.body.subcategory_id;
    product.updatedAt= Date.now()
    Productsmodel.update(product, {
        where: { id: id }
    }).then((num)=>{
        if (num == 1) {
            res.json('Product updated')
        }else{
            res.status(400).json('Cant update '+ id)
        }
    } 
    ).catch(err=> res.status(400).json('Error'+ err))
}
module.exports= products

