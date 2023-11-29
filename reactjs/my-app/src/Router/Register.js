import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"


function Register() {
  return (
    <div className="container d-flex align-items-center justify-content-center w-100">
    <div className="image">  <img src="./images/SmartHr_Logo.png" alt=""/>
       <div className="login rounded mt-4">
     
       <h2 className="mb-1 text-center">Register
       </h2>  
       <p className="access text-center">Access to our dashboard</p>
       <form>
       <div className="form-group  mb-2">
           <label htmlFor="email" className="form-label">Email*</label>
           <input type="email" className="form-control" placeholder="Email"></input>
       </div>
       <div className="form-group mb-2">
           <label htmlFor="password" className="form-label">Password*</label>
           <input type="password" className="form-control" placeholder="Password"></input>
       </div>
       <div className="form-group mb-2">
           <label htmlFor="password" className="form-label">Repeat Password*</label>
           <input type="password" className="form-control" placeholder="Confirm Password"></input>
       </div>
       <button type="submit" className="btn  mt-2 w-100">Register</button>
       <div className="form-group  mb-2">
          <div className=" text-center ">
           Already have an account?<Link to="/Login" className="log">  login </Link>
          </div>
       </div>
           </form> 
       </div>
       </div>
   </div>


  )
}

export default Register