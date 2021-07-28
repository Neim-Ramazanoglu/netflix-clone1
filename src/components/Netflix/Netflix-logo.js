import React from "react";
import "./netflix.css";

function Logo() {
  return (
    <div>
      <div className="logo1">
        <img className="logo" src="./images/netflix-logo.png"></img>
      </div>
      <div className="navbar1">
        <span className="navbar">Ana sayfa</span>
        <span className="navbar">Diziler</span>
      </div>
    </div>
  );
}

export default Logo;
