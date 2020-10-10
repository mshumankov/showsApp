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
      </ul>
    </section>
  );
};

export default Navigation;
