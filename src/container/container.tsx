import React from "react";
import helpers from "../helpers/helper";
import { IState, IAction } from "../interfaces/interfaces";

const initialState: IState = {
  darkMode: helpers.toBoolean() || false,
  showsAll: [],
  showsView: [],
  page: 1,
  showDetails: {},
  episodesAllSeasons: [],
  currentSeason: [],
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
    case "SHOWS_VIEW_ADD":
      return {
        ...state,
        showsAll: action.payload[1],
        showsView: [...state.showsView, ...action.payload[0]],
      };
    case "SHOWS_All_ADD":
      return {
        ...state,
        showsAll: [...state.showsAll, ...action.payload],
        page: state.page + 1,
      };
    case "SHOW_DETAILS":
      return {
        ...state,
        showDetails: { ...action.payload },
      };
    case "CLEAN_SHOWDETAILS":
      return {
        ...state,
        showDetails: { ...action.payload },
      };
    case "ADD_EPISODES":
      return {
        ...state,
        episodesAllSeasons: action.payload,
      };
    case "SHOW_EPISODES":
      return {
        ...state,
        currentSeason: action.payload,
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
