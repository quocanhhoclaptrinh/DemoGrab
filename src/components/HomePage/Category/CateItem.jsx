import React from "react";

const CateItem = ({ CateImage, CateName }) => {
  return (
    <div>
      <img style={{ width: "100%", borderRadius: 5 }} src={CateImage} alt={CateName} />
      <p style={{ fontSize: "100%", fontWeight: "bold" }}>{CateName}</p>
    </div>
  );
};

export default CateItem;
