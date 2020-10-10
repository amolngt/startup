import React, { useState, useEffect } from 'react';
import Product from './Product';
import {Link} from "react-router-dom"
import * as constants from "../../constants"
import axios from 'axios';



const AllProducts=() =>{
  const [products, setProducts]= useState([])
  useEffect(()=>{
    getProducts()
  },[])

  const getProducts=()=>{
    axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('auth')
    axios.get(constants.LOCAL+'product').then(response=>{
      if(response.data.length >0){
        setProducts(response.data)
      }
    }).catch(error=>{
        throw error;
    })
  }
  const deleteProduct =(id)=>{
    if(id){
      axios.delete(constants.LOCAL+'product/'+id).then(response=>{
      }).catch(error=>{
        throw error;
      })
      const cats= products.filter(e=> e.id !== id)
      setProducts(cats)
    }else{
      throw new Error("id not found")
    }
}
return (
<div className="main">
<div className="p-4">
  <h4 className="post_heading">All Products</h4>
  <Link className="common_btn common_btn_default" to="/addproduct" style={{float:"right",padding: "7px 14px",marginBottom: "15px"}}>Add Product</Link>
  <table className="table border shadow">
      <thead>
        <tr>
          <th scope="col">#</th>
         
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Sub-Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      {
        products.map((product,index)=>(
          <tr key={product.id}>
            <Product cat={product} index={index} deleteProduct={deleteProduct}/>
          </tr>
        ))
      }
      </tbody>
    </table>
    </div>
</div>
);
}
export default AllProducts