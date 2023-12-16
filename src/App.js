import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import OrderHistory from "./pages/OrderHistory/OrderHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="/orderHistory" element={<OrderHistory/>} />
      </Routes>
    </Router>
  );
}

export default App;
