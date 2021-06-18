import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FullscreenPictureModal from "../modals/FullscreenPictureModal/FullscreenPictureModal";
import type { Movie } from "../Movies/Movies";
import classes from "./moviesItem.module.scss";

type MovieProps = {
  movie: Movie;
  onSelectMovie: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  search: string;
};

const MoviesItem = ({ movie, onSelectMovie, search }: MovieProps): JSX.Element => {
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
        onClose={() => setOpen(false)}
        src={movie.Poster}
        alt={`${movie?.Title} poster`}
      />
      <Link
        className={classes.root}
        to={`/movie/${movie.imdbID}`}
        onClick={onSelectMovie}
        data-testid="link-anchor"
      >
        <div className={classes.poster}>
          <img
            src={movie.Poster}
            alt={`${movie?.Title} poster`}
            onClick={handlePosterClick}
            data-testid="poster"
          />
        </div>
        <div className={classes.detail}>
          <h2 className={classes.title}>
            <b dangerouslySetInnerHTML={{ __html: titleJSX }} data-testid="title"></b>
          </h2>
          <div className={classes.info}>
            <span data-testid="year">{movie?.Year}</span> •{" "}
            <span className="text-capitalize">{movie?.Type}</span>
          </div>
          <p className={classes.plot}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&quot;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Link>
    </>
  );
};

export default MoviesItem;
