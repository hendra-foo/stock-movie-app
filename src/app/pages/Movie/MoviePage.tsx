import { useState } from "react";
import { useParams } from "react-router";
import { movieService, movieServiceType, omdbAPIRes } from "../../axios/services/movieServices";
import FullscreenPictureModal from "../../components/modals/FullscreenPictureModal/FullscreenPictureModal";
import { useRequest } from "../../hooks/useRequest";
import classes from "./moviePage.module.scss";

const MoviePage = (): JSX.Element => {
  const { imdbID } = useParams<{ imdbID?: string }>();
  const [open, setOpen] = useState(false);

  const { data } = useRequest<Parameters<movieServiceType["get"]>, omdbAPIRes>(movieService.get, {
    params: [
      {
        i: imdbID,
        plot: "full",
      },
    ],
    refreshDeps: [imdbID],
  });
  const movie = data?.data ?? {};

  return (
    <section>
      <div className="container-xl">
        {movie && (
          <div className={classes.movieRoot}>
            <FullscreenPictureModal
              open={open}
              onClose={() => setOpen(false)}
              src={movie.Poster}
              alt={`${movie?.Title} poster`}
            />
            <div className={classes.moviePoster}>
              <img src={movie.Poster} alt="" onClick={() => setOpen(true)} />
            </div>
            <div className={classes.movieDetail}>
              <h2 className={classes.movieTitle}>
                <b>{movie?.Title}</b>
              </h2>
              <div className={classes.movieInfos}>
                {movie?.Year} • <span className="text-capitalize">{movie?.Type}</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: movie.Plot }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoviePage;