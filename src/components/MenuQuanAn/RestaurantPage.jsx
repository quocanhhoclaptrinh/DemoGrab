import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../DanhSachQuanAn/QuanAnData";
import RestaurantBody from "./RestaurantBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const RestaurantPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const params = useParams();
  const restaurant = data.QuanAnData.find(
    (restaurant) => restaurant.TenQuanAn === params.name
  );

  useEffect(() => {
    const handleScroll = (e) => {
      if (showModal) {
        e.preventDefault();
      }
    };

    if (showModal) {
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchmove", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [showModal]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    setQuantity(1);
    setTotalPrice(item.comboPrice);
    document.body.classList.add("no-scroll");
  };

  const handleCloseClick = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + selectedItem.comboPrice);
  };

  const handleDelQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - selectedItem.comboPrice);
    }
  };

  const tomorrow = () => {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    return tomorrowDate.toDateString();
  };

  const tomorrowOfTomorrowDay = () => {
    const tomorrowOfTomorrow = new Date();
    tomorrowOfTomorrow.setDate(tomorrowOfTomorrow.getDate() + 2);
    return tomorrowOfTomorrow.toDateString();
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F7F7F7", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", background: "#fff", height: "auto", justifyContent: "center", boxShadow: "0 4px 6px 0 rgba(28,28,28,.06)" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0", boxSizing: "border-box" }}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center", fontSize: "16px", padding: "0" }}>
            <span style={{ color: "#00a5cf" }}>Trang chủ</span>
            <span>&#62;</span>
            <span style={{ color: "#00a5cf" }}>Nhà hàng</span>
            <span>&#62;</span>
            <span>{restaurant.TenQuanAn}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
            <div style={{ padding: "10px" }}>
              <h1 style={{ fontSize: "35px", fontWeight: "bold", margin: "5px 0" }}>{restaurant.TenQuanAn}</h1>
              <p style={{ fontSize: "12px", fontWeight: "400", margin: "5px 0" }}>{restaurant.MonAnTieuBieu}</p>
              <div style={{ display: "flex", gap: "30px", margin: "0", color: "gray" }}>
                {restaurant.Rate !== null && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="Rating" style={{ width: "auto", margin: "0" }} />
                    <span>{restaurant.Rate}</span>
                  </div>
                )}
                {(restaurant.Time && restaurant.Distance) !== null && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="Time" style={{ width: "auto", margin: "0" }} />
                    <span>{restaurant.Time} phút</span>
                  </div>
                )}
                {restaurant.Distance !== null && <span>{restaurant.Distance} km</span>}
              </div>
              {restaurant.Promote !== null && (
                <div style={{ display: "flex", gap: "10px", margin: "15px 0" }}>
                  <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg" alt="Promotion" style={{ width: "auto" }} />
                  <p style={{ fontSize: "14px", color: "gray", overflow: "hidden", textOverflow: "ellipsis" }}>{restaurant.Promote}</p>
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", paddingBottom: "5px" }}>
              <select className="selectBox DeliveryDay" style={{ width: "100%" }}>
                <option value="today">Ngày giao hàng: Hôm nay</option>
                <option value="tomorrow">{tomorrow()}</option>
                <option value="tomorrowOfTomorrow">{tomorrowOfTomorrowDay()}</option>
              </select>
              <select className="selectBox DeliveryTime" style={{ width: "100%" }}>
                <option value="today">Thời gian giao: Ngay Bây giờ</option>
                {[...Array(9)].map((_, index) => (
                  <option key={index} value={index + 6}>{`${(index + 6).toString().padStart(2, "0")}:00 - ${(index + 6).toString().padStart(2, "0")}:30`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <RestaurantBody item={handleItemClick} />
      {showModal && (
        <div className="overlay" style={{ position: "fixed", zIndex: "1000", top: "0", right: "0", height: "100%", width: "100%", background: "rgba(0, 0, 0, 0.5)", boxSizing: "border-box" }}>
          <div style={{ background: "#fff", height: "100%", width: "30%", position: "fixed", right: "0" }}>
            <div style={{ width: "100%", borderBottom: "solid 1px #f0efef" }}>
              <div style={{ padding: "10px 0", width: "100%", display: "flex", boxSizing: "border-box", alignItems: "center" }}>
                <FontAwesomeIcon icon={faTimes} fontSize={35} style={{ padding: "0px 20px", color: "#676767", cursor: "pointer" }} onClick={handleCloseClick} />
              </div>
            </div>
            <div style={{ height: "calc(100% - 40px)" }}>
              <div style={{ padding: "0 24px" }}>
                <div style={{ display: "flex", marginBottom: "10px", alignItems: "flex-start", height: "auto" }}>
                  <div style={{ width: "20%" }}>
                    <img src={selectedItem.comboImage} alt="Combo" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "60%" }}>
                    <p style={{ fontSize: "90%", fontWeight: "bold" }}>{selectedItem.comboName}</p>
                    <p style={{ marginTop: "2px", color: "#676767", fontSize: "80%" }}>{selectedItem.comboDescribe}</p>
                  </div>
                  <div style={{ width: "20%" }}>
                    <p style={{ fontSize: "90%", fontWeight: "bold" }}>{selectedItem.comboPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                  </div>
                </div>
              </div>
              <div style={{ height: "2px", width: "100%", background: "#f0efef", marginBottom: "5px" }}></div>
              <div style={{ padding: "0 24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px", width: "100%", boxSizing: "border-box" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ fontWeight: "bold", fontSize: "90%" }}>Special instructions</p>
                    <p style={{ fontSize: "80%", color: "#676767" }}>Optional</p>
                  </div>
                  <input
                    className="OptionInput"
                    type="text"
                    style={{ width: "100%", fontSize: "18px", borderRadius: "8px", border: "1px solid #c5c5c5", padding: "15px", boxSizing: "border-box" }}
                    value={inputValue}
                    placeholder="E.g. No onions please"
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div style={{ height: "15%", borderTop: "solid 1px #f0efef", boxShadow: "0 -2px 6px 0 rgba(28,28,28,.06)", width: "100%", bottom: "0", display: "flex", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40%" }}>
                <img src="https://food.grab.com/static/images/icons/icon-minus-bordered.svg" alt="Remove" onClick={handleDelQuantity} style={{ cursor: "pointer" }} />
                <span style={{ fontSize: "20px", fontWeight: "bold", padding: "0px 10px" }}>{quantity}</span>
                <img src="https://food.grab.com/static/images/icons/icon-plus-bordered.svg" alt="Add" onClick={handleAddQuantity} style={{ cursor: "pointer" }} />
              </div>
              {quantity !== 0 ? (
                <button className="addToBasketBtn" onClick={handleCloseClick} style={{ cursor: "pointer", width: "50%", padding: "15px", color: "white", background: "#00B14F", fontSize: "80%" }}>Add to Basket - {totalPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</button>
              ) : (
                <button className="cancel" onClick={handleCloseClick} style={{ cursor: "pointer", width: "50%" }}>Cancel</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
