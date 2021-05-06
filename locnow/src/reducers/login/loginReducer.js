import { estado } from "../../app/estadoInicial";
import { DEFINIRUSUARIO, LIMPARUSUARIO } from "./loginActions";

export const loginReducer = (state = estado, action) => {
  switch (action.type) {
    case DEFINIRUSUARIO: {
      let objetoCarregamento = { ...state.carregamentoInicial };
      objetoCarregamento = {
        ...objetoCarregamento,
        usuarioLogado: action.payload,
      };
      return { ...state, carregamentoInicial: objetoCarregamento };
    }
    case LIMPARUSUARIO: {
      let objetoLimpar = { ...state.carregamentoInicial };
      objetoLimpar = {
        ...objetoLimpar,
        usuarioLogado: action.payload,
      };
      return { ...state, carregamentoInicial: objetoLimpar };
    }
    default:
      return state;
  }
};
