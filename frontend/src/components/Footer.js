import "../styles/anjana/Footer.css";

import React from "react";

function Footer() {
  const imageStyle = {
    width: "100px",
    height: "auto",
    marginRight: "10px", // Add some spacing between the image and text
  };

  return (
    <div className="footerCont" data-testid="footer" style={{ display: "flex", alignItems: "center" }}>
      <img
        style={imageStyle}
        src={"https://clipground.com/images/logo-tour-and-travel-clipart.jpg"}
        alt="heroimg"
      />
      <p style={{ fontSize: "12px", marginTop: "4px" }}>
      TourVista operates as a division of TourVista Holdings Inc., a prominent global leader in online travel and its associated services.
      </p>
    </div>
  );
}

export default Footer;


/* */
