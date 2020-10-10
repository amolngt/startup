import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends Component{
  componentDidMount(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
  }
  render(){
    return(
    <div className="sidenav">
       <h1 className="main_heading">Startup</h1>
       <Link className="btn" to="/home">Home</Link>
      <button className="dropdown-btn">Category 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-container">
        <Link className="btn" to="/allcategories">Category</Link>
        <Link className="btn" to="/allsubcategories">Sub-Category</Link>
      </div>
      <Link className="btn" to="/allproducts">Product</Link>
      <a href="#about">Orders</a>
      <a href="#about">Customers</a>
    </div>
  )
}}

export default Sidebar;