import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import favouritesHelpers from "../services/favouritesHelpers";
import { Store } from "../container/container";

const ActorCard = (props): JSX.Element => {
  const { character, person } = props.actorInfo;
  const { state } = useContext(Store);
  const location = useLocation().pathname;
  const history = useHistory();

  const addFavouriteActor = (): void => {
    favouritesHelpers.addFavouriteActor(state, props.actorInfo);
  };

  const removeFavouriteActor = (): void => {
    favouritesHelpers.removeFavouriteActor(state, props.actorInfo);
    history.push("/");
  };

  const viewImage = () => {
    if (location === "/favourites") {
      return person.image ? person.image.medium : character.image.medium;
    } else {
      return character.image ? character.image.medium : person.image.medium;
    }
  };

  return (
    <div className="actor-card">
      <Link to={`/actor/${person.id}`}>
        <figure>
          <img
            src={viewImage()}
            alt={character ? character.name : person.name}
          />
        </figure>
      </Link>
      <div className="card-info">
        <Link to={`/actor/${person.id}`}>
          <h3>{person.name}</h3>
        </Link>
        {location !== "/favourites" ? <p>as {character.name}</p> : null}
        {location === "/favourites" ? (
          <div className="btn-favourite-normal">
            <FaTimes onClick={removeFavouriteActor} />
          </div>
        ) : (
          <div className="btn-favourite-normal">
            <FaRegHeart onClick={addFavouriteActor} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ActorCard;
