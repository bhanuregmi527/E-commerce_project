import { useState,useEffect } from "react";
import { Route,Router, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import {auth} from './firebase'
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch= useDispatch()

  useEffect(()=>{
      const unSubscribe= auth.onAuthStateChanged(async (user)=>{
        if(user){
          const idTokenResult= await user.getIdTokenResult();
          dispatch({
           type:'LOGGED_IN_USER',
           payload:{
              email:user.email,
              token:idTokenResult.token,
           }
          })
        }
      });

      return ()=> unSubscribe;
  },[])


  return (
    <>
    <Header/>
    <ToastContainer/>
    <Routes>
        {/* there will only ever be one child here */}
        <Route exact path="/" Component={Home} />
        <Route exact Route path="/login" Component={Login} />
        <Route exact Route path="/register" Component={Register} />       
        <Route exact Route path="/register/complete" Component={RegisterComplete} />

    </Routes>
    </>
  );
}; 

export default App;
