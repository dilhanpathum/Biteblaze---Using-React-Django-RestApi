import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AddFood from "./pages/AddFood/AddFood";
import Login from "./pages/LoginSignup/Login";
import Signup from "./pages/LoginSignup/Signup";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import OrderForm from "./pages/PlaceOrder/OrderForm";
import AddToCart from "./pages/AddToCart/AddToCart";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";
import AdminSignup from "./pages/LoginSignup/AdminSignup";
function App() {
  return (
    
    <CookiesProvider>
      <Toaster/>
      <Router>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/orderForm" element={<OrderForm />} />
          <Route path="/addfood" element={<AddFood />} />
          <Route path="/menu" element={<AddToCart />} />
          
        </Routes>
        
      </Router>
      
    </CookiesProvider>
  );
}

export default App;
