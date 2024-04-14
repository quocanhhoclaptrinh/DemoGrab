import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Style-Header.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({ children }) => {
  const [headerContainer, setHeaderContainer] = useState(false);
  const [srcImage, setSrcImage] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setSrcImage(
      pathname === "/" && !headerContainer
        ? "https://food.grab.com/static/images/logo-grabfood-white2.svg"
        : "https://food.grab.com/static/images/logo-grabfood2.svg"
    );
  }, [pathname, headerContainer]);

  useEffect(() => {
    const changeBackground = () => {
      setHeaderContainer(window.scrollY >= 1);
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div style={{ height: "100px", position: "relative" }}>
        <div className={headerContainer ? "HeaderContainer active" : "HeaderContainer"}>
          <div
            style={{
              boxSizing: "border-box",
              width: "60%",
              padding: "12px 0px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left Logo */}
            <div style={{ width: "60%" }}>
              <Link to="/">
                <img
                  src={srcImage}
                  alt="WebLogo"
                  width="120px"
                  style={{ objectFit: "cover", cursor: "pointer" }}
                />
              </Link>
            </div>
            {/* Right Items */}
            <div style={{ gap: "10px", width: "40%", display: "flex", justifyContent: "flex-end" }}>
              <div className="navItem" style={{ width: "20%", display: "none" }}>
                <img src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg" />
              </div>
              <div className="navItem" style={{ width: "40%" }}>
                <span style={{ fontSize: "14px", color: "#676767" }}>Đăng nhập/Đăng ký</span>
              </div>
              <div className="navItem" style={{ gap: "2px", width: "20%" }}>
                <span style={{ color: "#676767", fontSize: "12px" }}>VI</span>
                <span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: "#676767" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Header;
