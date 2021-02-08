import service from "../services/services";
import { IFavourites, IShow } from "../interfaces/interfaces";

const favouritesHelpers = {
  addFavouriteShow: (state, showInfo) => {
    const uid = state.currentUser.uid;

    service
      .getFavourites(uid)
      .then((data) => {
        console.log(data);
        if (data.shows) {
          console.log(data);
          let dataFav: IFavourites = data;
          let shows = dataFav.shows.filter(
            (show: IShow) => show.id !== showInfo.id
          );
          shows.push(showInfo);
          dataFav.shows = shows;
          service.updateFavourites(uid, dataFav);
        } else {
          if (data) {
            const favourites = data;
            favourites.shows = [showInfo];
            service.createFavourites(uid, favourites);
          } else {
            const favourites = {
              shows: [showInfo],
            };
            service.createFavourites(uid, favourites);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  addFavouriteActor: (state, actorInfo) => {
    const uid = state.currentUser.uid;

    service
      .getFavourites(uid)
      .then((data) => {
        console.log(data);
        if (data.actors) {
          console.log(data);
          let dataFav: IFavourites = data;
          let actors = dataFav.actors.filter(
            (actor) => actor.person.id !== actorInfo.person.id
          );
          actors.push(actorInfo);
          dataFav.actors = actors;
          service.updateFavourites(uid, dataFav);
        } else {
          if (data) {
            const favourites = data;
            favourites.actors = [actorInfo];
            service.createFavourites(uid, favourites);
          } else {
            const favourites = {
              actors: [actorInfo],
            };
            service.createFavourites(uid, favourites);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  removeFavouriteShow: (state, showInfo) => {
    const uid = state.currentUser.uid;

    service.getFavourites(uid).then((data: IFavourites) => {
      let dataFav: IFavourites = data;
      const updatedShows = dataFav.shows.filter(
        (show) => show.id !== showInfo.id
      );
      dataFav.shows = updatedShows;
      service.updateFavourites(uid, dataFav);
    });
  },
  removeFavouriteActor: (state, actorInfo) => {
    const uid = state.currentUser.uid;

    service.getFavourites(uid).then((data: IFavourites) => {
      let dataFav: IFavourites = data;
      const updatedShows = dataFav.actors.filter(
        (actor) => actor.person.id !== actorInfo.person.id
      );
      dataFav.actors = updatedShows;
      service.updateFavourites(uid, dataFav);
    });
  },
};

export default favouritesHelpers;
