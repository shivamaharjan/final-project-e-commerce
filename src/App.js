import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Customers from "./pages/customers/Customers";
import Orders from "./pages/orders/Orders";
import Product from "./pages/product/Product";
import Category from "./pages/category/Category";
import Profile from "./pages/profile/Profile"
import PaymentOption from "./pages/payment-options/PaymentOption";
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
    <div className="app">
      {/* Routes */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* Private */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/payment-options" element={<PaymentOption />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
  
}

export default App;
