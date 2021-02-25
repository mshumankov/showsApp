import React, { Fragment, useContext, useEffect, useState } from "react";
import Navigation from "../navigation/navPage";
import { Store } from "../container/container";
import { addShow, cleanState, addEpisodes } from "../actions/actions";
import ActorList from "../actorList/actorList";
import SeasonButton from "../seasonButton/seasonButtont";
import Episode from "../episodeCard/episodeCard";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import favouritesHelpers from "../services/favouritesHelpers";

const ShowDetails = (props): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  const id = props.match.params.id;
  const [currentShowText, changeCurrentShowText] = useState("");
  const [shortText, changeShortText] = useState(false);
  const [noTagsShowText, changeNoTagsShowText] = useState("");

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

    return () => {
      cleanState("CLEAN_SHOWDETAILS", dispatch);
    };
  }, []);

  useEffect(() => {
    if (noTagsShowText) {
      if (noTagsShowText.length > 1050) {
        const shortText = noTagsShowText.substr(0, 1050);
        changeCurrentShowText(shortText);
        changeShortText(true);
      } else {
        changeCurrentShowText(noTagsShowText);
      }
    }
  }, [summary, noTagsShowText]);

  // let castList: undefined | JSX.Element[];

  // if (state.showDetails._embedded) {
  //   castList = state.showDetails._embedded.cast.map((actor) => (
  //     <ActorCard actorInfo={actor} key={actor.character.id} />
  //   ));
  // }

  let seasonsButtons:
    | undefined
    | JSX.Element[] = state.episodesAllSeasons.map((season) => (
    <SeasonButton season={season} key={season[0].season} />
  ));

  let episodes: undefined | JSX.Element = state.currentSeason.map((episode) => (
    <Episode episodeData={episode} key={episode.number} />
  ));

  const addFavouriteShow = (): void => {
    favouritesHelpers.addFavouriteShow(state, state.showDetails);
  };

  if (summary && !noTagsShowText) {
    let shortText = summary.replace(/<\/?\w*\W*>/gm, "");
    changeNoTagsShowText(shortText);
  }

  const moreText = () => {
    changeCurrentShowText(noTagsShowText);
    changeShortText(false);
  };

  return (
    <Fragment>
      <Navigation />
      <main className="main show-details">
        <section className="content">
          <section className="show-info">
            <article>
              <header>
                <h1>{name}</h1>
                {rating ? (
                  rating.average ? (
                    <div className="rating">
                      <FaRegStar />
                      <div>{rating.average}</div>
                    </div>
                  ) : null
                ) : null}
              </header>
              <div className="btn-favourite-big">
                <FaRegHeart onClick={addFavouriteShow} />
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: summary }}></div> */}
              <div>
                {shortText ? (
                  <div className="show-text">
                    <p>{currentShowText}</p>
                    <span onClick={moreText}>see more...</span>
                  </div>
                ) : (
                  <div>
                    <p>{currentShowText}</p>
                  </div>
                )}
              </div>
            </article>
            <ul className="list-items">
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
                  {schedule.days ? (
                    <p className="schedule">{schedule.days.join(", ")}</p>
                  ) : null}
                  {schedule.time ? <p>{schedule.time}</p> : null}
                </li>
              ) : null}
            </ul>
            <figure>
              {image ? (
                <img src={image.original} alt={name} />
              ) : (
                <div>Missing Image</div>
              )}
            </figure>
          </section>
          <hr />
          <section className="cast">
            <h2>Cast</h2>
            {state.showDetails._embedded ? (
              <ActorList actorsData={state.showDetails._embedded.cast} />
            ) : null}
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
