import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inventory from "./Inventory";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Card from "./Card";
import Receipts from "./Receipts";
import Home from "./Home";
import DeliveryOrder from "./DeliveryOrder";
import Returns from "./Returns";
import New_Receipt from "./New_Receipt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/receipts" element={<Receipts />}></Route>
        <Route path="/deliveryOrders" element={<DeliveryOrder />}></Route>
        <Route path="/returns" element={<Returns />}></Route>
        <Route path="/new_receipt" element={<New_Receipt />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
