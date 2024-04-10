import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Views/Home";
import Details from "../Views/Details";
import Store from "../Views/Stores/Store";
import AutoScrollToTop from "../Components/AutoTop";
import ProductCategory from "../Views/ProductCategory";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":uid" element={<Details />} />
        <Route path="category/:uid" element={<ProductCategory />} />

        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
