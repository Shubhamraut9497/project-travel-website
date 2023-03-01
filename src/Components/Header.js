import React from 'react'
import { BsCart4, BsInfoCircle } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
import { MdAssignmentInd } from "react-icons/md";
import {Link } from 'react-router-dom'
const Header=()=>{
    return (
        <>
         <div id="mains">
        <div className="logo">
          <span style={{ color: "blue", fontSize: "40px" }}>U</span>niquic
          <span style={{ color: "red" }}>K</span>
        </div>
        <div className="navbar">
          <ul>
            <Link to ={'/cart'} className="shu">
            <li>
              Cart
              <BsCart4
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  position: "relative",
                  top: "1px",
                  left:'3px'
                }}
              />
            </li>
            </Link>
            <Link to ={"/login"} className="shu">
            <li>
              Login{" "}
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  textAlign: "center",
                  position: "relative",
                  top: "2px",
                  left:'3px'
                }}
              >
                <CgLogIn />
              </span>
            </li>
            </Link>
            <Link to ={'/signup'} className="shu">
            <li>
              SignUp
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  textAlign: "center",
                  position: "relative",
                  top: "2px",
                  left:'3px'
                }}
              >
                <MdAssignmentInd />
              </span>
            </li>
            </Link>
            <Link to ={'/about'} className="shu">
            <li>
              About
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  textAlign: "center",
                  position: "relative",
                  top: "2px",
                  left: "3px",
                }}
              >
                <BsInfoCircle />
              </span>
            </li>
            </Link>
          </ul>
        </div>
      </div>
        </>
    )
}
export default Header;