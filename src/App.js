import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Users from "./Components/Users";
import Products from "./Components/Products";
import About from './Components/About';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Success from './Components/Success'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Users />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path='/products/:id' element={<Products/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/cart'} element ={<Cart />} />
          <Route path={'/payment'} element={<Payment/>}/>
          <Route path={'/Success'} element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
