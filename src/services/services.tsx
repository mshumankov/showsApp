import regeneratorRuntime from "regenerator-runtime";
const service = {
  loadShows: async (id) => {
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
  loadShow: async (id) => {
    const res = await fetch(`http://api.tvmaze.com/shows/${id}?embed=cast`);
    const data = await res.json();
    return data;
  },
};

export default service;
