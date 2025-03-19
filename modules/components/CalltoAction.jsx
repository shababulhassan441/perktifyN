import React from 'react'

const CalltoAction = () => {
  return (
    <section className="overflow-hidden">
        <div className="container">
          <div
            className="row align-items-center justify-content-center border-radius-8px p-4 xs-p-7 text-center text-lg-start g-0 cover-background"
            style={{
                background: "linear-gradient(135deg, #df5e93, #62278d, #000f4c)",
            }}
            data-bottom-top="transform:scale(1.1, 1.1) translateY(30px);"
            data-top-bottom="transform:scale(1.0, 1.0) translateY(-30px);"
          >
            <div className="col-lg-6 col-md-9 md-mb-10px icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle border border-2 border-color-transparent-white-light me-30px xs-me-25px">
                  <img
                    src="images/demo-hosting-home-icon.svg"
                    className="w-50px h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <h5 className="d-inline-block fw-600 text-white mb-0">
                    Get a head start on success— waitlist members gain early
                    entry!
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              {/* <div className="text-white d-inline-block last-paragraph-no-margin me-20px xs-m-10px">
                <p className="opacity-8 d-inline-block">Starting at only</p>
                <span className="fw-600 d-inline-block text-decoration-line-bottom">
                  $2.78 per month
                </span>
              </div> */}
              <a
                href="/"
                className="btn btn-medium btn-yellow btn-rounded fw-600 btn-switch-text btn-box-shadow"
              >
                <span>
                  <span
                    className="btn-double-text"
                    data-text="Join our waitlist"
                  >
                    Join our waitlist
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CalltoAction