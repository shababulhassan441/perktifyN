"use client";
import React, { useEffect, useState } from "react";
import { BuyPerktify } from "@/lib/actions";

const PricingPlans = ({ pricingCards }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Handle package selection
  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    setShowPopup(true); // Show the popup
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Disable scrolling when popup is visible
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // Disable page scroll
    } else {
      document.body.style.overflow = "auto"; // Enable page scroll
    }
    // return () => {
    //   document.body.style.overflow = "auto"; // Cleanup: Ensure scrolling is re-enabled when component unmounts
    // };
  }, [showPopup]);
  return (
    <section
      id="buysubscription"
      className="pt-5"
      style={{
        // backgroundColor: bodyColor,
        backgroundImage: `linear-gradient(0deg, #e6ceff, #ab46e6)`,

      }}
    >
      <div className="container">
        <div className="col-12 col-xl-8 text-center z-index-1 mx-auto">
          <span className="text-white  fw-600 fs-20 mb-15px d-inline-block">
            Purchase Lifetime Deal With One Payment
          </span>
          <h2 className="text-white  mx-auto mb-50px ls-minus-1px fw-700 ">
            Grab Our Limited-Time Lifetime Deal
          </h2>
          {/* start contact popup */}
          {/* end contact popup */}
        </div>
        <div className="row align-items-center justify-content-center">
          {pricingCards.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-8 pricing-table-style-08 md-mb-30px"
            >
              <div className="pricing-table text-center pt-9 pb-35px px-4 rounded bg-white shadow ">
                <div className="pricing-header p-3">
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #3543f4 , #b627fe)",
                    }}
                    className="badge px-4 py-2 text-white text-capitalize fs-6 fw-bold mb-3"
                  >
                    {item.title}
                  </div>
                  <span className="fs-6 text-muted d-block mt-2 mb-6 text-capitalize">
                    {item.duration} billing
                  </span>
                  <h2 className="text-dark fw-bold">
                    <sup className="fs-4">$</sup>
                    {item.price}
                  </h2>
                  <p className="mb-3 text-muted text-capitalize fs-5">
                    {item.subTitle}
                  </p>
                  <div className="pricing-body p-3">
                    <ul className="list-group">
                      {item.KeyPoints.map((point, i) => (
                        <li
                          key={i}
                          className="list-group-item d-flex align-items-center gap-2 fs-6 text-capitalize border-0 border-bottom"
                        >
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          ></i>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="btn fs-6 py-2 btn-primary w-100 mt-6 rounded-pill"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #3543f4 , #b627fe)",
                    }}
                    onClick={() => handleSelectPackage(item)}
                  >
                    Choose Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Popup */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
        >
          <div
            className="modal-dialog position-relative"
            style={{ maxWidth: "700px", width: "100%" }}
          >
            <div
              className="modal-content p-14"
              style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            >
              <button
                type="button"
                className="btn-close position-absolute mt-2 me-2 top-0 end-0"
                onClick={closePopup}
                aria-label="Close"
              ></button>
              <div className="modal-header">
                <h5 className="modal-title mb-6 mx-auto text-capitalize fw-bolder text-black">
                  {selectedPackage?.title} Plan
                </h5>
              </div>
              <div className="modal-body" style={{ padding: "20px" }}>
                <form action={BuyPerktify}>
                  <input
                    type="hidden"
                    name="pricingPackageId"
                    value={selectedPackage?.$id || ""}
                  />
                  <div className="mb-5">
                    {/* <label className="form-label">Your Name</label> */}
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    {/* <label className="form-label">Email Address</label> */}
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    {/* <label className="form-label">Company Name</label> */}
                    <input
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder="Enter your company"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #3543f4, #b627fe)",
                    }}
                  >
                    Purchase
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingPlans;
