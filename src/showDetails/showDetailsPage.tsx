import React, { Fragment, useContext, useEffect } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import { addShow } from "../actions/actions";

const ShowDetails = (props) => {
  const { state, dispatch } = useContext(Store);
  const id = props.match.params.id;
  console.log(state.showDetails);

  useEffect(() => {
    addShow(id, dispatch);
  }, []);
  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <section className="content">
          <div>{id}</div>
        </section>
      </main>
    </Fragment>
  );
};

export default ShowDetails;
