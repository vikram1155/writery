import React from "react";
import "../footer/footer.css";
import {
  FaFacebookSquare,
  FaGithub,
  FaGlobe,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="ffooter" id="footer">
          <div class="frow">
            <a href="https://www.facebook.com/vikram.s.967/" target="_blank">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/v1kr4m_s/" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://github.com/vikram1155" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vikram1155/" target="_blank">
              <FaLinkedin />
            </a>
          </div>

          <div class="frow">
            Copyright © 2021 - All rights reserved<br></br><br></br>
            <p className="ffrow">Designed By: <a href="http://www.vikrams.ml/" target="_blank">VIKRAM S</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
