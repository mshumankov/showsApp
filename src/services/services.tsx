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
};

export default service;
