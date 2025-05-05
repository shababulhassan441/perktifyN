"use client";
import { sendMail } from "@/lib/actions";
import React from "react";

const HeroSection = ({ heroData }) => {
  const { title, tagLines, hero_image } = heroData;

  return (
    <section
      id="herocta"
      className="cover-background full-screen ipad-top-space-margin position-relative md-h-auto"
      //   style={{ backgroundImage: 'url("hero-bg.jpg")' }}
    >
      <div className="overlay"></div>
      <div
        id="particles-style-01"
        className="h-100 position-absolute left-0px top-0 w-100"
        data-particle="true"
        data-particle-options='{"particles": {"number": {"value": 22,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#10ffff", "#0bb1ff", "#10ffff", "#0bb1ff"]},"shape": {"type": "edge","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 0.8,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 10,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":true,"distance":10,"color":"#ffffff","opacity":0.4,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
      />
      <div className="mx-w-large mx-auto h-100 paddingH">
        <div className="d-flex flex-column gap-4 marginTopSmall sm-marginTop align-items-center justify-content-center pt-9 h-100">
          <div className="col-xl-10 col-lg-10 col-md-10 text-white position-relative text-center text-lg-start d-flex flex-column align-items-center">
            <div className="fs-70 lg-fs-60 sm-fs-60 xs-fs-50 fw-600 mb-20px text-center ls-minus-4px overflow-hidden">
              <div
                className="d-inline-block"
                data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900 }'
              >
                <div
                  className="highlight-separator"
                  data-shadow-animation="true"
                  data-animation-delay={1500}
                  // style={{color:"black"}}
                >
                  {title || ""}
                  {/* <span>
                    <img src="highlight-separator.svg" alt="" />
                  </span> */}
                </div>
              </div>
            </div>
            <div className="fs-19 fw-300 mb-30px w-80 sm-w-100 opacity-6 d-block mx-auto mx-lg-0 overflow-hidden">
              <span className="fancy-text-style-4">
                <span className="fs-25 xl-fs-25 lg-fs-25 md-fs-20 xs-fs-16 fs-500 mb-0 text-center text-white fw-300  d-block">
                  <span
                    className="fw-600"
                    data-fancy-text={`{ "effect": "slide", "direction": "right", "color": "white", "speed": 100, "string": [${tagLines
                      ?.map((line) => `"${line}"`)
                      .join(", ")}], "duration": 2500 }`}
                  />
                </span>
              </span>
            </div>
            <div className="overflow-hidden  d-flex justify-content-center  gap-3 pt-5px">
              <a
                href="https://app.perktify.com/login?demo=true"
                className="btn btn-switch-text bg-white fw-600 text-black btn-large left-icon btn-round-edge submit text-transform-none"
                // style={{
                //   backgroundImage:
                //     "linear-gradient(to right, #3543f4 , #b627fe)",
                // }}
              >
                <span>
                  <span>{/* <i className="bi bi-calendar-check"></i> */}</span>
                  <span className="btn-double-text" data-text=" View Demo">
                    View Demo
                  </span>
                </span>
              </a>
              <button
                onClick={() => {
                  document
                    .getElementById("buysubscription")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="btn bg-white fw-600 text-black  btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none"
              >
                <span>
                  <span>{/* <i className="bi bi-calendar-check"></i> */}</span>
                  <span className="btn-double-text" data-text=" Get Perktify">
                    Get Perktify
                  </span>
                </span>
              </button>

              {/* <div
              className="text-white fs-15 d-inline-block last-paragraph-no-margin align-middle"
              data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 700 }'
            >
              <p className="opacity-6 ls-minus-05px d-inline-block">
                Starting at only
              </p>
              <span className="fw-500 d-inline-block ">$2.78/mo*</span>
            </div> */}
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 pb-3 mt-1 d-none d-sm-block position-relative ">
            <div
              className="position-relative"
              data-anime='{ "opacity": [0, 1], "translateY": [100, 0], "easing": "easeOutQuad", "duration": 1200, "delay": 200 }'
            >
              <div
                className="col-md-10 marginTopSmall col-8 mx-auto position-relative atropos transform-3d"
                data-atropos=""
              >
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner text-center">
                      <div
                        data-atropos-offset={-8}
                        className="position-absolute left-0px right-0px top-100px lg-top-50px mx-auto"
                        data-anime='{ "scale":[1.2,1], "opacity": [0,1], "duration": 500, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
                      ></div>
                      <img
                        data-atropos-offset={3}
                        className=" position-relative z-index-9 lg-w-80 md-w-90 sm-w-100"
                        src={hero_image || ""}
                        alt=""
                        data-anime='{ "translateY": [50, 0], "rotateX": [10, 0], "perspective": [1000,1200], "scale": [1.1, 1], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="video-pop">
              <video className="rounded-4 shadow-sm" autoPlay muted loop>
                <source src="/herobg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
