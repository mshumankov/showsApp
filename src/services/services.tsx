import { IFavourites, IShow } from "../interfaces/interfaces";

const service = {
  loadShows: async (id: number) => {
    const res = await fetch(
      `http://api.tvmaze.com/shows?page=${id ? `${id}` : "0"}`
    );
    const data = await res.json();

    if (id === 0) {
      const viewShows = data.splice(0, 30);
      const result = [viewShows, data];
      return result;
    } else {
      return data;
    }
  },
  loadShow: async (id: string) => {
    const res = await fetch(`http://api.tvmaze.com/shows/${id}?embed=cast`);
    const data = await res.json();
    return data;
  },
  loadEpisodes: async (id: string) => {
    const res = await fetch(`http://api.tvmaze.com/shows/${id}/episodes`);
    const data = await res.json();
    return data;
  },
  loadActorShows: async (id: number) => {
    const res = await fetch(
      `http://api.tvmaze.com/people/${id}/castcredits?embed=show`
    );
    const data = await res.json();
    return data;
  },
  loadActordata: async (id: number) => {
    const res = await fetch(`http://api.tvmaze.com/people/${id}`);
    const data = await res.json();
    return data;
  },
  loadSearchShows: async (keyWord: string) => {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${keyWord}`);
    const data = await res.json();
    return data;
  },
  createFavourites: async (id: string, data: object) => {
    const res = await fetch(
      `https://shows-app-gump-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/favourites.json`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseInfo = await res.json();
    return responseInfo;
  },
  getFavourites: async (id: string) => {
    const res = await fetch(
      `https://shows-app-gump-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/favourites.json`
    );
    const data = await res.json();

    return data;
  },
  updateFavourites: async (id: string, data: IFavourites) => {
    const res = await fetch(
      `https://shows-app-gump-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/favourites.json`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseInfo = await res.json();
    console.log(responseInfo);
    return responseInfo;
  },
};

export default service;
