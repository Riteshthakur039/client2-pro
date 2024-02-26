import React from "react";
import "./style.css";
import brother from "../../assets/images/brother.webp";

const About = () => {
  return (
    <>
      <section className="loopvideo">
        <div className="container-fl position-relative">
          <div className="itemv">
            <video
              src="https://cdn.shopify.com/s/files/1/2598/1404/files/Website_Home_Page.mp4?v=1626441163"
              autoPlay
              loop
              muted 
              playsInline
              alt="video"
              className=""
            />
          </div>
          <div className="sec2">
            <img src={brother} alt=""  />
            <p>OUR WAY OF LIFE</p>
            <h1>FARMERS ARE PROFESSIONAL PROBLEM SOLVERS</h1>
            <p>
              Organic Farming isn't a type of farming but a way of life. Besides
              being workers of the soil, farmers believe in community strength
              and rely on the natural interconnection of species!
            </p>
            <button>Know more</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
