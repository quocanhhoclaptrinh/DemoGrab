import React from "react";
import FoodNearestYou from "./NearestFoodsToYou";
import NearestRestaurantsToYou from "./NearestRestaurantToYou";

const RestaurantsPage = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "60%" }}>
        {/* Scrumb Area */}
        <div style={{ gap: 5, alignItems: "center", fontSize: 16, padding: "0px 12px" }}>
          <span style={{ color: "#00a5cf" }}>Trang chủ</span>
          &#62;
          <span>Nhà hàng</span>
        </div>

        {/* Nearest Foods to you */}
        <FoodNearestYou />
        {/* Nearest Restaurants to you */}
        <NearestRestaurantsToYou />
      </div>
    </div>
  );
};

export default RestaurantsPage;
