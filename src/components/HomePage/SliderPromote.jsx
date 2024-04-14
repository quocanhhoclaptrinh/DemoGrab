import React, { useState } from "react";
import QuanAn from "../DanhSachQuanAn/QuanAn";
import data from "../DanhSachQuanAn/QuanAnData";

const SliderPromote = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(3);

  const handlePrevClick = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
      setMaxIndex(maxIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (maxIndex < data.QuanAnData.length - 1) {
      setSlideIndex(slideIndex + 1);
      setMaxIndex(maxIndex + 1);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="slider-container" style={{ overflow: "hidden" }}>
        <div className="slider-wrapper" style={{ display: "flex", transition: "transform 0.5s ease" }}>
          {data.QuanAnData.map((item, index) => {
            if (index >= slideIndex && index <= maxIndex) {
              return (
                <div key={index} style={{ flex: "0 0 auto", marginRight: "20px" }}>
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
              );
            } else return null;
          })}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <button disabled={slideIndex === 0} onClick={handlePrevClick}>Prev</button>
        <button disabled={maxIndex === data.QuanAnData.length - 1} onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default SliderPromote;
