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
  // console.log("blogpost", blogPost);

  //find the recent Blogs excepts the selected one
  const RecentBlogs = blogPosts.filter((blog) => blog.$id !== id);

  // Handle case when no blog post is found
  if (!blogPost) {
    return (
      <section className="container my-5 text-center">
        <h1 className="display-4 text-danger">Blog Post Not Found</h1>
      </section>
    );
  }

  return (
    <section className="bg-solitude-blue d-flex flex-column blogDetailPagePaddingTop">
      <div className="container my-3  ">
        <div
          className="row justify-content-center bg-white shadow-sm mx-auto rounded-3"
          style={{ maxWidth: "800px" }}
        >
          <div className="p-0">
            {/* Blog Thumbnail */}
            <div className="mb-4 ">
              <img
                src={blogPost.thumbnail || "/placeholder-image.webp"}
                alt={blogPost.title}
                className="img-fluid rounded-3"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="px-4">
              <h1
                style={{ fontWeight: "600", lineHeight: "38px" }}
                className="fs-1 mb-3 text-dark blog-title text-center"
              >
                {blogPost.title}
              </h1>

              {/* Blog Author and Date */}
              <div className="mb-4 text-muted d-flex flex-column align-items-center">
                <span className="fs-5 text-dark">By {blogPost.authorName}</span>
                <span>
                  Published on{" "}
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
            {/* Blog Title */}
          </div>
        </div>
      </div>
      <div className="bg-solitude-blue position-relative sm-pb-20px">
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
            <div className="container px-0">
              <div className="row">
                <div className="col-11 m-auto ">
                  <div
                    className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
                    data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                  >
                    {/* <div className="grid-sizer" /> */}
                    {/* start blog item */}
                    {RecentBlogs &&
                      RecentBlogs.map((blog) => (
                        <div key={blog.$id} className="col d-flex ">
                          <div className="card shadow-sm  rounded-3 w-100 d-flex flex-column border">
                            <a href={`${blog.$id}`} className="">
                              <img
                                src={
                                  blog.thumbnail || "/placeholder-image.webp"
                                }
                                alt="image"
                                className="card-img-top rounded-top"
                                style={{ height: "250px", objectFit: "cover" }}
                              />
                            </a>
                            <div className="card-body d-flex flex-column flex-grow-1">
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
                                <a
                                  href={`${blog.$id}`}
                                  className="text-black"
                                >
                                  {blog.title}
                                </a>
                              </p>
                              <a href={`/${blog.$id}`} className="">
                                Read More ...
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
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
      </div>
    </section>
  );
};

export default page;
