import React ,{ useState } from 'react';
// import DatePicker from 'react-datepicker';
import * as constants from "../../constants"
import { useHistory} from "react-router-dom"
// import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
const AddCategory =()=>{

  let history= useHistory()
    const [category, setCategory]= useState({
        category_name:"",
        category_description:""
    })
  const { category_name, category_description}= category
  const onInputChange=(e)=>{
    setCategory({ ...category, [e.target.name]: e.target.value })
  }
  const onSubmit=(e)=>{
      e.preventDefault();
      axios.post(constants.LOCAL+'category/add',category).then(response=>{
        history.push('/allcategories');
      }).catch(error=>{
          throw error;
      })
  }
  return(
      <div className="main">
      <div className="w-50 p-4">
      <h4 className="post_heading">Add Category</h4>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter category"
              name="category_name"
              value={category_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter category description"
              name="category_description"
              value={category_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddCategory;