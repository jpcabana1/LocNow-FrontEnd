import { loginReducer } from "../reducers/login/loginReducer";
import { carrinhoReducer } from "../reducers/carrinho/carrinhoReducer";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduceAssembler = combineReducers({
  carregamentoInicial: loginReducer,
  states: carrinhoReducer,
});

export const store = createStore(
  reduceAssembler,
  composeEnhancers(applyMiddleware(thunk))
);
