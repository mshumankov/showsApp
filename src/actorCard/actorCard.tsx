import React from "react";
import { Link } from "react-router-dom";

const ActorCard = (props): JSX.Element => {
  const { character, person } = props.actorInfo;

  return (
    <div className="actor-card">
      <Link to={`/actor/${person.id}`}>
        <figure>
          <img
            src={character.image ? character.image.medium : person.image.medium}
            alt={character.name}
          />
        </figure>
      </Link>
      <div className="card-info">
        <Link to={`/actor/${person.id}`}>
          <h3>{person.name}</h3>
        </Link>
        <p>as {character.name}</p>
      </div>
    </div>
  );
};

export default ActorCard;
