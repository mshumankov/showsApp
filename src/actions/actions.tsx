import service from "../services/services";
import { IState, IAction } from "../interfaces/interfaces";

export const initialLoadShows = async (dispatch: any) => {
  const data = await service.loadShows(0);
  dispatch({
    type: "SHOWS_ALL",
    payload: data,
  });
};

export const addMoreShows = async (state: IState, dispatch: any) => {
  const showsAll = [...state.showsAll];
  const showsNew = showsAll.splice(0, 30);
  const result = [showsNew, showsAll];
  const page = state.page;
  dispatch({
    type: "SHOWS_VIEW_ADD",
    payload: result,
  });

  if (showsAll.length <= 30) {
    const data = await service.loadShows(page);
    dispatch({
      type: "SHOWS_All_ADD",
      payload: data,
    });
  }
};

export const addShow = async (id: string, dispatch: any) => {
  const show = await service.loadShow(id);
  dispatch({
    type: "SHOW_DETAILS",
    payload: show,
  });
};

export const showEpisodes = async (season: object[], dispatch: any) => {
  dispatch({
    type: "SHOW_EPISODES",
    payload: [...season],
  });
};

export const addEpisodes = async (id: string, dispatch: any) => {
  const episodesAll = await service.loadEpisodes(id);

  let episodesBySeason = [];
  let seasonNum: number = 1;

  function addSeasons(): void {
    const season = episodesAll.filter(
      (episode) => episode.season === seasonNum
    );

    if (season.length > 0) {
      episodesBySeason.push(season);
      seasonNum++;
      addSeasons();
    }
  }

  if (episodesAll.length > 0) {
    addSeasons();
  }

  dispatch({
    type: "ADD_EPISODES",
    payload: episodesBySeason,
  });

  showEpisodes(episodesBySeason[0], dispatch);
};

export const cleanState = async (state: string, dispatch: any) => {
  dispatch({
    type: state,
    payload: {},
  });
};

export const searchShows = async (keyword: string, dispatch: any) => {
  const data = await service.loadSearchShows(keyword);
  const dataShows = data.map((showScore) => showScore.show);
  dispatch({
    type: "SEARCH_RESULT",
    payload: dataShows,
  });
};
