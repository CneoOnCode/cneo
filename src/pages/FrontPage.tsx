import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Container() {
  let navigate = useNavigate();
  const goTo = (link: string) => {
    navigate(link);
  };
  return (
    <div>
      <div className="header">
        <div className="title">
          <h1 className="headerTitle">cneo</h1>
          <div className="btngrps">
            <button className="linkButtons" onClick={() => navigate("/about")}>
              about
            </button>
            <button
              className="linkButtons"
              onClick={() => navigate("/socials")}
            >
              socials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
