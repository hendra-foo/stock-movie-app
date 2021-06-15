import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { movieService } from "../../../services/movieServices";
import { useRequest } from "../../hooks/useRequest";

const MoviePage = () => {
  const { imdbID } = useParams();

  const { data: movie } = useRequest(() => movieService.detail({ imdbID }));

  return (
    <div>
      <Link to="/">Back</Link>
      {movie && (
        <div className="d-flex p-5">
          <div className="me-3">
            <img width="150px" src={movie.Poster} alt="" />
          </div>
          <div>
            <h1>
              {movie.Title} ({movie.Year})
            </h1>
            <div dangerouslySetInnerHTML={{ __html: movie.Plot }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
