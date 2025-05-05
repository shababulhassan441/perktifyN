import { fetchData } from "@/appwrite/data";
import PdfFile from "@/modules/components/PdfFile";
import React from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = async ({ params }) => {
  const data = await fetchData();
  const legalData = data?.LegalsData ?? [];
  const filteredData = legalData.find((doc) => doc.id === params.slug);
  const { LegalTitle, image, ContentTitle, Content, pdf_file_id } =
    filteredData;

  return (
    <section className="mb-2">
      {" "}
      <div
        className="w-100 padding-Y135 position-relative"
        style={{
          backgroundImage: `url(${image})`,
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
                {LegalTitle || ""}
              </h1>
              <div className="text-white">
                <div className="d-flex align-items-center gap-2 justify-content-center">
                  <div>
                    <FaHome size={20} />
                  </div>
                  <a href="/" className="text-white">
                    Home
                  </a>
                  <div>
                    <MdOutlineKeyboardArrowRight size={25} />
                  </div>
                  <a href="/legals" className="text-white">
                    Legals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 pt-0 ps-11 pe-11 xl-ps-2 xl-pe-2 ">
        <div className="col-lg-10 mx-auto">
          <div
            className="accordion accordion-style-02 "
            id="accordion-style-02"
            data-active-icon="icon-feather-chevron-up"
            data-inactive-icon="icon-feather-chevron-down"
            data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            {ContentTitle.map((item, index) => (
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
                      <span className="fw-600 fs-18">{item}</span>
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
                    <p>{Content[index]}</p>
                  </div>
                </div>
              </div>
            ))}
            {ContentTitle.length === 0 && (
              <p className="text-center text-muted mt-4">
                No FAQs available for this category.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto " style={{maxWidth:"600px"}}>
        <PdfFile fileId={pdf_file_id} />
      </div>
    </section>
  );
};

export default page;
