import { compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer } from "./reducers";

const enhancers = [];

const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(...enhancers);

const persistConfig = {
  key: "FILM_LOGS_REDUCER",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, composedEnhancers as any);
  let persistor = persistStore(store);
  return { store, persistor };
};

export * from "./types";
export * from "./reducers";
export * from "./actions";
export * from "./selectors";
