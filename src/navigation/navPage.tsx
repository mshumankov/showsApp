import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Store } from "../container/container";
import { FaTv, FaUserAstronaut } from "react-icons/fa";

const Navigation = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  const location = useLocation().pathname;

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

  const scaleIcon = () => {
    return "scale";
  };

  return (
    <section className="navigation">
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
  );
};

export default Navigation;
