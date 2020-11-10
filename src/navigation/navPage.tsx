import React, { useContext, Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Store } from "../container/container";
import { FaTv, FaUserAstronaut, FaEllipsisV } from "react-icons/fa";

const Navigation = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  const location = useLocation().pathname;
  const [clicked, updateClicked] = useState(false);

  const changeMode = (): void => {
    const value = localStorage.getItem("darkMode");

    if (value === null) {
      localStorage.setItem("darkMode", "true");
      dispatch({
        type: "CHANGE_MODE",
        payload: true,
      });
    } else {
      if (value === "true") {
        localStorage.setItem("darkMode", "false");
        dispatch({
          type: "CHANGE_MODE",
          payload: false,
        });
      } else {
        localStorage.setItem("darkMode", "true");
        dispatch({
          type: "CHANGE_MODE",
          payload: true,
        });
      }
    }
  };

  const changeMenu = () => {
    if (clicked) {
      updateClicked(false);
    } else {
      updateClicked(true);
    }
  };

  const scaleIcon = () => {
    return "scale";
  };

  return (
    <Fragment>
      <section className="nav-bar">
        <h1>Gump</h1>
        <div onClick={changeMenu}>
          <FaEllipsisV />
        </div>
      </section>
      <section className={`navigation ${clicked ? "show-navigation" : ""}`}>
        <ul>
          <li>
            <div className={location === "/" ? scaleIcon() : ""}>
              <Link to={"/"}>
                <FaTv />
              </Link>
            </div>
          </li>
          <li>
            <div className={location === "/signIn" ? scaleIcon() : ""}>
              <Link to={"/signIn"}>
                <FaUserAstronaut />
              </Link>
            </div>
          </li>
          <li>
            <label className="switch">
              <input
                type="checkbox"
                checked={state.darkMode ? true : false}
                onChange={changeMode}
              />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default Navigation;
