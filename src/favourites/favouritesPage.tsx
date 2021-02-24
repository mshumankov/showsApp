import React, { Fragment, useEffect, useState, useContext } from "react";
import Navigation from "../navigation/navPage";
import ShowList from "../showsList/showList";
import service from "../services/services";
import { Store } from "../container/container";
import ActorList from "../actorList/actorList";

const Favourites = (): JSX.Element => {
  const { state } = useContext(Store);
  const [shows, getShows] = useState([]);
  const [actors, getActors] = useState([]);

  useEffect(() => {
    if (state.currentUser) {
      const uid = state.currentUser.uid;

      service.getFavourites(uid).then((data) => {
        if (data) {
          data.shows ? getShows(data.shows) : null;
          data.actors ? getActors(data.actors) : null;
        }
      });
    }
  }, []);

  return (
    <Fragment>
      <Navigation />
      <main className="main fauvorites">
        <section
          className={
            actors.length > 0 || shows.length > 0 ? "content" : "content height"
          }
        >
          <section className="header-fav">
            <h2>FAVOURITES</h2>
          </section>
          <hr />
          <section className="shows-fav">
            <h2>Shows</h2>
            <div>
              <ShowList showData={shows} />
            </div>
          </section>
          <hr />
          <section className="actors-fav">
            <h2>Actors</h2>
            <div>
              <ActorList actorsData={actors} />
            </div>
          </section>
        </section>
      </main>
    </Fragment>
  );
};

export default Favourites;
