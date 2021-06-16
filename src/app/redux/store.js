import { configureStore } from "@reduxjs/toolkit";
import { megaSearchReducer, megaSearchSaga } from "./slice/megaSearchSlice";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
function* sagas() {
  yield all([megaSearchSaga()]);
}

export default configureStore({
  reducer: {
    megaSearch: megaSearchReducer,
  },
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(sagas);
