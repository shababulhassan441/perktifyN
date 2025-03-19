import React from "react";
import FeatureSlider from "./FeatureSlider";

const KeyFeatures = ({ headData, cardData }) => {
  const { title, subTitle } = headData;

  return (
    <section
      className="cover-background section-dark bg-midnight-dark-blue"
      style={{
        // backgroundImage: `linear-gradient(90deg, #fef2ad, #dceff0), url("demo-hosting-home-02.png")`,
        // backgroundColor:"#dceff0",
      }}
      data-0-top="background-color:rgb(25,30,61);"
      data-center-bottom="background-color:rgb(14,16,29);"
    >
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div
            className="col-lg-8 text-center"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <span className="text-black opacity-5 mb-5px text-uppercase d-block">
              {subTitle || ""}
            </span>
            <h2 className=" text-white fw-700 ls-minus-1px">{title || ""}</h2>
          </div>
        </div>
        {/* <div
          className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center ps-8 pe-8 lg-px-0"
          data-anime='{ "el": "childs", "translateY": [30, 0], "scale":[0.8,1], "opacity": [0,1], "duration": 500, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
        >
          
          {cardData?.map((card, index) => (
            <div
              key={index}
              className="col icon-with-text-style-04 transition-inner-all mb-30px"
            >
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <img src={card.icon} className="h-50px"  alt="image" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    {card.title}
                    <br />
                    {card.subtitle}
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
          ))}     
        </div> */}
        <div>
          <FeatureSlider cardData={cardData} />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
