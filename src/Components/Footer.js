import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaPaypal } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { SiGmail, SiMastercard } from "react-icons/si";
import { RiVisaFill } from "react-icons/ri";
import {Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div id="container">
        <div className="grid-item">
          <div style={{ marginBottom: "5px" }}>Search</div>
          <div><Link to ={'/about'} style={{color:'white',textDecoration:'none'}}>About Us</Link></div>
        </div>
        <div className="grid-item">
            <Link to ={'https://www.facebook.com/shubhamdilipraut.raut'} style={{textDecoration:'none',color:'white'}}>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
                fontSize: "20px",
              }}
            >
              <FaFacebookF />
            </span>
            Facebook
          </div>
          </Link>
          <Link to ={"https://www.instagram.com/raut2808/"} style={{textDecoration:'none',color:'white'}}>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
              }}
            >
              <BsInstagram />
            </span>
            
            Instagram
          </div>
          </Link>
          <Link to ={"https://twitter.com/ShubhamDilipRa1"} style={{textDecoration:'none',color:'white'}}>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
              }}
            >
              <FaTwitter />
            </span>
            Twitter
          </div>
          </Link>
          <Link to={'https://www.youtube.com/@technicalknowledgeandfacts'} style={{textDecoration:'none',color:'white'}}>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
              }}
            >
              <ImYoutube2 />
            </span>
            Youtube
          </div>
          </Link>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
              }}
            >
              <SiGmail />
            </span>
            Gmail
          </div>
        </div>
        <div className="grid-item">
          <div style={{ marginBottom: "5px" }}>Payment Options</div>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
              }}
            >
              <RiVisaFill />
            </span>
            Visa
          </div>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
              }}
            >
              <SiMastercard />
            </span>
            MasterCARD
          </div>
          <div style={{ marginBottom: "5px" }}>
            <span
              style={{
                color: "white",
                border: "none",
                paddingRight: "4px",
                position: "relative",
                top: "2px",
              }}
            >
              <FaPaypal />
            </span>
            PayPal
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
