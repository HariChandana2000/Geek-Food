import React from "react";
import { Image } from "react-bootstrap";
import FooterLogo from "../assets/footer-logo.png";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Image src={FooterLogo} alt='footer-logo' className='footer-log' />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>
      <ul>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Careers</a>
        </li>
        <li>
          <a href='#'>History</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Project</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
      </ul>
      <div className='social-icons'>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaGithub />
        <FaDribbble />
      </div>
    </footer>
  );
};

export default Footer;
