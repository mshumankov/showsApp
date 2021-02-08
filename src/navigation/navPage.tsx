import React, { useContext, Fragment, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Store } from "../container/container";
import {
  FaTv,
  FaUserAstronaut,
  FaEllipsisV,
  FaPowerOff,
  FaCrow,
} from "react-icons/fa";
import fire from "../auth/fire";

const Navigation = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  const location = useLocation().pathname;
  const [clicked, updateClicked] = useState(false);
  const history = useHistory();

  const signOut = async () => {
    try {
      await fire.auth().signOut();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

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
          {state.currentUser ? (
            <li>
              <div className={location === "/favourites" ? scaleIcon() : ""}>
                <Link to={"/favourites"}>
                  <FaCrow />
                </Link>
              </div>
            </li>
          ) : null}
          {!state.currentUser ? (
            <li>
              <div className={location === "/signIn" ? scaleIcon() : ""}>
                <Link to={"/signIn"}>
                  <FaUserAstronaut />
                </Link>
              </div>
            </li>
          ) : null}
          {state.currentUser ? (
            <li>
              <div>
                <button>
                  <FaPowerOff onClick={signOut} />
                </button>
              </div>
            </li>
          ) : null}
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
