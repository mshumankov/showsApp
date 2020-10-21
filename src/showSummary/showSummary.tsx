import React from "react";

const showSummary = (props): JSX.Element => {
  const { name, image } = props.showInfo;
  return (
    <div className="showSummary-container">
      <figure>
        <img src={image ? image.medium : ""} alt={`Show ${name}`} />
      </figure>
      <div>{name}</div>
    </div>
  );
};

export default showSummary;
