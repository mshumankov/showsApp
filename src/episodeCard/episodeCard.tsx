import React from "react";

const Episode = (props) => {
  const { image, number, summary, runtime, airdate, name } = props.episodeData;
  return (
    <div className="episode-card">
      <figure>
        <img src={image.original} alt={name} />
      </figure>
      <div className="episode-info">
        <div className="header">
          <h5>
            {number}. {name}
          </h5>
          <span>{runtime}m</span>
          <span>{airdate}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      </div>
    </div>
  );
};

export default Episode;
