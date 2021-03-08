import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer--fadeBottom" />
      <div className="footer_content">
        <div className="logo_content">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
          />
        </div>
        <div className="support">
          <h1>Clone is AWESOME</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
