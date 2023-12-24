import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";


const App = () => {
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
