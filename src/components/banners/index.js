// Banners.js

import React from "react";
// import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
// import Banner3 from "../../assets/images/banner3.jpg";

import "./style.css";

const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={Banner2} alt="Banner 1" className="w-100 transition" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <img src={Banner2} alt="Banner 2" className="w-100 transition" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <img src={Banner2} alt="Banner 3" className="w-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
