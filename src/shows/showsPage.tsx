import React, { Fragment, useEffect, useContext } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import ShowList from "../showsList/showList";
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

  console.log(state.showsView);

  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <header className="content show-header">
          <h1>TV SHOWS</h1>
          <hr />
        </header>
        <section className="content">
          <ShowList showData={state.showsView} />
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
