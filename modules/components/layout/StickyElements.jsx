import React from 'react'

const StickyElements = ({linksUrl}) => {
  const {facebook,instagram,linkedin,twitter} = linksUrl
  return (
    <>
      {/* start sticky elements */}
      <div
          className="sticky-wrap z-index-1 d-none d-xl-inline-block"
          data-animation-delay={100}
          data-shadow-animation="true"
        >
          <div className="elements-social social-icon-style-10">
            <ul className="fs-14">
              <li className="me-30px">
                <a
                  className="facebook"
                  href={facebook}
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f me-10px" />
                  <span className="alt-font">Facebook</span>
                </a>
              </li>
              <li className="me-30px">
                <a
                  className="linkedin"
                  href={linkedin}
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in me-10px" />
                  <span className="alt-font">Linkedin</span>
                </a>
              </li>
              <li className="me-30px">
                <a
                  className="twitter"
                  href={twitter}
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter me-10px" />
                  <span className="alt-font">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href={instagram}
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram me-10px" />
                  <span className="alt-font">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end sticky elements */}
    </>
  )
}

export default StickyElements