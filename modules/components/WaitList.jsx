"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidError, BiSolidCheckCircle, BiX, BiCheck } from "react-icons/bi";
import { Oval } from "react-loader-spinner";
import { RegisterToWaitList } from "@/appwrite/data";
import "@/styles/globals.css";
import { createNewUserRegistration } from "@/lib/actions";
import { useRouter } from "next/navigation";
import ToggleButton from "react-toggle-button";

const WaitList = ({ waitList, referCode }) => {
  const countries = [
    "United Kingdom",
    "France",
    "Germany",
    "United States",
    "Italy",
    "Canada",
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
    "Gabon",
    "Gambia",
    "Georgia",
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
  const [toggleVipAccess, setToggleVipAccess] = useState(true);
  const [toggleReferralCode, setToggleReferralCode] = useState(true);
  const router = useRouter();
  const formRef = useRef(null); // Create a ref for the form
  const [status, setStatus] = useState(null); // Track the submission status
  const [loading, setLoading] = useState(false); // Track the submission status

  const handleSubmit = async (e) => {
  setLoading(true);
  e.preventDefault();

  try {
    const formData = new FormData(e.target); // Capture form data
    const email = formData.get("email"); // Extract email from form data

    // Call the email validation API
    const emailValidationResponse = await fetch(`/api/validate-email?email=${encodeURIComponent(email)}`);
    const validationResult = await emailValidationResponse.json();
    console.log(validationResult)
    // Check if email validation was successful
    if (validationResult.valid) {
      // Email is valid, proceed with form submission
      formData.append("vipAccess", toggleVipAccess); // Add vipAccess to FormData

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData, // Send FormData directly
      });

      const result = await response.json();

      if (response.ok) {
        if (result.regType === "waitlist") {
          router.replace(`/success/waitlist/${result.message}`);
        } else {
          router.replace(`/success/${result.message}`);
        }
      } else {
        setStatus({
          message: result.message || "Registration failed.",
          type: "error",
        });
      }
    } else {
      // Email is invalid, show error message
      if(validationResult.error){
        setStatus({
        message: "Limit exceeded! Retry later",
        type: "error",
      });
      }else{
        setStatus({
        message: "Invalid email address.",
        type: "error",
      });
      }
    }
  } catch (error) {
    console.error("Submission error:", error);
    setStatus({
      message: "Something went wrong. Please try again.",
      type: "error",
    });
  } finally {
    setLoading(false);
  }
};

  // const handleSubmit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   const formData = new FormData(formRef.current);

  //   // Call your RegisterToWaitList server action
  //   const response = await createNewUserRegistration(formData);

  //   if (response.type === "success") {
  //      router.push(`/success/${response.message}`)
  //     // window.location.href(`/success/${response.message}`)
  //     // formRef.current.reset(); // Reset the form fields after success
  //   } else {
  //     setStatus({ message: response.message, type: "error" });
  //   }

  //   setLoading(false);
  // };

  // ,,,,country,

  // useEffect(
  //   ()=>{
  //     window.location.href(`/success/67596bc8002c6f18cfef`)
  //   },[]
  // )

  // const handleSubmit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData(e.target); // Capture form data
  //     // Explicitly attach the vipAccess variable to the FormData
  //     formData.append("vipAccess", toggleVipAccess); // Replace "true" with the desired value
  //     const response = await fetch("/api/register", {
  //       method: "POST",
  //       body: formData, // Send FormData directly
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       if (result.regType === "waitlist") {
  //         router.replace(`/success/waitlist/${result.message}`);
  //       } else {
  //         router.replace(`/success/${result.message}`);
  //       }
  //     } else {
  //       setStatus({
  //         message: result.message || "Registration failed.",
  //         type: "error",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Submission error:", error);
  //     setStatus({
  //       message: "Something went wrong. Please try again.",
  //       type: "error",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const { title, para ,vipaccessPara,termsExclusions} = waitList;
  return (
    <section id="waitlist" className="overflow-hidden bg-body-tertiary">
      <div
        className="maxwidth-large text-black px-2 "
        style={{
          // background: "linear-gradient(135deg, #df5e93, #62278d, #000f4c)",
          borderRadius: "12px",
        }}
      >
        <div className="row align-items-center  px-3  justify-content-center sm-mb-50px position-relative">
          <div
            className="col-lg-5 col-md-10 position-relative md-mb-30px px-5 "
            data-anime='{ "effect": "slide", "color": "#1c2663", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
          >
            <div
              className="col-12 text-left mb-5"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <h2 className=" fw-700 ls-minus-1px text-uppercase fix-gap">
                {title || ""}
              </h2>
              <p className=" fw-600 mb-5px text-uppercase d-block fix-gap">
                {para || ""}
              </p>
            </div>
          </div>

          <div
            className="col-lg-7  last-paragraph-no-margin"
            data-anime='{ "el": "childs", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 900, "delay": 300, "easing": "easeOutCirc" }'
          >
            {/* <WaitlistForm /> */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                // maxWidth: "600px",
                margin: "0 auto",
                // background: "linear-gradient(to right, #1c2663, #1a2a78)",
                padding: "20px",
                borderRadius: "8px",
                color: "black",
              }}
            >
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <div style={{ flex: 1 }}>
                  <label
                    htmlFor="firstName"
                    style={{ fontWeight: "bold" }}
                  ></label>
                  <input
                    type="text"
                    placeholder=" * FIRST NAME"
                    name="firstName"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label
                    htmlFor="lastName"
                    style={{ fontWeight: "bold" }}
                  ></label>
                  <input
                    type="text"
                    placeholder="* LAST NAME"
                    name="lastName"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    required
                  />
                </div>
              </div>

              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <div style={{ flex: 1 }}>
                  <label htmlFor="email" style={{ fontWeight: "bold" }}></label>
                  <input
                    type="email"
                    placeholder=" * EMAIL ADDRESS"
                    name="email"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label
                    htmlFor="company"
                    style={{ fontWeight: "bold" }}
                  ></label>
                  <input
                    type="text"
                    placeholder="BUSINESS NAME"
                    name="company"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>

              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <div style={{ flex: 1 }}>
                  <label
                    htmlFor="country"
                    style={{ fontWeight: "bold" }}
                  ></label>
                  <select
                    name="country"
                    placeholder="* COUNTRY"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    required
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                    {/* Add more countries as needed */}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="phone" style={{ fontWeight: "bold" }}></label>
                <input
                  type="tel"
                  placeholder="* TELEPHONE"
                  name="phone"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    color: "black",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="referCode" style={{ fontWeight: "bold",display:"flex", gap:"10px", alignItems:"center" }}>
                  Do you have referral Code?{" "}
                  <span>
                    {" "}
                    <ToggleButton
                      inactiveLabel={"NO"}
                      activeLabel={"YES"}
                      value={toggleReferralCode}
                      onToggle={(value) => {
                        setToggleReferralCode(!value);
                      }}
                     
      
                     
                    />
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={referCode}
                  placeholder={
                    toggleReferralCode ? "* Referral Code" : "Referral Code"
                  }
                  name="referCode"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    color: "black",
                  }}
                  required={toggleReferralCode}
                />
              </div>

              <div className="vip-container-wrapper">
                <div className="loyalty-img">
                  <img src="loyalty.png" alt="loyalty" />
                </div>
                <div className="vip-container">
                  {/* <h2 className="vip-heading">
                  Fast Track Your Way to VIP Access
                </h2> */}
                  <div className="w-100 mx-auto mb-2">
                    <img src="joinnow1.gif" alt="join-now" />
                  </div>
                  {/* <p className="vip-description">
                    Unlock VIP status and get ahead by inviting your network!
                  </p> */}
                  <p className="vip-description">
                   {vipaccessPara || ""}
                  </p>
                  <div style={{ marginBottom: "15px" }}>
                    <p style={{ fontWeight: "bold" }}>
                      Would you like VIP access?
                    </p>
                    <div
                      className="vip-options"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <ToggleButton
                        inactiveLabel={"NO"}
                        activeLabel={"YES"}
                        value={toggleVipAccess}
                        onToggle={(value) => {
                          setToggleVipAccess(!value);
                        }}
                        colors={{
                          activeThumb: {
                            base: "rgb(53, 230, 16)",
                          },
                          inactiveThumb: {
                            base: "rgb(255, 5, 5)",
                          },
                          active: {
                            base: "rgb(29, 77, 19)",
                            hover: "rgb(29, 77, 19)",
                          },
                          inactive: {
                            base: "rgb(128, 28, 40)",
                            hover: "rgb(128, 28, 40)",
                          },
                        }}
                        thumbIcon={
                          toggleVipAccess ? (
                            <span role="img" aria-label="Active">
                              <BiCheck />
                            </span>
                          ) : (
                            <span role="img" aria-label="Inactive">
                              <BiX />
                            </span>
                          )
                        }
                        thumbStyle={{
                          // width: 30,
                          // height: 30,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "18px", // Adjust font size for the icons
                          color: "white",
                        }}
                        trackStyle={
                          {
                            // width: 60, // Adjust the track width
                            // height: 30, // Adjust the track height
                          }
                        }
                      />
                    </div>
                    <p
                      style={{
                        fontWeight: "normal",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                     {termsExclusions || ""}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <p className="mb-0 fs-14 lh-26 text-center text-md-start w-90 md-w-100 agreementcheck">
                  <input type="checkbox" required />
                  <span>
                    {" "}
                    By clicking this box you agree to our Privacy Policy
                  </span>
                </p>
              </div>
              <div className="text-center  sm-mt-20px">
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
      </div>
      {/* <button onClick={handleTest}>test</button> */}
    </section>
  );
};

export default WaitList;
