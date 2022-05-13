import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="title">
          <h1 className="headerTitle">cneo</h1>
          <p className="content">I have many ways to contact me.</p>

          <div className="btngrps">
            <button className="linkButtons" onClick={() => navigate("/")}>
              back
            </button>
            <button
              className="linkButtons"
              onClick={() => window.open("https://discord.gg/3EPcp62UnZ")}
            >
              Discord
            </button>
            {/* https://www.youtube.com/channel/UCUhNYWZmE_RlEFHkeESAJHQ */}
            <button
              className="linkButtons"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCUhNYWZmE_RlEFHkeESAJHQ"
                )
              }
            >
              youtube
            </button>
            <button
              className="linkButtons"
              onClick={() => window.open("https://www.instagram.com/cneo.2/")}
            >
              instagram
            </button>
            {/* https://github.com/CneoOnCode */}
            <button
              className="linkButtons"
              onClick={() => window.open("https://github.com/CneoOnCode")}
            >
              github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
