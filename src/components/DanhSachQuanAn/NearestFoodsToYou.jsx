import React from "react";
import SliderQuanAn from "./SliderQuanAn";

const NearestFoodsToYou = () => {
  return (
    <div className="NearestFoods">
      <h2 style={{ fontWeight: "bold", fontSize: 30, margin: 0, marginBottom: 5 }}>
        Món ngon gần bạn
      </h2>
      <div>
        <SliderQuanAn />
      </div>
    </div>
  );
};

export default NearestFoodsToYou;
