import { fetchData } from "@/appwrite/data";
import React from "react";
import Link from "next/link";
const BlogPage = async () => {
  const data = await fetchData();
  const blogHead = data?.blogPageData ?? {};
  const BlogCards = data?.blogCardsData ?? [];
  const { heading, paragraph, coverImage } = blogHead;

  return (
    <section className=" d-flex flex-column gap-3  bg-solitude-blue">
      <div
        className="container max-width-l  border py-5 position-relative"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        ></div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-xl-12 col-lg-10 text-center position-relative page-title-double-large">
            <div className="d-flex flex-column justify-content-center ">
              <h1 className="text-white alt-font ls-minus-1px fw-bold">
                {heading || ""}
              </h1>
              <p style={{maxWidth:"1000px"}} className="text-white d-inline-block fw-normal ls-normal mx-auto">
                {paragraph || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 ps-11 pe-11 xl-ps-2 xl-pe-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 m-auto ">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {/* <div className="grid-sizer" /> */}
                {/* start blog item */}
                {BlogCards &&
                  BlogCards.map((blog) => (
                    <div key={blog.$id} className="col d-flex">
                      <div className="card shadow-sm border-0 rounded-3 w-100 d-flex flex-column">
                        <a href={`blogs/${blog.$id}`} className="">
                          <img
                            src={blog.thumbnail || "placeholder-image.webp"}
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
                              href={`blogs/${blog.$id}`}
                              className="text-black"
                            >
                              {blog.title}
                            </a>
                          </p>
                          <a href={`blogs/${blog.$id}`} className="">
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
      </div>
    </section>
  );
};

export default BlogPage;
