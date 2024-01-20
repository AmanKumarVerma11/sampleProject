import React from "react";
import backgroundImage from "../Images/banner-img.avif";
import WhyUs from "./whyus";

export default function banner() {
  return (
    <>
      <div
        className="container-fluid banner-div"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <h2 className="text-center banner-heading">
            <span data-aos="fade-left" data-aos-delay="1000">
              Find the best{" "}
            </span>
            <span
              className="banner-span"
              data-aos="zoom-out-right"
              data-aos-delay="2000"
            >
              software suppliers
            </span>{" "}
            <span data-aos="fade-left" data-aos-delay="2600">
              from India.
            </span>
          </h2>
          <p className="banner-sub-text text-center mt-3">
            Our platform is specifically crafted to facilitate the connection
            between software clients and software suppliers.
          </p>
          <div className="btn-div">
            <button className="btn btn-primary btn-lg btn-block banner-btn mt-5 mb-5">
              Why Us?
            </button>
          </div>
        </div>
      </div>
      <WhyUs />
    </>
  );
}
