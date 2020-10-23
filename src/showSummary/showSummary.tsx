import React from "react";
import { Link } from "react-router-dom";

const ShowSummary = (props): JSX.Element => {
  const { name, image, id } = props.showInfo;

  return (
    <div className="showSummary-container">
      <Link to={`/show/${id}`}>
        <figure>
          <img src={image ? image.medium : ""} alt={`Show ${name}`} />
        </figure>
      </Link>
      <Link to={`/show/:${id}`}>
        <div>{name}</div>
      </Link>
    </div>
  );
};

export default ShowSummary;
