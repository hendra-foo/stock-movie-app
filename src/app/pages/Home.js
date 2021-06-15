import { useRequest } from "../hooks/useRequest";
import { movieService } from "../../services/movieServices";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: movies = [] } = useRequest(
    () =>
      movieService.list({
        s: "Batman",
        page: 2,
      }),
    {
      formatResult: (res) => res?.Search ?? [],
    }
  );

  return (
    <ol>
      {movies.map((movie, key) => (
        <li key={key}>
          <Link to={`/movie/${movie.imdbID}`}>
            {movie?.Title} {movie?.Year}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default Home;
