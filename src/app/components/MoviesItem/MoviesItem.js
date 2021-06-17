import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FullscreenPictureModal from "../Modal/FullscreenPictureModal/FullscreenPictureModal";
import classes from "./moviesItem.module.scss";

const MoviesItem = ({ movie, onSelectMovie, search }) => {
  const [open, setOpen] = useState(false);

  const handlePosterClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setOpen(true);
    },
    [setOpen],
  );

  const titleJSX = useMemo(() => {
    const title = movie.Title;
    if (!search) return title;

    const splittedSearch = search.split(" ");
    // filter out single letter words
    const filteredSearch = splittedSearch.filter((word) => word.length > 1);
    const regEx = new RegExp(filteredSearch.join("|"), "gi");
    return title.replace(regEx, (match) => `<span class="text-warning">${match}</span>`);
  }, [movie, search]);

  return (
    <>
      <FullscreenPictureModal
        open={open}
        handleClose={() => setOpen(false)}
        src={movie.Poster}
        alt={`${movie?.Title} poster`}
      />
      <Link className={classes.root} to={`/movie/${movie.imdbID}`} onClick={onSelectMovie}>
        <div className={classes.poster}>
          <img src={movie.Poster} alt={`${movie?.Title} poster`} onClick={handlePosterClick} />
        </div>
        <div className={classes.detail}>
          <h2 className={classes.title}>
            <b dangerouslySetInnerHTML={{ __html: titleJSX }}></b>
          </h2>
          <div className={classes.info}>
            {movie?.Year} • <span className="text-capitalize">{movie?.Type}</span>
          </div>
          <p className={classes.plot}>
            {movie?.Plot ??
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          </p>
        </div>
      </Link>
    </>
  );
};

export default MoviesItem;
