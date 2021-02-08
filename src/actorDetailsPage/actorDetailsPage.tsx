import React, { Fragment, useContext, useEffect, useState } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import service from "../services/services";
import ShowList from "../showsList/showList";
import { FaRegHeart } from "react-icons/fa";
import favouritesHelpers from "../services/favouritesHelpers";

const ActorDetails = (props): JSX.Element => {
  const id = props.match.params.id;
  const { state } = useContext(Store);
  const [actorShows, getActorShows] = useState([]);
  const [actorInfo, getActorInfo] = useState(null);

  useEffect(() => {
    service.loadActorShows(id).then((data) => {
      const showsInfo = data.map((data) => data._embedded.show);
      getActorShows(showsInfo);
    });
    let currentActorInfo;

    try {
      const data = state.showDetails._embedded.cast.find(
        (data) => data.person.id === Number(id)
      );
      getActorInfo(data.person);
      if (data) {
        currentActorInfo = true;
      }
    } catch (error) {
      console.log(error);
    }

    if (!currentActorInfo) {
      service.loadActordata(id).then((data) => {
        getActorInfo(data);
      });
    }
  }, []);

  const addFavouriteActor = (): void => {
    favouritesHelpers.addFavouriteActor(state, actorInfo);
  };

  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <header className="content header-actor">
          {actorInfo ? <h1>{actorInfo.name}</h1> : null}
          <hr />
        </header>
        <section className="content actor-details">
          <section className="actor-data">
            {actorInfo ? (
              <figure>
                {actorInfo.image ? (
                  <img src={actorInfo.image.original} alt={actorInfo.name} />
                ) : null}
              </figure>
            ) : null}
            {actorInfo ? (
              <article>
                <h3>Person Info</h3>
                <ul className="list-items">
                  {actorInfo.gender ? (
                    <li>Gender: {actorInfo.gender}</li>
                  ) : null}
                  {actorInfo.birthday ? (
                    <Fragment>
                      <li>
                        Age: {2021 - Number(actorInfo.birthday.split("-")[0])}
                      </li>
                      <li>Birthday: {actorInfo.birthday}</li>
                    </Fragment>
                  ) : null}
                  {actorInfo.country ? (
                    <li>Born in: {actorInfo.country.name}</li>
                  ) : null}
                </ul>
                <FaRegHeart onClick={addFavouriteActor} />
              </article>
            ) : null}
          </section>
          <hr />
          <section className="actor-shows">
            <h2>Known For</h2>
            <div>
              <ShowList showData={actorShows} />
            </div>
          </section>
        </section>
      </main>
    </Fragment>
  );
};

export default ActorDetails;
