"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const FeatureSlider = ({ cardData }) => {
  return (
    <>
      <div
        className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center ps-8 pe-8 lg-px-0"
        data-anime='{ "el": "childs", "translateY": [30, 0], "scale":[0.8,1], "opacity": [0,1], "duration": 500, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
      >
        {/* start features box item */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true} // Enable infinite looping
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500, // Delay between transitions in milliseconds
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions
          }}
          pagination={false}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {cardData?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="mb-4">
                <div
                  className="card border-0  position-relative"
                  style={{
                    height: "400px",
                    width: "100%",
                    maxWidth: "600px", // Max width for larger screens
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    backgroundImage: `linear-gradient(135deg, #df5e93, #62278d, #000f4c)`,
                  }}
                >
                  {/* Icon & Text */}
                  <div
                    className="card-body d-flex flex-column align-items-center justify-content-center"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <img
                      src={card.icon}
                      className="mb-3"
                      alt="icon"
                      style={{
                        height: "150px",
                        transition: "transform 0.3s ease-in-out",
                        borderRadius: "15px",
                      }}
                    />
                    <h5 className="fs-4 text-center mb-1 text-white feature-title">
                      {card.title}
                    </h5>
                    <p className="card-text text-center text-white mb-0">
                      {card.description}
                    </p>
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeatureSlider;
