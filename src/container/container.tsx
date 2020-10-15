import React from "react";
import helpers from "../helpers/helper";

interface IState {
  darkMode: boolean;
  showsAll: any[];
  showsView: any[];
}

export interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  darkMode: helpers.toBoolean() || false,
  showsAll: [],
  showsView: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkMode: action.payload };
    case "SHOWS_ALL":
      return {
        ...state,
        showsAll: [...state.showsAll, ...action.payload[1]],
        showsView: [...state.showsView, ...action.payload[0]],
      };
    case "SHOWS_NEW":
      return {
        ...state,
        showsAll: action.payload[1],
        showsView: [...state.showsView, ...action.payload[0]],
      };
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
