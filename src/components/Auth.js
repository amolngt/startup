import React ,{ useState } from 'react';
// import DatePicker from 'react-datepicker';
import * as constants from "../constants"
import { useHistory} from "react-router-dom"
// import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
const Auth =()=>{
  let history= useHistory()
  try{
    const auth= localStorage.getItem('auth')
    if(auth){
      history.push('/home');
    }
  }catch(e){
    throw new Error(e)
  }
    const [user, setUser]= useState({
        name:"",
        password:""
    })
  const onInputChange=(e)=>{
    setUser({ ...user, [e.target.name]: e.target.value })
    }
    // onChangeDate=(date)=>{
    //     this.setState({
    //         date: date
    //     })
    // }
  const onSubmit=(e)=>{
      e.preventDefault();
      axios.post(constants.LOCAL+'login/checkuser',user).then(response=>{
          if(response.data.status=== true){
              localStorage.setItem("auth",response.data.token)
              history.push('/home');
          }else{
            alert("Invalid name or password")
          }
      }).catch(error=>{
          throw error;
      })
  }
  return(
        <div className="container-login100">
              <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <div className="p-4">
      <span className="login100-form-title p-b-33">Account Login</span>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name"
              name="name"
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter password"
              name="password"
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
      </div>
      </div>
  )
}

export default Auth;