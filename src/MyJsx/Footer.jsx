
import React from "react";
import "../Mycss/Footer.css"; 
import fLogos from "../assets/footer.png"


function Footer() {
  return (
    <div className="container footer">
      <h1 className="footer-h1">Contact</h1>
      <p className="footer-pre">
        I'm currently looking to join a cross-functional team that values improving people's lives
        through accessible design. Or have a project in mind? Let's connect.
      </p>
      <p className="footer-p">ibrhaimmemon930@gmail.com</p>
      <img src={fLogos} alt="instagram , facebook, google logos" />
    </div>
  );
}

export default Footer;
