import React from "react";
import "./header.css";
import aboutImg from "../../../../client/src/mern.webp";
const Header = () => {
  return (
    <div className="header" id="about">
      <div className="headerTitles">
        <h2>MERN APP || Blog writing app</h2>
        <ul>
          <li>
            <b>M</b> - MONGODB (Document database)
          </li>
          <li>
            <b>E</b> - EXPRESS (Node.js web framework)
          </li>
          <li>
            <b>R</b> - REACT JS (Client-side JavaScript framework)
          </li>
          <li>
            <b>N</b> - NODE JS (Premier JavaScript web server)
          </li>
        </ul>
        <p>
          MERN is a full-stack, following the traditional 3-tier architectural
          pattern, including the front-end display tier (React.js), application
          tier (Express.js and Node.js), and database tier (MongoDB).
        </p>
      </div>
      <div className="headerImages">
        <img className="headerImg" src={aboutImg} />
      </div>
    </div>
  );
};

export default Header;
