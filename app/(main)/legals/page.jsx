import { fetchData } from "@/appwrite/data";
import React from "react";

const Legals = async () => {
  const data = await fetchData();
  const legalData = data?.LegalsData ?? [];
  const filteredData = legalData.find((doc) => doc.id === "terms");

  //its for getting the heading, title and cover image for the lagal page
  const { coverImage, Heading, subHeading } = filteredData;

  return (
    <section className="" style={{overflowX:"hidden"}}>
      <div
        className="w-100 padding-Y135 position-relative"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-xl-12 col-lg-10 text-center position-relative page-title-double-large">
            <div className="d-flex flex-column justify-content-center ">
              <h1 className="text-white alt-font ls-minus-1px fw-bold">
                {Heading || ""}
              </h1>
              <p
                style={{ maxWidth: "1000px" }}
                className="text-white d-inline-block fw-normal ls-normal mx-auto fs-4"
              >
                {subHeading || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-5 ps-11 pe-11 xl-ps-2 xl-pe-2"
        // style={{ backgroundColor: "#ab46e6" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 m-auto ">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                {/* <div className="grid-sizer" /> */}
                {/* start legal item */}
                {legalData &&
                  legalData.map((legal) => (
                    <div key={legal.$id} className="col d-flex">
                      <div className="card shadow-sm border-0 rounded-3 w-100 d-flex flex-column">
                        <a href={`legals/${legal.link}`} className="">
                          <img
                            src={legal.image || "placeholder-image.webp"}
                            alt="image"
                            className="card-img-top rounded-top"
                            style={{ height: "220px", objectFit: "cover" }}
                          />
                        </a>
                        <div className="card-body d-flex flex-column flex-grow-1">
                          <p className="card-text fs-4 fw-semibold mb-1 text-black">
                            <a
                              href={`legals/${legal.link}`}
                              className="text-black"
                            >
                              {legal.LegalTitle}
                            </a>
                          </p>
                          {/* <a href={`legals/${legal.$id}`} className="">
                            Read More ...
                          </a> */}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legals;
