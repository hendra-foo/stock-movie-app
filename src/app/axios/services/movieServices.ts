import axios, { AxiosPromise } from "axios";
import { Movie } from "../../components/Movies/Movies";

export type omdbParams = {
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

export type omdbAPIRes = {
  Response: string;
  Search: Movie[];
} & Movie;

export type movieServiceType = {
  get: (params: omdbParams) => AxiosPromise<omdbAPIRes>;
};

export const movieService: movieServiceType = {
  get: (params) =>
    axios.get("", {
      params: params,
    }),
};
