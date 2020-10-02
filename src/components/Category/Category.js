import React from 'react';
import { Link } from 'react-router-dom';

const Category =({cat,index, deleteCategory})=>{
  return (
    <React.Fragment>
      <th scope="row">{index+1}</th>
      <td>{cat.name}</td>
      <td>{cat.description}</td>
      <td>
        <Link className="common_btn common_btn_default" to={`/editcategory/${cat.id}`}>Edit</Link> &nbsp;
        <button className="common_btn common_btn_default" onClick={()=>deleteCategory(cat.id)} to="">Delete</button>
      </td>
    </React.Fragment>
  );
}
export default Category