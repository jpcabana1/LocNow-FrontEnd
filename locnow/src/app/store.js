import { loginReducer } from "../reducers/login/loginReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  loginReducer,
  composeEnhancers(applyMiddleware(thunk))
);
