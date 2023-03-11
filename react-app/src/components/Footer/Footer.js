import React from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <h3 className="footer-title">Created By</h3>
      <ul className="footer-list">
        <li className="anthony-box">Anthony Hung Vu
          <a href="https://github.com/hvu24">
          <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anthony-v-67a490214/">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="henry-box">Henry Tam
          <a href="https://github.com/henrytamm">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/henry-t95/">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="minh-box">Minh Phan
          <a href="https://github.com/Minh-Phan01">
          <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/minhphan1/">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="rachel-box">Rachel Bohmbach
          <a href="https://github.com/rachbohm">
          <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rachel-bohmbach-46a04621b/">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
