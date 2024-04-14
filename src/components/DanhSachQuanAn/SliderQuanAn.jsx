import React, { useRef, useState } from "react";
import QuanAn from "./QuanAn";
import data from "./QuanAnData";

const SliderQuanAn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(data.QuanAnData.length - 1, prevIndex + 1));
  };

  return (
    <div style={{ position: "relative" }}>
      <div>
        {data.QuanAnData.map((item, index) => (
          <div key={index} style={{ display: index === currentIndex ? "block" : "none" }}>
            <QuanAn
              ImageLink={item.ImageLink}
              TenQuanAn={item.TenQuanAn}
              MonAnTieuBieu={item.MonAnTieuBieu}
              Rate={item.Rate}
              Time={item.Time}
              Distance={item.Distance}
              Promote={item.Promote}
            />
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
        <button onClick={handlePrevClick} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>Previous</button>
        <button onClick={handleNextClick} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>Next</button>
      </div>
    </div>
  );
};

export default SliderQuanAn;
