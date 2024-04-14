import React from "react";
import combo from "./ComboData";

const ComboFood = ({ onClickDishes }) => {
  return (
    <>
      {combo.ComboData.map((item, index) => {
        return (
          <div
            className="DishesCard comboCard"
            style={{
              display: "flex",
              gap: "5px",
              padding: "15px",
              background: "white",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
            onClick={() => onClickDishes(item)}
          >
            <div style={{ width: "10%", xl: "40%" }}>
              <img src={item.comboImage} alt={item.comboName} style={{ width: "100%" }} />
            </div>
            <div
              style={{
                width: "90%",
                xl: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{ fontSize: "18px" }}>{item.comboName}</h2>
                <p style={{ fontSize: "14px", marginTop: "5px", color: "#676767" }}>{item.comboDescribe}</p>
              </div>
              {/* Saving */}
              <div style={{ width: "100%", marginTop: "5px", display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                    <span style={{ color: "#f38621", backgroundColor: "rgba(243,134,33,.3)", padding: "5px", fontSize: "10px" }}>{item.comboSale}</span>
                    <span style={{ color: "#676767", textDecoration: "line-through", fontSize: "12px" }}>{item.comboOriginPrice}</span>
                  </div>
                  <p>{item.comboPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                </div>
                <div style={{ width: "20%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "30px", backgroundColor: "#00B14F", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="Add" style={{ width: "30px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ComboFood;
