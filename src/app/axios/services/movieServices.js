import axios from "axios";

export const movieService = {
  get: (params) =>
    axios.get("", {
      params: params,
    }),
};
