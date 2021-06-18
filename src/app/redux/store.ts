import { configureStore } from "@reduxjs/toolkit";
import { megaSearchReducer, megaSearchSaga } from "./slice/megaSearchSlice";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
function* sagas() {
  yield all([megaSearchSaga()]);
}

export const store = configureStore({
  reducer: {
    megaSearch: megaSearchReducer,
  },
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
