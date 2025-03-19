"use client";
import React from "react";

const Introdcution = ({ introData }) => {
  const { title, subTitle, para, introImage, points, bannerPoints,bannerIcons } = introData;
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-center mb-6 sm-mb-50px position-relative">
          <div
            className="col-lg-6 col-md-10 position-relative md-mb-30px"
            data-anime='{ "effect": "slide", "color": "#ffffff", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
          >
            <div className="container h-100 position-relative">
              <div className="row align-items-center justify-content-center text-center h-100">
                <div
                  className="col-md-12 position-relative atropos transform-3d"
                  data-atropos=""
                >
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner text-center">
                        <div
                          data-atropos-offset={-8}
                          className="position-absolute left-0px right-0px top-100px lg-top-50px mx-auto"
                          data-anime='{ "scale":[1.2,1], "opacity": [0,1], "duration": 500, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
                        >
                          <img className="" src="/dots.png" alt="" />
                        </div>
                        <img
                          data-atropos-offset={3}
                          className=" position-relative z-index-9 lg-w-80 md-w-90 sm-w-100"
                          src={introImage || ""}
                          alt=""
                          data-anime='{ "translateY": [50, 0], "rotateX": [10, 0], "perspective": [1000,1200], "scale": [1.1, 1], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1 last-paragraph-no-margin"
            data-anime='{ "el": "childs", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 900, "delay": 300, "easing": "easeOutCirc" }'
          >
            <span className="text-base-color fw-600 mb-15px text-uppercase d-block">
              {subTitle || ""}
            </span>
            <h2 className="fw-600 text-dark-gray w-90 lg-w-100 text-dark-gray fw-700 ls-minus-2px">
              {title || ""}
            </h2>
            <p className="w-90 sm-w-100">{para || ""}</p>
            <ul className="p-0 mb-25px mt-15px list-style-01 w-90 lg-w-100">
              {/* {points?.map((point, index) => (
                <li
                  key={index}
                  className="border-color-extra-medium-gray fw-600 text-dark-gray d-flex align-items-center pt-15px pb-15px"
                >
                  <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle bg-solitude-blue me-10px text-center d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="fa-solid fa-check fs-13 text-base-color" />
                  </div>
                  {point || ""}
                </li>
              ))} */}
            </ul>

            <div
              onClick={() => {
                document
                  .getElementById("buysubscription")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none"
            >
              <span>
                <span>
                  <i className="bi bi-calendar-check"></i>
                </span>
                <span className="btn-double-text" data-text="Buy Now">
                  Buy Now
                </span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="row align-items-center justify-content-center border border-color-extra-medium-gray border-radius-100px md-border-radius-6px p-50px lg-p-20px m-0 box-shadow-quadruple-large banner-card-container"
          data-bottom-top="transform:scale(1.1, 1.1) translateY(30px);"
          data-top-bottom="transform:scale(1, 1) translateY(-30px);"
        >
          {bannerPoints.map((point, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 process-step-style-07 position-relative banner-card-wrapper"
            >
              <div className="process-step-item d-flex align-items-center banner-card">
                <div className="process-step-icon-wrap position-relative banner-card-img">
                  <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-17 fw-500">
                    <img src={bannerIcons?.[index] || ""} className="h-50px" alt="image" />
                  </div>
                </div>
                <div className="process-content ps-20px last-paragraph-no-margin banner-card-point">
                  <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                    {point}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* end process step item */}
          {/* start process step item */}
          {/* <div className="col-lg-4 col-md-6 process-step-style-07 position-relative">
            <div className="process-step-item d-flex align-items-center">
              <div className="process-step-icon-wrap position-relative">
                <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px  fs-17 fw-500">
                  <img src="growth.svg" className="h-50px" alt="" />
                </div>
              </div>
              <div className="process-content ps-20px last-paragraph-no-margin">
                <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                  "Lead the market. Leave the complexity to us"
                </span>
              </div>
            </div>
          </div> */}
          {/* end process step item */}
        </div>
      </div>
    </section>
  );
};

export default Introdcution;
