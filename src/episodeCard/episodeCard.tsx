import React, { useState, useEffect } from "react";

const Episode = (props) => {
  const { image, number, summary, runtime, airdate, name } = props.episodeData;
  const [currentEpisodeText, changeCurrentEpisodeText] = useState("");
  const [shortText, changeShortText] = useState(false);
  const [noTagsEpisodeText, changeNoTagsEpisodeText] = useState("");

  useEffect(() => {
    if (noTagsEpisodeText) {
      if (noTagsEpisodeText.length > 300) {
        const shortText = noTagsEpisodeText.substr(0, 300);
        changeCurrentEpisodeText(shortText);
        changeShortText(true);
      } else {
        changeCurrentEpisodeText(noTagsEpisodeText);
      }
    }
  }, [summary, noTagsEpisodeText]);

  if (summary && !noTagsEpisodeText) {
    let shortText = summary.replace(/<\/?\w*\W*>/gm, "");
    changeNoTagsEpisodeText(shortText);
  }

  const moreText = () => {
    changeCurrentEpisodeText(noTagsEpisodeText);
    changeShortText(false);
  };

  return (
    <div className="episode-card">
      <figure>
        {image ? (
          <img
            src={image.original ? image.original : image.medium}
            alt={name}
          />
        ) : null}
      </figure>
      <div className="episode-info">
        <div className="header">
          <h5>
            {number}. {name}
          </h5>
          <span className="main-info">{runtime}m</span>
          <span className="main-info">{airdate}</span>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: summary }}></div> */}
        <div>
          {shortText ? (
            <div className="show-text">
              <p>{currentEpisodeText}</p>
              <span onClick={moreText}> see more...</span>
            </div>
          ) : (
            <div>
              <p>{currentEpisodeText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Episode;
