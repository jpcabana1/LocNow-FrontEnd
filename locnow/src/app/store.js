// import { configureStore } from "@reduxjs/toolkit";
//import { combineReducers, createStore } from "redux";
import { loginReducer } from "../reducers/login/loginReducer";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// const reduceAssembler = combineReducers({
//   login: loginReducer,
// });

// export const store = createStore(
//   reduceAssembler,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  loginReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// export const store = configureStore({
//   reducer: {
//     login: loginReducer,
//   },
// });
