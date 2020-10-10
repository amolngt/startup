import React ,{ useState,useEffect } from 'react';
import * as constants from "../../constants"
import { useHistory} from "react-router-dom"
import axios from 'axios';
const AddProduct =()=>{
  axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('auth')
  let history= useHistory()
  const [product, setProduct]= useState({
      name:"",
      description:"",
      image:"",
      price:"",
      category_id:0,
      subcategory_id:0
  })

  const {name,description,image,price,category_id,subcategory_id}= product
  const onInputChange=(e)=>{
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const [allcategories, setallcats]= useState([])
  const [allsubcategories, setallSubcats]= useState([])
  useEffect(()=>{
    const getCategories=()=>{
    
      axios.get(constants.LOCAL+'category').then(response=>{
        if(response.data.length >0){
          // setCategory({category_id: response.data.reverse()[0].id,})
          setallcats(response.data.reverse())
        }
      }).catch(error=>{
          throw error;
      })
    }
    getCategories()
  },[])

  useEffect(()=>{
    if(category_id){
      const getSubCategories=()=>{
      
        axios.get(constants.LOCAL+'subcategory/get_by_category_id/'+category_id).then(response=>{
          if(response.data.length >0){
            setallSubcats(response.data.reverse())
          }
        }).catch(error=>{
            throw error;
        })
      }
      getSubCategories(category_id)
    }
  },[category_id])
 
  const onSubmit=(e)=>{
      e.preventDefault();
      console.log(product)
      axios.post(constants.LOCAL+'product/add',product).then(response=>{
        history.push('/allproducts');
      }).catch(error=>{
          throw error;
      })
  }
  return(
      <div className="main">
      <div className="w-50 p-4">
      <h4 className="post_heading">Add Product</h4>
        <form onSubmit={e => onSubmit(e)}>
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Select image"
              name="image"
              value={image}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <select
              type="text"
              className="form-control form-control-lg"
              name="category_id"
              value={category_id}
              onChange={e => onInputChange(e)}>
                 <option value="">Select category</option>
                {
                  allcategories.map(cats=> <option key={cats.id} value={cats.id}>{cats.name} </option>)
                }
            </select>
          </div>
          <div className="form-group">
            <select
              type="text"
              className="form-control form-control-lg"
              name="subcategory_id"
              value={subcategory_id}
              onChange={e => onInputChange(e)}>
                <option value="">Select subcategory</option>
                {
                  allsubcategories.map(cats=> <option key={cats.id} value={cats.id}>{cats.name} </option>)
                }
            </select>
          </div>
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct;