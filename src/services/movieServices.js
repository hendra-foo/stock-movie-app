import axios from "axios";

export const movieService = {
  list: (params) =>
    axios.get("", {
      params: params,
    }),
  detail: ({ imdbID }) =>
    axios.get("", {
      params: {
        i: imdbID,
        plot: "full",
      },
    }),
};
