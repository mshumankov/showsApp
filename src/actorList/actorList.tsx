import React from "react";
import ActorCard from "../actorCard/actorCard";

const ActorList = (props): JSX.Element => {
  const actors = props.actorsData;
  let castList = [];

  if (actors) {
    castList = actors.map((actor) => (
      <ActorCard actorInfo={actor} key={actor.character.id} />
    ));
  }
  console.log(actors);

  return <div className="cast-list">{castList}</div>;
};

export default ActorList;
