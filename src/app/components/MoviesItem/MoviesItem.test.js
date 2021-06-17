import { screen } from "@testing-library/react";
import MoviesItem from "./MoviesItem";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../test-utils/renderWithRouter";

it("should render movie detail correctly", async () => {
  const movie = {
    Title: "Batman: Bad Blood",
    Year: "2016",
    imdbID: "tt4870838",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  };
  renderWithRouter(<MoviesItem movie={movie} />);

  expect(screen.getByTestId("title")).toHaveTextContent(movie.Title);
  expect(screen.getByTestId("year")).toHaveTextContent(movie.Year);
  expect(screen.getByTestId("poster")).toHaveAttribute("src", movie.Poster);
});

it("route to movie detail on click link", async () => {
  const movie = {
    Title: "Batman: Bad Blood",
    Year: "2016",
    imdbID: "tt4870838",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  };

  renderWithRouter(<MoviesItem movie={movie} />);

  const linkEl = screen.getByTestId("link-anchor");

  const leftClick = { button: 0 };
  userEvent.click(linkEl, leftClick);

  expect(screen.getByTestId("location-display")).toHaveTextContent(`/movie/${movie.imdbID}`);
});
