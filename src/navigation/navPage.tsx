import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="navigation">
      <ul>
        <li>
          <Link to={"/"}>Shows</Link>
        </li>
        <li>
          <Link to={"/signIn"}>Sign In</Link>
        </li>
        <li>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
