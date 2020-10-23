import service from "../services/services";
import { IState, IAction } from "../interfaces/interfaces";

export const initialLoadShows = async (dispatch: any) => {
  const data = await service.loadShows(0);
  dispatch({
    type: "SHOWS_ALL",
    payload: data,
  });
};

export const addMoreShows = (state: IState, dispatch: any) => {
  const showsAll = [...state.showsAll];
  const showsNew = showsAll.splice(0, 30);
  const result = [showsNew, showsAll];
  const page = state.page;
  dispatch({
    type: "SHOWS_VIEW_ADD",
    payload: result,
  });

  if (showsAll.length <= 30) {
    service.loadShows(page).then((data) => {
      dispatch({
        type: "SHOWS_All_ADD",
        payload: data,
      });
    });
  }
};

export const addShow = async (id, dispatch: any) => {
  const show = await service.loadShow(id);
  dispatch({
    type: "SHOW_DETAILS",
    payload: show,
  });
};
