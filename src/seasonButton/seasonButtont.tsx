import React, { useContext } from "react";
import { showEpisodes } from "../actions/actions";
import { Store } from "../container/container";

const SeasonButton = (props): JSX.Element => {
  const { season } = props;
  const { state, dispatch } = useContext(Store);
  let isActive = false;

  const seasonEpisodes = () => {
    showEpisodes(season, dispatch);
  };

  if (state.currentSeason.length > 0) {
    if (season[0].season === state.currentSeason[0].season) {
      isActive = true;
    }
  }
  return (
    <button className={isActive ? "active" : ""} onClick={seasonEpisodes}>
      {season[0].season}
    </button>
  );
};

export default SeasonButton;
