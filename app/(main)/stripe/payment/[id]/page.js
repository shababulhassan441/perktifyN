import { fetchCustomer } from "@/appwrite/data";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";


const PurchaseSuccessPage = async ({ params }) => {
  const customerID = (await params).id;
  console.log("customers=>..",customerID,"END")
  const customer = await fetchCustomer(customerID);
  console.log("THIS IS customerID..=>",customerID,"END")


  if (!customer)
    return (
      <section className="d-flex justify-content-center align-items-center vh-60 px-4 ">
        <div className="col-md-3 col-lg-3 text-center">
          <div className="card shadow-lg p-4 border-0 rounded-3">
            <div className="card-body">
              <IoMdCloseCircle className="text-danger" size={60} />
              <h3 className="mt-3 text-danger">Purchase Failed!</h3>
              <p className="text-muted fs-5">
                Whoops
              </p>
              <div className="mt-4">
                <a href="/" className="btn text-white bg-primary px-4 py-2" style={{backgroundImage:"linear-gradient(to right, #3543f4 , #b627fe)"}}>
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else
    return (
      <section className="d-flex justify-content-center align-items-center vh-60 px-4 ">
        <div className="col-md-3 col-lg-5 text-center">
          <div className="card shadow-lg p-4 border-0 rounded-3">
            <div className="card-body">
              <FaCheckCircle className="text-success" size={60} />
              <h3 className="mt-3 text-success">Purchase Successful!</h3>
              <p className="text-muted fs-5">
                Thank you for your order. Your purchase has been successfully
                processed.
              </p>
              <div className="mt-4">
                <a href="/" className="btn text-white bg-primary px-4 py-2" style={{backgroundImage:"linear-gradient(to right, #3543f4 , #b627fe)"}}>
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
    
      </section>
    );
};

export default PurchaseSuccessPage;
