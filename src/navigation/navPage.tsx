import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../container/container";
import { FaTv, FaUserAstronaut } from "react-icons/fa";

const Navigation = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

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

  return (
    <section className="navigation">
      <ul>
        <li>
          <Link to={"/"}>
            <FaTv />
          </Link>
        </li>
        <li>
          <Link to={"/signIn"}>
            <FaUserAstronaut />
          </Link>
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
