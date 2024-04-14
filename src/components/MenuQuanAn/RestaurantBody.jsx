import React from "react";
import ComboFood from "./ComboFood";

const RestaurantBody = ({ item }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "30px",
          padding: "10px",
          "@media (min-width: 768px)": {
            width: "60%",
          },
        }}
      >
        <h1 style={{ margin: "30px 0", fontSize: "30px", fontWeight: "bold" }}>
          Ưu đãi hôm nay
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "10px",
            width: "100%",
          }}
        >
          <ComboFood onClickDishes={item} />
        </div>
      </div>
    </>
  );
};

export default RestaurantBody;
