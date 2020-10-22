import React, { Fragment, useEffect, useContext } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import service from "../services/services";
import ShowSummary from "../showSummary/showSummary";
import { FaAngleDown } from "react-icons/fa";

const ShowsPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.showsView.length === 0) {
      service.loadShows(0).then((data) => {
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
    const page = state.page;
    dispatch({
      type: "SHOWS_VIEW_ADD",
      payload: result,
    });

    if (showsAll.length <= 30) {
      service.loadShows(page).then((data) => {
        dispatch({
          type: "SHOWS_All_ADD",
          payload: data,
        });
      });
    }
  };

  console.log(state.showsAll);
  let showList = state.showsView.map((show) => (
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
            <button onClick={addMoreShows}>
              <FaAngleDown />
            </button>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ShowsPage;
