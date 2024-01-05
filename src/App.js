import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";

import Login from "./pages/LoginSignup/Login";
import Signup from "./pages/LoginSignup/Signup";
 


import OrderHistory from "./pages/OrderHistory/OrderHistory";
import OrderForm from "./pages/PlaceOrder/OrderForm";
import Login from "./pages/LoginSignup/Login";
import Signup from "./pages/LoginSignup/Signup";

import OrderHistory from "./pages/OrderHistory/OrderHistory";
import OrderForm from "./pages/PlaceOrder/OrderForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Admin" element={<Admin />} />

        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
         

        <Route path="/orderHistory" element={<OrderHistory/>} />
        <Route path="/OrderForm" element={<OrderForm/>} />
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />


        <Route path="/orderHistory" element={<OrderHistory/>} />
        <Route path="/OrderForm" element={<OrderForm/>} />

      </Routes>
    </Router>
  );
}

export default App;
