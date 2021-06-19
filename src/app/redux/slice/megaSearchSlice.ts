import { call, delay, put, takeLatest, select } from "@redux-saga/core/effects";
import { createSlice } from "@reduxjs/toolkit";
import { movieService } from "../../axios/services/movieServices";

const megaSearchSlice = createSlice({
  name: "megaSearch",
  initialState: {
    /** mega search open / close */
    open: false,
    /** input value  */
    search: "",
    /** is search loading */
    isSearching: false,
    /** is loading more */
    isLoadmore: false,
    /** error state */
    errorMessage: "",
    /** page to load */
    page: 1,
    /** total result returned after search */
    totalResults: 0,
    /** default size from imdb is 10 */
    size: 10,
    /** item list */
    movies: [],
  },
  reducers: {
    /** toggle mega search */
    toggle: (state) => {
      state.open = !state.open;
    },
    /** handle search input changes */
    onSearch: (state, action) => {
      state.search = action.payload;
    },
    /** handle load more */
    onLoadMore: (state) => {
      state.isLoadmore = true;
      state.page++;
    },
    /** handle request movie */
    onReqMovies: (state) => {
      state.isSearching = true;
      state.errorMessage = "";
    },
    /** handle success on load movie */
    onLoadMovies: (state, action) => {
      state.movies = state.isLoadmore
        ? [...state.movies, ...action.payload.items]
        : action.payload.items;
      state.totalResults = action.payload.totalResults;
      state.isSearching = false;
      state.isLoadmore = false;
      state.errorMessage = "";
    },
    /** handle failed on load movie */
    onLoadMoviesError: (state, action) => {
      state.movies = [];
      state.isSearching = false;
      state.isLoadmore = false;
      state.page = 1;
      state.errorMessage = action.payload;
    },
  },
});

export const megaSearchActions = megaSearchSlice.actions;
export const megaSearchReducer = megaSearchSlice.reducer;

export function* megaSearchSaga(): Generator {
  // on input change, validate and request movie
  yield takeLatest(megaSearchActions.onSearch, function* searchMovie({ payload: search }) {
    try {
      // Search minimum 4 letters
      if (search.length <= 1) throw new Error("Type 3 more");
      if (search.length === 2) throw new Error("Type 2 more");
      if (search.length === 3) throw new Error("Type 1 more");

      // Debounce search changes
      yield delay(200);

      // dispatch Request Movies
      yield put(megaSearchActions.onReqMovies());
    } catch (error) {
      yield put(
        megaSearchActions.onLoadMoviesError(error?.message ?? "Sorry, Something Went Wrong :("),
      );
    }
  });

  yield takeLatest(megaSearchActions.onLoadMore, function* requestLoadMore() {
    yield put(megaSearchActions.onReqMovies());
  });

  // on req movies, load movies
  yield takeLatest(megaSearchActions.onReqMovies, function* loadMovie() {
    try {
      const { search, page } = yield select((state) => state.megaSearch);

      const {
        data: { Error: errorMessage, Response, Search, totalResults },
      } = yield call(movieService.get, {
        s: search,
        page,
      });
      if (Response === "False") throw new Error(errorMessage);
      yield put(
        megaSearchActions.onLoadMovies({
          items: Search,
          totalResults,
        }),
      );
    } catch (error) {
      yield put(
        megaSearchActions.onLoadMoviesError(error?.message ?? "Sorry, Something Went Wrong :("),
      );
    }
  });
}
