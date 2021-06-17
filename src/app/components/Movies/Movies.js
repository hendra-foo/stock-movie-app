import classes from "./movies.module.scss";
import MoviesItem from "../MoviesItem/MoviesItem";

const Movies = ({ movies, onSelectMovie, search }) => {
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
