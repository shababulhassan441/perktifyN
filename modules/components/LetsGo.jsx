"use client"
import Link from "next/link";
import React from "react";

const LetsGo = ({heroCta}) => {

  const {ctaText} = heroCta
  return (
    <section
      className="bg-very-light-gray pt-20px pb-20px sm-pt-40px"
      data-anime='{ "opacity": [0, 1], "translateY": [0, 0], "easing": "easeOutQuad", "duration": 1000,"staggervalue": 300, "delay": 600 }'
    >
      <div className="container overlap-section">
        <div className="row justify-content-center overlap-section border-radius-6px overflow-hidden g-0 box-shadow-extra-large">
          <div className="col-lg-9 text-center fw-600 fs-24 lg-fs-22 ls-minus-05px text-dark-gray bg-white p-30px md-p-20px">
            {/* <a
              href="/"
              className="fw-700 text-base-color text-decoration-line-bottom-medium"
            >
              Be first in line
            </a>{" "} */}
            {ctaText || ""}
          </div>
          <div className="col-lg-3 cta text-center background-yellow pt-30px pb-30px md-p-20px">
            <div
               onClick={() => {
                  document
                    .getElementById("waitlist")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              className="fw-700 text-dark-gray text-dark-gray-hover fs-24 lg-fs-20 ls-minus-05px"
            >
              Lets Go
              <i className="feather icon-feather-arrow-right ms-5px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsGo;
