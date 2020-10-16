import React, { Fragment, useEffect, useContext } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import service from "../services/services";
import ShowSummary from "../showSummary/showSummary";

const ShowsPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.showsView.length === 0) {
      service.loadShows("0").then((data) => {
        dispatch({
          type: "SHOWS_ALL",
          payload: data,
        });
      });
    }
  }, []);

  const addMoreShows = () => {
    const showsAll = [...state.showsAll];
    const showsNew = showsAll.splice(0, 30);
    const result = [showsNew, showsAll];
    dispatch({
      type: "SHOWS_NEW",
      payload: result,
    });
  };

  console.log(state.showsAll);
  let showList = state.showsView.map((show) => (
    <ShowSummary showInfo={show} key={show.id} />
  ));

  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <section className="content">
          <div>I am shows</div>
          <div className="show-list">{showList}</div>
          <div>
            <button onClick={addMoreShows}>Add Shows</button>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ShowsPage;
