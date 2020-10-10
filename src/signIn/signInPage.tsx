import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navPage";

const SignIn = (): JSX.Element => {
  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <section className="content">
          <div>I am signIn</div>
        </section>
      </main>
    </Fragment>
  );
};

export default SignIn;
