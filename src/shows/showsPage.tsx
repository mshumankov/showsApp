import React, { Fragment, useEffect, useContext, useState } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import ShowList from "../showsList/showList";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import {
  initialLoadShows,
  addMoreShows,
  searchShows,
  cleanState,
} from "../actions/actions";

const ShowsPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  const [searchValue, getSearchValue] = useState("");
  console.log(state.currentUser);

  useEffect(() => {
    if (state.showsView.length === 0) {
      initialLoadShows(dispatch);
    }
    return () => {
      cleanState("CLEAN_SEARCHDATA", dispatch);
    };
  }, []);

  const addShows = (): void => {
    addMoreShows(state, dispatch);
  };

  const inputValue = (e: any) => {
    const word = e.target.value.toLowerCase();
    getSearchValue(word);
  };

  const getSearchShow = (e) => {
    e.preventDefault();
    if (searchValue) {
      cleanState("CLEAN_SEARCHDATA", dispatch);
      searchShows(searchValue, dispatch);
    }
  };

  console.log(state.searchData);

  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <header className="content show-header">
          <h1>TV SHOWS</h1>
          <form onSubmit={getSearchShow}>
            <button type="submit">
              <FaSearch />
            </button>
            <input type="text" onChange={inputValue} />
          </form>
        </header>
        <div className="content">
          <hr />
        </div>
        {state.searchData.length > 0 ? (
          <section className="content">
            <ShowList showData={state.searchData} />
          </section>
        ) : null}
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
