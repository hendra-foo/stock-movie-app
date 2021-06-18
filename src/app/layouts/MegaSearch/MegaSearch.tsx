import { useCallback, useLayoutEffect, useRef } from "react";
import Movies from "../../components/Movies/Movies";
import useOnKeyPress from "../../hooks/useOnKeyPress";
import useOnScroll from "../../hooks/useOnScroll";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { megaSearchActions } from "../../redux/slice/megaSearchSlice";
import classes from "./megaSearch.module.scss";

const escKey = "Escape";

const MegaSearch = (): JSX.Element => {
  const {
    search,
    errorMessage,
    totalResults,
    page,
    size,
    isLoadmore,
    movies = [],
  } = useAppSelector((state) => state.megaSearch);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

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
    inputRef.current?.select();
  }, [inputRef]);

  useOnKeyPress(document, escKey, toggleSearchView);

  const { handleScroll } = useOnScroll(loadMore);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <input
          ref={inputRef}
          className={classes.input}
          placeholder="Search by title"
          value={search}
          onChange={handleChange}
          spellCheck={false}
        />
        {search.length > 0 && errorMessage && (
          <div className={classes.errorMessage}>{errorMessage}</div>
        )}
        {search.length >= 4 && (
          <div className={classes.list} onScroll={handleScroll}>
            <Movies movies={movies} onSelectMovie={toggleSearchView} search={search} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaSearch;
