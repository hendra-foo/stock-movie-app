import { useCallback } from "react";
import { Link } from "react-router-dom";
import classes from "./movies.module.scss";

const MoviesItem = ({ movie, onSelectMovie }) => {
  const handlePosterClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <Link className={classes.movieRoot} to={`/movie/${movie.imdbID}`} onClick={onSelectMovie}>
      <div className={classes.moviePoster} onClick={handlePosterClick}>
        <img src={movie.Poster} alt={`${movie?.Title} poster`} />
      </div>
      <div className={classes.movieDetail}>
        <h2 className={classes.movieTitle}>
          <b>{movie?.Title}</b>
        </h2>
        <div className={classes.movieInfos}>
          {movie?.Year} • <span className="text-capitalize">{movie?.Type}</span>
        </div>
        <p className={classes.moviePlot}>
          {movie?.Plot ??
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </p>
      </div>
    </Link>
  );
};

export default MoviesItem;
