import React from "react";
import { fetchData } from "@/appwrite/data";

const page = async ({ params }) => {
  // Destructure the dynamic ID from params
  const { id } = params;

  // Fetch all blog data
  const data = await fetchData();
  const blogPosts = data.blogCardsData;

  // Find the specific blog post by its ID
  const blogPost = blogPosts.find((blog) => blog.$id === id);

  // Handle case when no blog post is found
  if (!blogPost) {
    return (
      <section className="container my-5 text-center">
        <h1 className="display-4 text-danger">Blog Post Not Found</h1>
      </section>
    );
  }

  return (
    <>
      <section className="container my-5 ">
        <div className="row justify-content-center blogcontainer-mt">
          <div className="col-md-8">
            {/* Blog Thumbnail */}
            <div className="mb-4">
              <img
                src={blogPost.thumbnail}
                alt={blogPost.title}
                className="img-fluid rounded-3"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Blog Title */}
            <h1
              style={{ fontWeight: "600", lineHeight: "38px" }}
              className="fs-3 mb-3 text-dark blog-title"
            >
              {blogPost.title}
            </h1>

            {/* Blog Author and Date */}
            <div className="mb-4 text-muted d-flex gap-2">
              <span className="fs-5 text-dark">{blogPost.authorName}</span>
              <span>-</span>
              <span>
                {new Date(blogPost.$createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Blog Description */}
            <p className=" text-muted">{blogPost.description}</p>
          </div>
        </div>
      </section>
      <section className="bg-solitude-blue position-relative sm-pb-20px">
        <div className="container">
          <div className="row justify-content-center mb-1">
            <div className="col-lg-7 text-center">
              <span
                className="bg-white box-shadow-quadruple-large text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px"
                data-anime='{ "translateY": [30, 0], "opacity": [0,1], "delay": 500, "staggervalue": 100, "easing": "easeOutQuad" }'
              >
                You may also like
              </span>
              <h3
                className="alt-font text-dark-gray fw-600 ls-minus-1px"
                data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 500, "staggervalue": 100, "easing": "easeOutQuad" }'
              >
                Recent posts
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 px-0">
              <ul
                className="blog-classic blog-wrapper grid grid-2col xl-grid-2col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large"
                data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <li className="grid-sizer" />
                {/* start blog item */}
                {blogPosts.map((blog) => (
                  <li key={blog.$id} className="grid-item">
                    <div className="card shadow-sm border-0 rounded-3">
                      <a href={`${blog.$id}`} className="">
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
                          <a href={`${blog.$id}`} className="text-black">
                            {blog.title}
                          </a>
                        </p>
                        <a href={`${blog.$id}`} className="">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/blogs"
              className="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none mx-auto mt-3"
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
      </section>
    </>
  );
};

export default page;
