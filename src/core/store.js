import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import createRootReducer from "../reducers/root.reducer";

export const history = createBrowserHistory({
  hashType: "slash"
});

const RouterMiddleware = routerMiddleware(history);
const SagaMiddleware = createSagaMiddleware();

const getMiddleware = () => {
  // DEVELPOPMENT
  return composeWithDevTools(applyMiddleware(SagaMiddleware, RouterMiddleware));
  // PRODUCTION
  // return compose(applyMiddleware(SagaMiddleware, RouterMiddleware));
};

export function configureStore(initialState) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    getMiddleware()
  );
  store.runSaga = SagaMiddleware.run;
  return store;
}
