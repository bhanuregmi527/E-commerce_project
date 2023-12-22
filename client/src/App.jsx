import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
        {/* there will only ever be one child here */}
        <Route exact path="/" Component={Home} />
        <Route exact Route path="/login" Component={Login} />
        <Route exact Route path="/register" Component={Register} />
    </Routes>
    </>
  );
}; 

export default App;