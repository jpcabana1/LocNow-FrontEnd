import { estado } from "../../app/estadoInicial";
import { ADICIONARCARRINHO } from "./carrinhoActions";

export const carrinhoReducer = (state = estado.states, action) => {
  switch (action.type) {
    case ADICIONARCARRINHO: {
      let arrayCarrinho = [...state.carrinho, action.payload];
      return { ...state, carrinho: arrayCarrinho };
    }
    default:
      return state;
  }
};
