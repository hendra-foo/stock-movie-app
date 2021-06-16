import { useCallback, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../components/movies/Movies";
import useOnKeyPress from "../hooks/useOnKeyPress";
import useOnScroll from "../hooks/useOnScroll";
import { megaSearchActions } from "../redux/slice/megaSearchSlice";
import classes from "./layout.module.scss";

const escKeyCode = 27;

const MegaSearch = () => {
  const {
    search,
    errorMessage,
    totalResults,
    page,
    size,
    isLoadmore,
    movies = [],
  } = useSelector((state) => state.megaSearch);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleChange = useCallback(
    ({ target: { value } }) => {
      dispatch(megaSearchActions.onSearch(value));
    },
    [dispatch],
  );

  const toggleSearchView = useCallback(() => {
    dispatch(megaSearchActions.toggle());
  }, [dispatch]);

  const loadMore = useCallback(() => {
    if (!isLoadmore && totalResults > page * size) dispatch(megaSearchActions.onLoadMore());
  }, [dispatch, totalResults, page, size, isLoadmore]);

  useLayoutEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select(0, inputRef.current?.value?.length);
  }, [inputRef]);

  useOnKeyPress(escKeyCode, toggleSearchView);

  const { handleScroll } = useOnScroll(loadMore);

  return (
    <div className={classes.megaSearchRoot}>
      <div className={classes.megaSearchContent}>
        <input
          ref={inputRef}
          className={classes.input}
          placeholder="Search by title"
          value={search}
          onChange={handleChange}
          spellCheck={false}
        />
        {search.length > 0 && errorMessage && (
          <div className={classes.megaSearchErrorMessage}>{errorMessage}</div>
        )}
        {search.length >= 4 && (
          <div className={classes.megaSearchList} onScroll={handleScroll}>
            <Movies movies={movies} onSelectMovie={toggleSearchView} search={search} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaSearch;
