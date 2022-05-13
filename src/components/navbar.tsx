import React from "react";
import "../App.css";

function navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/admin">admin</a>
        </li>
        <li className="logo">
          <a href="/">cneo</a>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
