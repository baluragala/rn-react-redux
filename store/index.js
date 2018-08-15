import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import { productsWatcher } from "../sagas/product";
import { navigationMiddleware } from "../components/AppNavigator";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(navigationMiddleware, sagaMiddleware)
);

//store.subscribe(() => console.log(store.getState().navState));
sagaMiddleware.run(productsWatcher);

export default store;
