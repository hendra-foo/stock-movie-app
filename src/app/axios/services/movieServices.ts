import axios, { AxiosPromise } from "axios";
import { Movie } from "../../components/Movies/Movies";

export type MovieParams = {
  /** A valid IMDb ID (e.g. tt1285016) */
  i?: string;
  /** Movie title to search for, return one movie */
  t?: string;
  /** Movie title to search for, return list movies */
  s?: string;
  /** Type of result to return. */
  type?: "movie" | "series" | "episode";
  /** Return short or full plot. */
  plot?: "short" | "full";
  /** Year of release. */
  y?: string;
  /** Page number to return. */
  page?: number;
};

type omdbAPIRes = {
  Response: string;
  Search: Movie[];
};

export const movieService = {
  get: (params: MovieParams): Promise<AxiosPromise<omdbAPIRes>> =>
    axios.get("", {
      params: params,
    }),
};
