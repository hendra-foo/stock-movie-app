import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FullscreenPictureModal from "./FullscreenPictureModal";

it("renders correctly", () => {
  const movie = {
    Title: "Batman: Bad Blood",
    Year: "2016",
    imdbID: "tt4870838",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  };

  const handleClose = jest.fn();

  render(
    <FullscreenPictureModal
      open={true}
      onClose={handleClose}
      src={movie.Poster}
      alt={`${movie?.Title} poster`}
    />,
  );

  const imgEl = screen.getByTestId("modal-img");

  expect(imgEl).toHaveAttribute("src", movie.Poster);
  expect(imgEl).toHaveAttribute("alt", `${movie?.Title} poster`);
});

it("should trigger onClose when modal close", () => {
  const movie = {
    Title: "Batman: Bad Blood",
    Year: "2016",
    imdbID: "tt4870838",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  };

  const handleClose = jest.fn();

  render(
    <FullscreenPictureModal
      open={true}
      onClose={handleClose}
      src={movie.Poster}
      alt={`${movie?.Title} poster`}
    />,
  );

  const modalEl = screen.getByTestId("modal-root");

  const leftClick = { button: 0 };
  userEvent.click(modalEl, leftClick);

  expect(handleClose).toHaveBeenCalledTimes(1);
});
