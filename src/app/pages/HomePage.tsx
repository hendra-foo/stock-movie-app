import { useRequest } from "../hooks/useRequest";
import { movieService } from "../axios/services/movieServices";
import Movies from "../components/Movies/Movies";
import classes from "./homePage.module.scss";

const HomePage = (): JSX.Element => {
  const { data: movies = [] } = useRequest(movieService.get, {
    formatResult: (res) => res?.Search ?? [],
    params: [
      {
        s: "Batman",
        type: "movie",
        plot: "full",
        page: 3,
      },
    ],
  });

  return (
    <section className={classes.sectionHero}>
      <div className="container-xl">
        <h1 className={`display-4 ${classes.heroText}`}>
          Discover our Featured <br />
          <span className="fw-bold">Batman</span> movie list!
        </h1>
        <div>
          <Movies movies={movies} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
