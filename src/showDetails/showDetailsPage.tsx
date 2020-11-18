import React, { Fragment, useContext, useEffect } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import { addShow, cleanState, addEpisodes } from "../actions/actions";
import ActorCard from "../actorCard/actorCard";
import SeasonButton from "../seasonButton/seasonButtont";
import Episode from "../episodeCard/episodeCard";
import { FaDivide } from "react-icons/fa";

const ShowDetails = (props): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  const id = props.match.params.id;

  const {
    name,
    summary,
    image,
    network,
    runtime,
    status,
    language,
    type,
    genres,
    premiered,
    officialSite,
    schedule,
    rating,
  } = state.showDetails;

  useEffect(() => {
    addShow(id, dispatch);
    addEpisodes(id, dispatch);

    // return () => {
    //   cleanState("showDetails", dispatch);
    // };
  }, []);

  let castList: undefined | JSX.Element[];

  if (state.showDetails._embedded) {
    castList = state.showDetails._embedded.cast.map((actor) => (
      <ActorCard actorInfo={actor} key={actor.character.id} />
    ));
  }

  let seasonsButtons:
    | undefined
    | JSX.Element[] = state.episodesAllSeasons.map((season) => (
    <SeasonButton season={season} key={season[0].season} />
  ));

  let episodes: undefined | JSX.Element = state.currentSeason.map((episode) => (
    <Episode episodeData={episode} key={episode.number} />
  ));
  console.log(state.currentSeason);

  return (
    <Fragment>
      <Navigation />
      <main className="main show-details">
        <section className="content">
          <section className="show-info">
            <article>
              <header>
                <h1>{name}</h1>
              </header>
              <div dangerouslySetInnerHTML={{ __html: summary }}></div>
            </article>
            <ul>
              {network ? (
                <li>
                  <span>Web channel: </span>
                  <p>{network.name}</p>
                </li>
              ) : null}
              {runtime ? (
                <li>
                  <span>Runtime: </span>
                  <p>{runtime}</p>
                </li>
              ) : null}
              {language ? (
                <li>
                  <span>Language: </span>
                  <p>{language}</p>
                </li>
              ) : null}
              {status ? (
                <li>
                  <span>Status: </span>
                  <p>{status}</p>
                </li>
              ) : null}
              {type ? (
                <li>
                  <span>Show Type: </span>
                  <p>{type}</p>
                </li>
              ) : null}
              {genres ? (
                <li>
                  <span>Genres: </span>
                  <p>{genres.join(", ")}</p>
                </li>
              ) : null}
              {premiered ? (
                <li>
                  <span>Premiered: </span>
                  <p>{premiered}</p>
                </li>
              ) : null}
              {officialSite ? (
                <li>
                  <span>Official Site: </span>
                  <p>{officialSite}</p>
                </li>
              ) : null}
              {network ? (
                <li>
                  <span>Country: </span>
                  <p>{network.country.name}</p>
                </li>
              ) : null}
              {schedule ? (
                <li>
                  <span>Schedule: </span>
                  {schedule.days ? <p>{schedule.days.join(", ")}</p> : null}
                  {schedule.time ? <p>{schedule.time}</p> : null}
                </li>
              ) : null}
            </ul>
            <figure>
              {image ? (
                <img src={image.original} alt={name} />
              ) : (
                <div>No Image</div>
              )}
            </figure>
          </section>
          <hr />
          <section className="cast">
            <h2>Cast</h2>
            <div className="cast-list">{castList}</div>
          </section>
          <hr />
          <section className="episodes">
            <h2>Episodes</h2>
            <div className="seasons">
              <h3>Season</h3>
              <div className="seasons-buttons">{seasonsButtons}</div>
            </div>
            <div className="episodes-list">{episodes}</div>
          </section>
        </section>
      </main>
    </Fragment>
  );
};

export default ShowDetails;
