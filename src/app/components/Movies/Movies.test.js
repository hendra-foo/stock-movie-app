import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../test-utils/renderWithRouter";
import Movies from "./Movies";

it("should render two movies", async () => {
  const movies = [
    {
      Title: "Batman: Bad Blood",
      Year: "2016",
      imdbID: "tt4870838",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman vs. Robin",
      Year: "2015",
      imdbID: "tt4324274",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
    },
  ];

  renderWithRouter(<Movies movies={movies} />);

  const moviesElement = await screen.findByTestId("movies-root");

  expect(moviesElement.childElementCount).toEqual(movies.length);
});
