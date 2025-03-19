"use client";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="logo-wrapper">
          <img src="/loader.png" alt="storekwil-logo" />
        </div>
        <Bars
          height="60"
          width="60"
          color="#5e6ffa"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p className="fs-9" >Loading...</p>
      </div>{" "}
      {/* Replace with your preferred loading icon */}
    </div>
  );
};

export default Loader;
