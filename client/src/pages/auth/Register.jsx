import React,{useState} from "react";

const Register = () => {
const [email,setEmail]=useState('')
console.log(email);
const handleSubmit=()=>{
  console.log("submitted")
}
  const registerForm=()=>{
    return(
      <form onSubmit={handleSubmit}>
        <input type="email"
        className="form-control" 
        value={email} 
        onChange={e=> setEmail(e.target.value)}
        autoFocus
         />
        <button type="submit" className="btn btn-primary"> Register {email.toLowerCase()}</button>
      </form>
    )
  }
  return(
    <>
    <div className="container p-5">
      <div className="row"> 
        <div className="col-md-6 offset-md-3">
          <h4> Register</h4>
         <h2>{registerForm()}</h2>
        
        </div>
      </div>
    
    </div>
    </>

  ) 
};

export default Register;
