import React from "react";
import Link from "next/link";

const LatestBlogs = ({ BlogCards }) => {
  return (
    <section className="pb-0 md-pt-0 mb-4">
      <div className="padding-y padding-x maxwidth-medium">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column">
              <h3 className="text-dark-gray fw-bold">Latest Blogs</h3>
              <p className="text-dark-gray d-inline-block fw-normal ls-normal w-100">
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

      <div className="pt-0 ps-11 pe-11 xl-ps-2 xl-pe-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <ul className="blog-grid blog-wrapper grid-loading grid grid-2col xl-grid-2col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                <li className="grid-sizer" />
                {/* start blog item */}
                {BlogCards.map((blog) => (
                  <li key={blog.$id} className="grid-item">
                    <div className="card shadow-sm border-0 rounded-3">
                      <a href={`blogs/${blog.$id}`} className="">
                        <img
                          src={blog.thumbnail || "placeholder-image.webp"}
                          alt="image"
                          className="card-img-top rounded-top"
                        />
                      </a>
                      <div className="card-body">
                        <div className="d-flex gap-2 align-items-center fs-6 text-black-50">
                          <span className="fs-5 text-black">
                            {" "}
                            {blog.authorName}
                          </span>
                          <span>-</span>
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
                        <p className="card-text fs-4 fw-semibold mt-2 text-black">
                          <a href={`blogs/${blog.$id}`} className="text-black">
                            {blog.title}
                          </a>
                        </p>
                        <a href={`blogs/${blog.$id}`} className="">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
