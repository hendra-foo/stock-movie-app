import classes from "./movies.module.scss";
import MoviesItem from "../MoviesItem/MoviesItem";

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Plot: string;
};

type MoviesProps = {
  movies: Movie[];
  onSelectMovie?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  search?: string;
};

const Movies = ({ movies, onSelectMovie, search }: MoviesProps): JSX.Element => {
  return (
    <div className={classes.root} data-testid="movies-root">
      {movies.map((movie) => (
        <MoviesItem
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
          movie={movie}
          search={search}
        />
      ))}
    </div>
  );
};

export default Movies;
