import React ,{ useState,useEffect } from 'react';
import * as constants from "../../constants"
import { useHistory} from "react-router-dom"
import axios from 'axios';
const AddSubCategory =()=>{
  let history= useHistory()
  const [subcategory, setSubCategory]= useState({
      category_id:0,
      subcategory_name:"",
      subcategory_description:""
  })

  const {category_id,subcategory_name, subcategory_description}= subcategory
  const onInputChange=(e)=>{
      setSubCategory({ ...subcategory, [e.target.name]: e.target.value })
  }

  const [allcategories, setallcats]= useState([])
  useEffect(()=>{
    const getCategories=()=>{
      axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('auth')
      axios.get(constants.LOCAL+'category').then(response=>{
        if(response.data.length >0){
          setSubCategory({category_id: response.data.reverse()[0].id, subcategory_name,subcategory_description})
          setallcats(response.data.reverse())
        }
      }).catch(error=>{
          throw error;
      })
    }
    getCategories()
  },[subcategory_name,subcategory_description])
 
  const onSubmit=(e)=>{
      e.preventDefault();
      axios.post(constants.LOCAL+'subcategory/add',subcategory).then(response=>{
        history.push('/allsubcategories');
      }).catch(error=>{
          throw error;
      })
  }
  return(
      <div className="main">
      <div className="w-50 p-4">
      <h4 className="post_heading">Add Sub Category</h4>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          Select Category
            <select
              type="text"
              className="form-control form-control-lg"
              name="category_id"
              value={category_id}
              onChange={e => onInputChange(e)}>
                {
                  allcategories.map(cats=> <option key={cats.id} value={cats.id}>{cats.name} </option>)
                }
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter category"
              name="subcategory_name"
              value={subcategory_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter category description"
              name="subcategory_description"
              value={subcategory_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddSubCategory;