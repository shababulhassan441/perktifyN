
import { BuyPerktify } from "@/lib/actions";
import React from "react";

const BuySubscription = () => {
  return (
    <section
    id="buysubscription"
      className="big-section cover-background"
      style={{ backgroundImage: "url(https://via.placeholder.com/1920x1100)" ,
        backgroundColor:"#191e3d"
      }}
    >
      <div className="opacity-extra-medium" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8 text-center z-index-1">
            <span className="text-white fs-20 mb-15px d-inline-block">
            Purchase Lifetime Deal With One Payment
            </span>
            <h2 className="text-white mx-auto mb-50px ls-minus-1px fw-500 text-shadow-double-large">
            Grab Our Limited-Time Lifetime Deal
            </h2>
            <a
              href="#contact-form"
              className="btn btn-extra-large btn-base-color btn-box-shadow text-transform-none btn-rounded popup-with-form btn-hover-animation-switch"
              style={{backgroundImage:"linear-gradient(to right, #3543f4 , #b627fe)"}}
            >
              <span>
                <span className="btn-text">Buy Perktify</span>
                <span className="btn-icon">
                  <i className="feather icon-feather-arrow-right" />
                </span>
                <span className="btn-icon">
                  <i className="feather icon-feather-arrow-right" />
                </span>
              </span>
            </a>
            {/* start contact popup */}
            <div
              id="contact-form"
              className="container p-0 contact-form-style-01 position-relative text-center mfp-hide"
            >
              <div className="row g-0  d-flex justify-content-center">
                {/* <div
                  className="col-lg-5 cover-background md-h-600px xs-h-400px"
                  style={{
                    backgroundImage:
                      'url("https://via.placeholder.com/1082x1082")',
                  }}
                /> */}
                <div className="col-lg-7">
                  <div className="p-15 lg-p-10 bg-white">
                    {/* <span className="fs-18 mb-10px">
                    Unlock Premium Features
                    </span> */}
                    <h3 className="d-inline-block fw-600 text-dark-gray mb-10 ls-minus-1px">
                    Get Perktify Dashboard
                    </h3>
                    <form
                      action={BuyPerktify}
                    >
                      <div className="position-relative form-group mb-20px">
                        <span className="form-icon">
                          <i className="bi bi-emoji-smile" />
                        </span>
                        <input
                          type="text"
                          name="name"
                          className="form-control required"
                          placeholder="Enter your name*"
                        />
                      </div>
                      <div className="position-relative form-group mb-20px">
                        <span className="form-icon">
                          <i className="bi bi-envelope" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="form-control required"
                          placeholder="Enter your email*"
                        />
                      </div>
                      <div className="position-relative form-group mb-20px">
                        <span className="form-icon">
                        <i className="bi bi-chat-square-dots" />
                        </span>
                        <input
                          type="text"
                          name="company"
                          className="form-control"
                          placeholder="Enter your company*"
                        />
                      </div>
                      <div className="position-relative form-group form-textarea">
                        <input type="hidden" name="redirect" defaultValue="" />
                        <button
                          className="btn btn-medium btn-dark-gray btn-box-shadow btn-round-edge w-100 mt-20px submit"
                          type="submit"
                          style={{backgroundImage:"linear-gradient(to right, #3543f4 , #b627fe)"}}
                        >
                          Purchase
                        </button>
                        <div className="form-results mt-20px d-none" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* end contact popup */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySubscription;
