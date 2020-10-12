import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../container/container";
import helpers from "../helpers/helper";

const Navigation = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const changeMode = () => {
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

  const isChecked = () => {
    return "fg";
  };

  console.log(state.darkMode);
  return (
    <section className="navigation">
      <ul>
        <li>
          <Link to={"/"}>Shows</Link>
        </li>
        <li>
          <Link to={"/signIn"}>Sign In</Link>
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
