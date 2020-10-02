import React ,{ useState, useEffect } from 'react';
import * as constants from "../../constants"
import { useHistory, useParams} from "react-router-dom"
import axios from 'axios';
const EditCategory =()=>{
  const {id}= useParams()
  const history= useHistory()
    const [category, setCategory]= useState({
        category_name:"",
        category_description:""
    })
    const { category_name, category_description}= category
    
   const onInputChange=(e)=>{
        setCategory({ ...category, [e.target.name]: e.target.value })
    }
    useEffect(()=>{
       axios.get(constants.LOCAL+"category/"+id).then(response=>{
        setCategory({
              category_name: response.data.name,
              category_description: response.data.description
            })
        })
    },[id])

    const onSubmit=(e)=>{
        e.preventDefault();
        axios.post(constants.LOCAL+'category/update/'+id,category).then(response=>{
          history.push('/allcategories');
        }).catch(error=>{
            throw error;
        })
    }
    return(
      <div className="main">
        <div className="w-50 p-4">
        <h4 className="post_heading">Edit Category</h4>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="category"
                name="category_name"
                value={category_name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="category description"
                name="category_description"
                value={category_description}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Edit</button>
          </form>
        </div>
      </div>
    )
}

export default EditCategory;