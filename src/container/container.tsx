import React from "react";
import helpers from "../helpers/helper";

interface IState {
  darkMode: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  darkMode: helpers.toBoolean() || false,
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
}

const Container = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <div
        className={
          state.darkMode
            ? "page-container dark-view"
            : "page-container light-view"
        }
      >
        {children}
      </div>
    </Store.Provider>
  );
};

export default Container;
