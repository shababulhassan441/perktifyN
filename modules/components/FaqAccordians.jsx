import React from "react";

const FaqAccordians = ({ faqData }) => {
  return (
    <section className="pt-6">
      <div className="container">
        <div className="row justify-content-center align-items-center mb-3">
          <div
            className="col-lg-7 col-md-8 sm-mb-15px"
            data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <h2 className="text-dark-gray fw-700 ls-minus-1px mb-0">
              Have a question?
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="accordion accordion-style-02"
              id="accordion-style-02"
              data-active-icon="icon-feather-chevron-up"
              data-inactive-icon="icon-feather-chevron-down"
              data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              {faqData.map((item, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-header border-bottom border-color-extra-medium-gray">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target={`#accordion-style-02-${index + 1}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                        <i
                          className={`feather ${
                            index === 0
                              ? "icon-feather-chevron-up"
                              : "icon-feather-chevron-down"
                          } icon-extra-medium`}
                        />
                        <span className="fw-600 fs-18">{item.question}</span>
                      </div>
                    </a>
                  </div>
                  <div
                    id={`accordion-style-02-${index + 1}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#accordion-style-02"
                  >
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordians;
