import "./../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DiAtom,
  DiCode,
  DiExtjs,
  DiGithub,
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiUnitySmall,
  DiVim,
  DiVisualstudio,
} from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import "./../App.css";
const icons: Array<any> = [
  <SiCsharp />,
  <DiJavascript1 />,
  <DiGithub />,
  <DiJava />,
  <DiPython />,
  <DiReact />,
  <DiAtom />,
  <DiVisualstudio />,
  <DiUnitySmall />,
  <DiVim />,
  <DiCode />,
  <FaDiscord />,
];
export default function AboutPage() {
  const renderIcons = icons.map((icon: any) => {
    return <li>{icon}</li>;
  });
  let navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="title">
          <h1 className="headerTitle">cneo</h1>
          <p className="content">
            Hello <br></br> I am cneo, I am a 13 year old <br></br>
            He/Him
            <br></br>
            Game Developer
            <br></br>
            Software Engineer
            <br></br>
            React, JS, C#
            <br></br>
            Developer for 2 Years
          </p>
          <ul className="icons">{renderIcons}</ul>

          <div className="btngrps">
            <button className="linkButtons" onClick={() => navigate("/")}>
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
