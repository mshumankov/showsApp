import React from "react";

const ActorCard = (props): JSX.Element => {
  const { character, person } = props.actorInfo;
  return (
    <div className="actor-card">
      <figure>
        <img
          src={character.image ? character.image.medium : person.image.medium}
          alt={character.name}
        />
      </figure>
      <div className="card-info">
        <h3>{person.name}</h3>
        <p>as {character.name}</p>
      </div>
    </div>
  );
};

export default ActorCard;
