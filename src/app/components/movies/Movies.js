import classes from "./movies.module.scss";
import MoviesItem from "./MoviesItem";

const Movies = ({ movies, onSelectMovie }) => {
  return (
    <div className={classes.moviesRoot}>
      {movies.map((movie) => (
        <MoviesItem key={movie.imdbID} onSelectMovie={onSelectMovie} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
