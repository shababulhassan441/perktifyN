"use client";

import React, { useRef, useState } from "react";
import { BiSolidError, BiSolidCheckCircle } from "react-icons/bi";
import { useFormState, useFormStatus } from "react-dom";
import { Oval } from "react-loader-spinner";
import { RegisterToWaitList } from "@/appwrite/data";
const initialState = {
  message: "",
  type: "",
};

const JoinOurWaitlist = ({ waitList }) => {
  // const { pending } = useFormStatus();
  // const [state, formAction] = useFormState(RegisterToWaitList, initialState);
  const countries = [
    "United Kingdom",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];


  const formRef = useRef(null); // Create a ref for the form
  const [status, setStatus] = useState(null); // Track the submission status
  const [loading, setLoading] = useState(false); // Track the submission status

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    
    const formData = new FormData(formRef.current);
    
    // Call your RegisterToWaitList server action
    const response = await RegisterToWaitList(formData);

    // if (response.type === "success") {
      setStatus({ message: "Request Submitted Successfully", type: "success" });
      formRef.current.reset(); // Reset the form fields after success
    // } else {
    //   setStatus({ message: response.message, type: "error" });
    // }

    setLoading(false)
  };

  // ,,,,country,

  const { title, para } = waitList;
  return (
    <section id="waitlist" className="position-relative bg-very-light-gray">
      <div
        className="container"
        data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <div className="row mb-3 w-50 mx-auto">
          <div className="col text-center">
            <h2 className="fw-700 alt-font text-dark-gray ls-minus-2px">
              {title || ""}
            </h2>
            <p className="fs-5">{para || ""}</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center position-relative z-index-1">
          <div className="col-xl-10 col-lg-12">
            {/* start contact form */}
            <form  ref={formRef} onSubmit={handleSubmit} className="row contact-form-style-02">
              <div className="col-md-6 mb-30px">
                <input
                  className="input-name border-radius-4px border-color-white box-shadow-double-large required"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-md-6 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large required"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="col-md-6 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large required"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-md-6 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large required"
                  type="tel"
                  name="telephone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="col-md-12 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large required"
                  type="text"
                  name="company"
                  placeholder="Business"
                  required
                />
              </div>
              <div className="col-md-12 mb-30px ">
                <div className="select">
                  <select
                    className="border-radius-4px border-color-white box-shadow-double-large"
                    name="country"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-xl-6 col-md-7">
                <p className="mb-0 fs-14 lh-26 text-center text-md-start w-90 md-w-100 agreementcheck">
                  <input type="checkbox" required />
                  <span>
                    {" "}
                    By clicking this box you agree to our Privacy Policy
                  </span>
                </p>
              </div>
              <div className="col-xl-6 col-md-5 text-center text-md-end sm-mt-20px">
                <button
                  className="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge  text-transform-none"
                  type="submit"
                >
                  <span>
                    <span>
                      <i className="bi bi-calendar-check" />
                    </span>

                    {loading ? (
                      <Oval
                        visible={true}
                        height="25"
                        width="25"
                        strokeWidth="4"
                        color="#fff"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      <span className="btn-double-text" data-text="Sign Up">
                        Sign Up
                      </span>
                    )}
                  </span>
                </button>
              </div>
            </form>
            {/* end contact form */}
          </div>
        </div>
        {status?.message && status?.type === "error" && (
          <p className="alert-box error">
            <BiSolidError className="text-2xl" />
            {status?.message}
          </p>
        )}
        {status?.message && status?.type === "success" && (
          <p className="alert-box success">
            <BiSolidCheckCircle className="text-2xl" />
            {status?.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default JoinOurWaitlist;
