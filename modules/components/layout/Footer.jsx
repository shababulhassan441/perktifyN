import React from "react";

const Footer = ({ footerData }) => {
  const {
    footerPara,
    address,
    phone,
    bottomText,
    infoMail,
    salesMail,
    facebook,
    linkedin,
    twitter,
    instagram,
  } = footerData;
  return (
    <>
      {/* start footer */}
      <footer
        className="footer-dark bg-dark-blue pb-0 cover-background background-position-left-top"
        style={{
          backgroundImage: 'url("demo-hosting-footer-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5 md-mb-8 sm-mb-40px">
            {/* start footer column */}
            <div className=" col-lg-4 last-paragraph-no-margin order-sm-1 md-mb-40px xs-mb-30px">
              <p className="w-90 lg-w-100">{footerPara || ""}</p>
              <div className="elements-social social-icon-style-02 mt-20px xs-mt-15px">
                <ul className="small-icon light">
                  <li className="my-0">
                    <a className="facebook" href={facebook} target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li className="my-0">
                    <a className="linkedin" href={linkedin} target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="my-0">
                    <a className="twitter" href={twitter} target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li className="my-0">
                    <a className="instagram" href={instagram} target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-sm-4 xs-mb-30px order-sm-4 order-lg-3">
              <span className="fs-17 fw-500 d-block text-white mb-5px">
                Address
              </span>
              <div className="text-white/60 lh-22 d-inline-flex">
                {address || ""}
              </div>
            </div>
            {/* end footer column */}
            {/* start footer column */}
            <div className=" col-lg-3 col-sm-4 xs-mb-30px order-sm-5 order-lg-4">
              <span className="fs-17 fw-500 d-block text-white mb-5px">
                Lets Connect
              </span>

              <a
                href="mailto:info@sapriseconsultancy.com"
                className="text-white/60 lh-22  d-inline-block mb-10px"
              >
                {infoMail || ""}
              </a>
              <a
                href="mailto:sales@sapriseconsultancy.com"
                className="text-white/60 lh-22  d-inline-block mb-20px"
              >
                {salesMail || ""}
              </a>
              <span className="d-inline-flex text-white w-100">Phone No</span>
              <div className="text-white/60 lh-22 d-inline-flex">
                {phone || ""}
              </div>
            </div>
          </div>
          <div className="border-top border-color-transparent-white-light pt-35px pb-35px text-center">
            <span className="fs-13 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22">
              {`©2024 -  Designed by `}
              <a href="https://techistlab.co.uk" target="_blank">{`${
                bottomText || ""
              }`}</a>
            </span>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </>
  );
};

export default Footer;
