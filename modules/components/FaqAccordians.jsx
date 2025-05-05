"use client";
import React, { useState } from "react";

const FaqAccordians = ({ faqData }) => {
  const categories = [...new Set(faqData.map(item => item.category))];
  console.log("categories=>",categories)
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter FAQs by the active category
  const filteredFaqs = faqData.filter(item => item.category === activeCategory);

  return (
    <section className="pt-6">
      <div className="container">
        <div className="row justify-content-center align-items-center mb-3">
          <div
            className="col-lg-7 col-md-8 sm-mb-15px"
            data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <h2 className="text-dark-gray lh-sm fw-700 ls-minus-1px mb-0 text-center">
             Frequently Asked question?
            </h2>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`tabsBtn border-0 bg-transparent fs-16 fw-600 pb-2 ${
                activeCategory === cat ? "text-danger border-bottom border-danger" : "text-dark"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="accordion accordion-style-02"
              id="accordion-style-02"
              data-active-icon="icon-feather-chevron-up"
              data-inactive-icon="icon-feather-chevron-down"
              data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              {filteredFaqs.map((item, index) => (
                <div key={index} className="accordion-item mb-2">
                  <div className="accordion-header border p-2 rounded-2 shadow-sm border-color-extra-medium-gray">
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
                    <div className="accordion-body last-paragraph-no-margin border p-2 mb-2 rounded-2 border-color-light-medium-gray">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                <p className="text-center text-muted mt-4">No FAQs available for this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordians;
