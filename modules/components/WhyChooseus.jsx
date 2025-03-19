import React from "react";

const WhyChooseus = ({ whyCards }) => {
  return (
    <section className="cover-background pt-5 xs-pt-8">
      <div className="mx-w-large mx-auto px-5 px-sm-5 px-md-5 px-lg-4 px-xl-5">
        <div
          className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 g-5 justify-content-center"
          data-anime='{ "el": "childs",  "translateY": [0, 0], "perspective": [1200, 1200], "scale": [1.05, 1], "rotateX": [50, 0], "opacity": [0,1], "duration":600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          {whyCards?.map((card, index) => (
            <div key={index} className="col mb-30px position-relative ">
              <div
                style={{
                  height: "auto",
                }}
                className="border border-secondary card-shadow h-100 border-radius-8px  ps-8 pe-8 xl-ps-6 xl-pe-6 md-ps-4 md-pe-4 pt-4 pb-3"
              >
                <div className="w-25">
                  <img src={card.icon || ""} alt="image" />
                </div>
                <div className="pt-0 pb-15px  last-paragraph-no-margin text-start">
                  <span className="d-inline-block text-black fs-20 mb-5px fw-semibold">
                    {card.title || ""}
                  </span>
                  <p className="textSmall">{card.description || ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
