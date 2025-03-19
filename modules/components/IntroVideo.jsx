"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const VideoSection = () => {
  // Function to copy the current page URL with '/intro' appended
  const copyShareLink = () => {
    const currentUrl = window.location.href;
    const newUrl = `${currentUrl}intro`; // Append '/intro' to the current URL

    navigator.clipboard
      .writeText(newUrl) // Copy the modified URL
      .then(() => {
        toast.success("Video link copied to clipboard!"); // Show toast notification
      })
      .catch((err) => {
        toast.error("Failed to copy video link!");
        console.error("Failed to copy video link: ", err);
      });
  };

  return (
    <section className="mx-w-large mx-auto paddingX mt-5">
      <div className="row justify-content-center">
        {/* Video Section */}
        <div className="col-md-10 col-12">
          <div className="ratio ratio-16x9">
            <video className="rounded-4 shadow-sm" autoPlay muted loop controls>
              <source src="/StorekwilExplainerVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Share Button Section */}
        <div className="col-12 text-center mt-4">
          <button
            onClick={copyShareLink}
            className="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none"
          >
            <span>
              <span className="btn-double-text" data-text="Share Video Link">
                Share Video Link
              </span>
              <span>
                <i className="bi bi-share me-2"></i>
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Toast Container */}
      {/* <ToastContainer position="top-center" autoClose={3000} />  */}
    </section>
  );
};

export default VideoSection;
