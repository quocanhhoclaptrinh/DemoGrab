import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./AddressForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const AddressForm = ({ onSearchClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    onSearchClick(inputValue);
  };

  return (
    <div className="FormContainer" style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
      <div className="Form" style={{ zIndex: 100, position: "relative", width: "100%" }}>
        <div style={{ width: "100%", gap: 10, padding: "40px 24px", fontWeight: "bold", alignItems: "flex-start", background: "white", borderRadius: 4, border: "1px solid #f0efef" }}>
          <p style={{ fontSize: 20 }}>Good Evening</p>
          <p style={{ fontSize: 30 }}> Where should we deliver your food today?</p>

          <div className="addressArea" style={{ width: "100%" }}>
            <div style={{ fontSize: 25, width: "20%", justifyContent: "center" }}>
              <FontAwesomeIcon icon={faLocationPin} style={{ color: "#ee2b2b" }} />
            </div>
            <div style={{ height: 25, width: "60%" }}>
              <input
                style={{ width: "100%", border: "none", outline: "none" }}
                placeholder="Nhập địa chỉ của bạn"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div style={{ width: "20%" }}>
              <img src="https://food.grab.com/static/images/icons/icon-geo-button.svg" style={{ width: "100%", height: 30 }} alt="geo-button" />
            </div>
          </div>
          <Link style={{ width: "100%" }} to={"/restaurants"}>
            <button
              style={{ width: "100%", height: 45, borderRadius: 8, border: "none", background: "#00B14F", fontSize: 20, fontWeight: "bold", color: "White", cursor: "pointer" }}
              onClick={handleSearchClick}
            >
              Tìm kiếm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
