import React, { Fragment, useEffect, useContext } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import service from "../services/services";
import ShowSummary from "../showSummary/showSummary";
import { FaAngleDown } from "react-icons/fa";
import { initialLoadShows, addMoreShows } from "../actions/actions";

const ShowsPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.showsView.length === 0) {
      initialLoadShows(dispatch);
    }
  }, []);

  const addShows = (): void => {
    addMoreShows(state, dispatch);
  };

  console.log(state.showsAll);
  let showList: JSX.Element[] = state.showsView.map((show) => (
    <ShowSummary showInfo={show} key={show.id} />
  ));

  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <header className="content show-header">
          <h1>TV SHOWS</h1>
          <hr />
        </header>
        <section className="content">
          <div className="show-list">{showList}</div>
          <div className="angle-down-btn">
            <button onClick={addShows}>
              <FaAngleDown />
            </button>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ShowsPage;
