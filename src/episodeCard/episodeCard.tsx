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
      console.log(noTagsEpisodeText.length);
    }
  }, [summary, noTagsEpisodeText]);

  if (summary && !noTagsEpisodeText) {
    let shortText = summary.replace(/<\/?\w*\W*>/gm, "");
    changeNoTagsEpisodeText(shortText);
    console.log(shortText);
    console.log(noTagsEpisodeText);
  }

  const moreText = () => {
    changeCurrentEpisodeText(noTagsEpisodeText);
    changeShortText(false);
  };

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
        {/* <div dangerouslySetInnerHTML={{ __html: summary }}></div> */}
        <div>
          {shortText ? (
            <div className="show-text">
              <p>{currentEpisodeText}</p>
              <span onClick={moreText}>see more...</span>
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
