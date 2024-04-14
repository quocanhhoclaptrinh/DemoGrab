import React from "react";
import RestaurantsPage from "./components/DanhSachQuanAn/RestaurantPage";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Layout/Header";
import RestaurantPage from "./components/MenuQuanAn/RestaurantPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurant/:name" element={<RestaurantPage />} />
        </Routes>
      </Header>
    </Router>
  );
}

export default App;

