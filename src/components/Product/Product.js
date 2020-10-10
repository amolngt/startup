import React from 'react';
import { Link } from 'react-router-dom';

const Category =({cat,index, deleteProduct})=>{
  return (
    <React.Fragment>
      <th scope="row">{index+1}</th>
      <td>{cat.name}</td>
      <td>{cat.description}</td>
      <td>{cat.image}</td>
      <td>{cat.price}</td>
      <td>{cat.cat_name}</td>
      <td>{cat.subcat_name}</td>
      <td>
        <Link className="common_btn common_btn_default" to={`/editproduct/${cat.id}`}>Edit</Link> &nbsp;
        <button className="common_btn common_btn_default" onClick={()=>deleteProduct(cat.id)} to="">Delete</button>
      </td>
    </React.Fragment>
  );
}
export default Category