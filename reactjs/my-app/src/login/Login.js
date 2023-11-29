import React from "react";
import "./login1.css"


function Login(){


    return(
        <div className="container d-flex align-items-center justify-content-center w-100">
         <div className="image">  <img src="./images/SmartHr_Logo.png" alt=""/>
            <div className="login rounded mt-4">
          
            <h2 className="mb-1 text-center">Login
            </h2>  
            <p className="access text-center">Access to our dashboard</p>
            <form>
            <div className="form-group  mb-2">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control mb-4" placeholder="Email"></input>
            </div>
            <div className="form-group mb-2 ">
                <div className="d-flex justify-content-between ">
                <label htmlFor="password" className="form-label hidden">Password</label>
                <label htmlFor="password" className=" forget form-label">Forgot Password?</label>
                </div>
                <input type="password" className=" form-control mb-3 " placeholder="Password"></input>
            </div>
            
            <button type="submit" className="btn  mt-2 w-100 mb-3">Login</button>
            <div className="form-group  mb-2">
               <div className=" text-center ">
               Don't have an account yet?<a href="/" className="log">  Register </a>
               </div>
            </div>
                </form> 
            </div>
            </div>
           
        </div>


    )


}

export default Login