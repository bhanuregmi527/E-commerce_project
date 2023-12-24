import React,{useState,useEffect} from "react";
// import {auth} from '../../firebase'
import {  sendSignInLinkToEmail,signInWithEmailLink ,getAuth,updatePassword  } from "firebase/auth";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

// ...



const RegisterComplete = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const auth=getAuth()
const navigate = useNavigate(); 
//
useEffect(()=>{
setEmail(window.localStorage.getItem("emailForRegister"))
},[email])
//
const handleSubmit= async(e)=>{
   e.preventDefault();
   //validation
  if(!email|| !password){
    toast.error('Email or password is required');
    return;
  } 
  if(password.length<6){
    toast.error('Password must be at least 6 character long ');
    return;

  }

    try {
      const result=await signInWithEmailLink(auth,email,window.location.href) ;
      if(result.user.emailVerified){
         //remove localstorage user email 
         window.localStorage.removeItem("emailForRegister")
         //get user id token
         let user= auth.currentUser;
         await updatePassword(user,password);
         const idTokenResult= await user.getIdTokenResult()
         console.log("user========",user);
         console.log("idToken",idTokenResult);
         //populate user to redux
         //redirect
         
         navigate("/")
      }

    } catch (error) {
      toast.error(error.message);
    }
 
}

//
  const completeRegisterForm=()=>{
    return(
      <form onSubmit={handleSubmit}>
        <input type="email"
        className="form-control" 
        value={email} 
        disabled
        autoFocus
         />
         <br />
         <input type="password"
         className="form-control" 
         value={password} 
         onChange={e=> setPassword(e.target.value)}
         placeholder="Enter Password"
         autoFocus
          />
          <br />
        <button type="submit" className=" btn btn-raised">Complete </button>
      </form>
    )
  }
  return(
    <>
    <div className="container p-5">
      <div className="row"> 
        <div className="col-md-6 offset-md-3 ">
          <h4>  <span> Complete Registration</span></h4>
         <h5>{completeRegisterForm()}</h5>
        
        </div>
      </div>
    
    </div>
    </>

  ) 
};

export default RegisterComplete;
