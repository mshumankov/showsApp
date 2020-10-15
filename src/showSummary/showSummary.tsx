import React from "react";

const showSummary = (props): JSX.Element => {
  const { name, image } = props.showInfo;
  return (
    <div>
      <div>{name}</div>
      <img src={image.medium} alt={`Show ${name}`} />
      <div></div>
    </div>
  );
};

export default showSummary;
