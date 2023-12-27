import React,{useState} from "react";
import {auth, googleAuthProvider} from '../../firebase'
import {  sendSignInLinkToEmail,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {toast} from 'react-toastify'
import { Button } from "antd";
import { MailOutlined,GoogleOutlined } from "@ant-design/icons";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";


const Login = () => {
const [email,setEmail]=useState('regmibhanubhakta67@gmail.com');
const [password,setPassword]=useState('bhanubhakta')
const [loading,setLoading]= useState(false)
let dispatch= useDispatch();
const navigate = useNavigate(); 


//
const handleSubmit= async(e)=>{
   e.preventDefault();
   setLoading(true);
   try {
    const result= await signInWithEmailAndPassword(auth,email,password);
      const {user}=result;
      const idTokenResult= await user.getIdTokenResult(); 
      
      //dispatch user
      dispatch({
        type:'LOGGED_IN_USER',
        payload:{
           email:user.email,
           token:idTokenResult.token,
        }
       })
       navigate("/");

   } catch (error) {
   toast.error(error.message);
   setLoading(false);
   }
}


const googleLogin=async(e)=>{
  e.preventDefault();
  console.log("googleLogin")
 signInWithPopup(auth,googleAuthProvider)
 .then(async(result)=>{
  const {user}=result;
  const idTokenResult= await user.getIdTokenResult(); 
  dispatch({
    type:'LOGGED_IN_USER',
    payload:{
       email:user.email,
       token:idTokenResult.token,
    }
   })
   navigate("/")


 })
 .catch((err)=>{
  toast.error(err.nessage);
 })

}

//
  const loginForm=()=>{
    return(
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="email"
            placeholder="Your email"
            className="form-control" 
            value={email} 
            onChange={e=> setEmail(e.target.value)}
            autoFocus
              />
      </div>

      <div className="form-group">
          <input type="password"
          className="form-control" 
          value={password} 
          onChange={e=> setPassword(e.target.value)}
          placeholder="Password"
          />
      
      </div>
       <Button 
              onClick={handleSubmit}
               type="primary"
               className="mb-3"
                block
                shape="round"
                icon={<MailOutlined/>}
                size="large"
                disabled={!email || password.length<6}
              >
              {loading? <span style={{color:"black"}}> Loading...</span>:<span style={{color:"black"}}>Login with Email</span>} 
       
       </Button>

       <Button 
       onClick={googleLogin}
        type="primary"
        danger
        className="mb-3"
         block
         shape="round"
         icon={<GoogleOutlined />}
         size="large"
         
       >
       Login with Google

</Button>

         
      </form>
    )
  }
  return(
    <>
    <div className="container p-5">
      <div className="row"> 
        <div className="col-md-6 offset-md-3 ">
          <h4>  <span>Login</span></h4>
         <h5>{loginForm()}</h5>
        
        </div>
      </div>
    
    </div>
    </>

  ) 
};

export default Login;
