import React from "react";
import ShowSummary from "../showSummary/showSummary";

const ShowList = (props): JSX.Element => {
  const shows = props.showData;
  let showList = [];

  if (shows) {
    showList = shows.map((show) => (
      <ShowSummary showInfo={show} key={show.id} />
    ));
  }
  console.log(shows);

  return <div className="show-list">{showList}</div>;
};

export default ShowList;
