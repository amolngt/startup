import React from 'react';
import Nav from './layout/Nav'
import Sidebar from './layout/Sidebar';
import { Redirect} from "react-router-dom"
const Protected =(props)=>{
    const Cmp= props.cmp;
    let auth;
    if(localStorage.getItem('auth')){
        try{
            auth= localStorage.getItem('auth')
        }catch(e){
            throw new Error(e)
        }
    }
    
    return <div>{ auth ?  <><Nav /><Sidebar/><Cmp/></> : <Redirect to="/"></Redirect>}   </div>
}

export default Protected
