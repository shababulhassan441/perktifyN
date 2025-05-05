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
        // style={{ backgroundImage: "url('/demo-hosting-footer-bg.jpg')" }}
        className="pb-0 cover-background background-position-left-top footerGradient "
      >
        <div className="">
          <div
            className="row justify-content-between sm-mb-40px maxWidth-Full"
            // style={{ maxWidth: "100%", width: "95%", margin: "0 auto" }}
          >
            <div className="d-none d-lg-flex col-12 col-md-6 col-lg-2 mb-4">
              <div
                className=" d-flex justify-content-center align-items-center border bg-white rounded-circle overflow-hidden"
                style={{ aspectRatio: "1/1", height: "200px" }}
              >
                <img
                  src="/logoblack.png"
                  className="mt-4"
                  style={{
                    objectFit: "contain",
                    width: "70%",
                    height: "70%",
                  }}
                  alt="Logo"
                />
              </div>
            </div>

            {/* Footer Column 4 (Dummy content) */}
            <div className="col-12 col-md-6 col-lg-2 mb-4">
              <a href="/legals" className="fs-17 fw-500 d-block text-white mb-5px text-center">
                Legals
              </a>
              <ul className="text-white lh-22 list-unstyled text-center d-flex flex-column gap-2">
                <li>
                  <a href="/legals/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/legals/cookies">Cookie Policy</a>
                </li>
                <li>
                  <a href="/legals/use">Terms of use</a>
                </li>
                <li>
                  <a href="/legals/terms">Terms & conditions</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-2 mb-4 d-flex flex-column gap-3 align-items-center">
              <span className="fs-17 fw-500 d-block text-white mb-5px">
                Let's Connect
              </span>
              <a
                href="mailto:info@sapriseconsultancy.com"
                className="text-white/60 lh-22 d-inline-block mb-10px"
              >
                {infoMail || ""}
              </a>
              <a
                href="mailto:sales@sapriseconsultancy.com"
                className="text-white/60 lh-22 d-inline-block mb-20px"
              >
                {salesMail || ""}
              </a>
              <span className="text-white text-center">Phone No</span>
              <div className="text-white lh-22 d-inline-flex">
                {phone || ""}
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-2 mb-4 text-center">
              <p className=" text-center fs-5 mb-1 text-white">
                Where to Find Us
              </p>
              <span className="fs-17 fw-500 d-block text-center text-white mb-5px mt-3 mb-1">
                City of London
              </span>
              <div className="text-white d-inline-flex text-center">
                {address || ""}
              </div>
            </div>

            <div className=" d-flex flex-column  col-12 col-md-6 col-lg-2 mb-4">
              <p className=" text-center fs-4 mb-1 text-white">Get In touch</p>
              <div className="d-flex justify-content-center elements-social social-icon-style-02 mt-10px xs-mt-15px">
                <ul className="small-icon light">
                  <li className="my-0">
                    <a className="facebook" href={facebook} target="_blank">
                      <i className="fa-brands fa-facebook-f " />
                    </a>
                  </li>
                  <li className="my-0">
                    <a className="linkedin" href={linkedin} target="_blank">
                      <i className="fa-brands fa-linkedin-in " />
                    </a>
                  </li>
                  <li className="my-0">
                    <a className="twitter" href={twitter} target="_blank">
                      <i className="fa-brands fa-twitter " />
                    </a>
                  </li>
                  <li className="my-0">
                    <a className="instagram" href={instagram} target="_blank">
                      <i className="fa-brands fa-instagram " />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="fs-8 text-white">
                <p className="mb-1 text-center ">Phone No</p>
                <p className="text-center  mb-1">{phone || ""}</p>
              </div>
              <div className="text-white">
                <p className="mb-1 text-center">Email</p>
                <p className="text-center mb-1"> {infoMail || ""}</p>
              </div>
            </div>
          </div>

          <div className="border-top border-black py-3 text-center">
            <span className="fs-6 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22 text-white">
              {`©${new Date().getFullYear()} - Designed by `}
              <a href="https://techistlab.co.uk" target="_blank">
                {bottomText || ""}
              </a>
            </span>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </>
  );
};

export default Footer;
