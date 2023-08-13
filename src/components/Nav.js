import React, { useEffect, useState } from "react";
import "./Nav.css";
import { AccountCircleOutlined } from "@mui/icons-material";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return window.removeEventListener("scroll", () => {});
  });

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="netflix-log"
      />
      <div class="nav__menu">
        <ul>
          <li>
            <AccountCircleOutlined />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
