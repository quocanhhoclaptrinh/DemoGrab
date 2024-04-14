import React from "react";
import data from "./CateData.jsx";
import CateItem from "./CateItem.jsx";

const FoodCategories = () => {
  return (
    <div>
      <h2 style={{ fontSize: "32px", fontWeight: "bold", margin: "50px 0px" }}>
        There's something for everyone!
      </h2>
      <div style={{ padding: "0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "50px",
          }}
        >
          {data.CateData.map((item, index) => {
            return (
              <div key={index} style={{ width: "auto" }}>
                <CateItem
                  CateImage={item.CateImage}
                  CateName={item.CateName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
