import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./Reducers/rootReducers";
import rootSagas from "./Sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
export default store;

sagaMiddleware.run(rootSagas);
