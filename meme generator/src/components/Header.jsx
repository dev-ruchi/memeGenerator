import React from "react";
import trollFace from "./assets/Troll Face.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img src={trollFace} className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </div>
  );
}
