import React, { useState, useEffect } from 'react';
import Category from './Category';
import {Link} from "react-router-dom"
import * as constants from "../../constants"
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = "Bearer "+JSON.parse(localStorage.getItem('auth'))

const AllCategories=() =>{
  const [categories, setCats]= useState([])
  useEffect(()=>{
    getCategories()
  },[])

  const getCategories=()=>{
    
    axios.get(constants.LOCAL+'category').then(response=>{
      if(response.data.length >0){
        setCats(response.data.reverse())
      }
    }).catch(error=>{
        throw error;
    })
  }
  const deleteCategory=(id)=>{
    if(id){
      axios.delete(constants.LOCAL+'category/'+id).then(response=>{
      }).catch(error=>{
        throw error;
      })
      const cats= categories.filter(e=> e.id !== id)
      setCats(cats)
    }else{
      throw new Error("id not found")
    }
}
return (
<div className="main">
<div className="p-4">
  <h4 className="post_heading">All Categories</h4>
  <Link className="common_btn common_btn_default" to="/addcategory" style={{float:"right",padding: "7px 14px",marginBottom: "15px"}}>Add Category</Link>
  <table className="table border shadow">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      {
        categories.map((category,index)=>(
          <tr key={category.id}>
            <Category cat={category} index={index} deleteCategory={deleteCategory}/>
          </tr>
        ))
      }
      </tbody>
    </table>
    </div>
</div>
);
}
export default AllCategories