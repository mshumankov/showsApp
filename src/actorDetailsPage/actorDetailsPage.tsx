import React, { Fragment, useContext, useEffect, useState } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import service from "../services/services";
import ShowList from "../showsList/showList";

const ActorDetails = (props): JSX.Element => {
  const id = props.match.params.id;
  const { state, dispatch } = useContext(Store);
  const actorInfo = state.showDetails._embedded.cast.find(
    (data) => data.person.id === Number(id)
  );
  const { image, name, gender, country, birthday } = actorInfo.person;
  const [actorShows, getActorShows] = useState([]);

  useEffect(() => {
    service.loadActorShows(id).then((data) => {
      const showsInfo = data.map((data) => data._embedded.show);
      getActorShows(showsInfo);
    });
  }, []);
  console.log(actorShows);

  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <header className="content header-actor">
          <h1>{actorInfo.person.name}</h1>
          <hr />
        </header>
        <section className="content actor-details">
          <section className="actor-data">
            <figure>
              <img src={image.original} alt={name} />
            </figure>
            <article>
              <h3>Person Info</h3>
              <ul className="list-items">
                <li>Gender: {gender}</li>
                <li>Age: {2020 - Number(birthday.split("-")[0])}</li>
                <li>Birthday: {birthday}</li>
                <li>Born in: {country.name}</li>
              </ul>
            </article>
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
