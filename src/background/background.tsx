import React, { Fragment } from "react";
import Navigation from "../navigation/navPage";

const Background = (): JSX.Element => {
  return (
    <Fragment>
      <Navigation />
      <section className="background-style main"></section>
    </Fragment>
  );
};

export default Background;
