import React from 'react';
import { useHistory} from "react-router-dom"
const Nav=()=>{
  let history= useHistory()
  const logout=()=>{
    localStorage.removeItem('auth');
    history.push('/');
  }
  return(
  <div className="navbar">
   <button className="common_btn common_btn_default" onClick={()=>logout()}>Logout</button>
  </div>
  )
}

export default Nav;