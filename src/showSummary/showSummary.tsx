import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FaRegHeart, FaTimes, FaRegStar } from "react-icons/fa";
import { Store } from "../container/container";
import favouritesHelpers from "../services/favouritesHelpers";

const ShowSummary = (props): JSX.Element => {
  const { name, image, id, rating } = props.showInfo;
  const { state } = useContext(Store);
  const history = useHistory();
  //console.log(props.showInfo);

  const addFavouriteShow = (): void => {
    favouritesHelpers.addFavouriteShow(state, props.showInfo);
  };

  const removeFavouriteShow = (): void => {
    favouritesHelpers.removeFavouriteShow(state, props.showInfo);
    history.push("/");
  };
  const location = useLocation().pathname;

  return (
    <div className="showSummary-container">
      <Link to={`/show/${id}`}>
        <figure>
          <img src={image ? image.medium : ""} alt={`Show ${name}`} />
        </figure>
      </Link>
      <Link to={`/show/:${id}`}>
        <div className="header-show">
          <h5>{name}</h5>
        </div>
      </Link>
      <div className="rating-wrap">
        {rating.average ? (
          <div className="rating">
            <FaRegStar />
            <div>{rating.average}</div>
          </div>
        ) : null}
        {location === "/favourites" ? (
          <div className="btn-favourite">
            <FaTimes onClick={removeFavouriteShow} />
          </div>
        ) : (
          <div className="btn-favourite">
            <FaRegHeart onClick={addFavouriteShow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowSummary;
