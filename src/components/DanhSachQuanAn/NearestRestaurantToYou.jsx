import React from "react";
import data from "./QuanAnData";
import QuanAn from "./QuanAn";

const NearestRestaurantsToYou = () => {
  return (
    <div className="NearestRestaurants">
      <div>
        <div style={{ marginTop: 10, width: "100%", marginBottom: 5 }}>
          <h2 style={{ fontWeight: "bold", fontSize: 30, margin: 0 }}>
            Quán ăn tại
          </h2>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 20,
              width: "80%",
              margin: 0,
              padding: "0px 12px",
              color: "#00b14f",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            61 Nguyễn Bình, X.Phú Xuân, H.Nhà Bè, Hồ Chí Minh
          </p>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "1%",
              marginBottom: "50px"
            }}
          >
            {data.QuanAnData.map((item, index) => (
              <div key={index}>
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
        </div>
      </div>
    </div>
  );
};

export default NearestRestaurantsToYou;
