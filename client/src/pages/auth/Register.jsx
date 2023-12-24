import React,{useState} from "react";
import {auth} from '../../firebase'
import {  sendSignInLinkToEmail } from "firebase/auth";
import {toast} from 'react-toastify'

const Register = () => {
const [email,setEmail]=useState('')

//
const handleSubmit= async(e)=>{
   e.preventDefault();
   console.log(import.meta.VITE_REACT_APP_REGISTER_REDIRECT_URL)
   const config={
        url:"http://localhost:5173/register/complete",
        handleCodeInApp: true
   }

   await sendSignInLinkToEmail(auth,email,config);
   toast.success(`Email is sent to ${email}. Click the link in email to complete your registration`)

   //save user mail in local storage
   window.localStorage.setItem("emailForRegister",email)

   setEmail('')
}

//
  const registerForm=()=>{
    return(
      <form onSubmit={handleSubmit}>
        <input type="email"
        className="form-control" 
        value={email} 
        onChange={e=> setEmail(e.target.value)}
        autoFocus
         />
        <button type="submit" className=" btn btn-raised">Register {email.toLowerCase()}</button>
      </form>
    )
  }
  return(
    <>
    <div className="container p-5">
      <div className="row"> 
        <div className="col-md-6 offset-md-3 ">
          <h4>  <span>Register</span></h4>
         <h5>{registerForm()}</h5>
        
        </div>
      </div>
    
    </div>
    </>

  ) 
};

export default Register;
