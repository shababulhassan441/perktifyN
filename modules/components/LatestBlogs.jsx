import React from "react";
import Link from "next/link";

const LatestBlogs = ({ BlogCards }) => {
  return (
    <section
      className=" mt-3 pb-4 md-pt-0 mb-4"
      style={{ backgroundImage: `linear-gradient(0deg, #e6ceff, #ab46e6)` }}
    >
      <div className="padding-y padding-x maxwidth-medium">
        <div className="row flex-column align-items-center justify-content-center ">
          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-column">
              <h3 className="text-white fw-bold text-center">
                Latest Blogs
              </h3>
              <p className="text-white d-inline-block text-center fw-normal ls-normal w-100">
                Get the latest updates, tips & tricks from our experts.
              </p>
            </div>
          </div>

          <a
            href="/blogs"
            className="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none"
          >
            <span>
              <span>
                <i className="bi bi-calendar-check"></i>
              </span>
              <span className="btn-double-text" data-text="See All Blogs">
                See All Blogs
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className=" mt-3 pt-0 ps-11 pe-11 xl-ps-2 xl-pe-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto ">
              <div
                className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-2 gap-2 mx-auto rotateNone "
                style={{ maxWidth: "100%", width: "100%" }}
              >
                {/* <li className="grid-sizer" /> */}
                {/* start blog item */}
                {BlogCards.map((blog, index) => (
                  <div
                    key={blog.$id}
                    className={`col d-flex p-1 smallP bg-white rounded-3 transition-card mx-auto ${
                      index === 0
                        ? "custom-card-0"
                        : index === 1
                        ? "custom-card-1"
                        : index === 2
                        ? "custom-card-2"
                        : index === 3
                        ? "custom-card-3"
                        : index === 4
                        ? "custom-card-4"
                        : ""
                    } custom-card-0`}
                    style={{ maxWidth: "250px" }}
                  >
                    <div className="card border-0  w-100 d-flex flex-column ">
                      <a href={`blogs/${blog.$id}`} className="">
                        <img
                          src={blog.thumbnail || "placeholder-image.webp"}
                          alt="image"
                          className="card-img-top rounded-top"
                        />
                      </a>
                      <div className="card-body p-0 mt-2 pb-2">
                        <p className="card-text fs-8 lh-sm fw-semibold mt-2 text-black mb-0">
                          <a
                            href={`blogs/${blog.$id}`}
                            className="text-black"
                          >
                            {blog.title}
                          </a>
                        </p>
                        <div className="d-flex flex-column fs-6 text-black-50">
                          <span className="fs-6 text-black">
                            {" "}
                            {blog.authorName}
                          </span>
                          <span className="">
                            {new Date(blog.$createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <a href={`blogs/${blog.$id}`} className="">
                          Read More...
                        </a>
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

export default LatestBlogs;
