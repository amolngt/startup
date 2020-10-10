import React, { useState, useEffect } from 'react';
import * as constants from "../constants"
import axios from 'axios';


const Home=()=>{
  let [counts, setCounts]= useState()
  useEffect(()=>{
    get_all_counts()
  },[])

  const get_all_counts=()=>{
    axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('auth')
    axios.get(constants.LOCAL+'home').then(response=>{
      if(response.data.length >0){
        setCounts(response.data)
      }
    }).catch(error=>{
        throw error;
    })
  }
  if (!counts) {
    return <span>Loading...</span>;
  }
  return(
    <div className="main">
        <div className="w-50 p-4">
        <h4 className="post_heading">This is home page</h4>
        <p>Some random text..</p>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <h3>Total categories</h3>
              <p>{counts[0].category}</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Total subcategories</h3>
              <p>{counts[1].category}</p>
            </div>
          </div>
  
  <div className="column">
    <div className="card">
      <h3>Total products</h3>
      <p>{counts[2].category}</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>Total orders</h3>
      <p>0</p>
    </div>
  </div>
</div>
  </div>
  )
}

export default Home;