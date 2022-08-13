import React from "react";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">BlueBus Inc.</h5>
            <p className="grey-text text-lighten-4">
              BlueBus is the world's largest online bus ticket booking service
              trusted by over 25 million happy customers globally. redBus offers
              bus ticket booking through its website,iOS and Android mobile apps
              for all major routes.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  bluebus.ph
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  bluebus@gmail.com
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  facebook/bluebus
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  twitter/bluebus
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2022 Copyright
          <a className="grey-text text-lighten-4 right" href="#!">
            Visit us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
