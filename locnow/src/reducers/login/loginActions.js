export const DEFINIRUSUARIO = "DEFINIRUSUARIO";
export const LIMPARUSUARIO = "LIMPARUSUARIO";

export function definirUsuario() {
  return {
    type: DEFINIRUSUARIO,
    payload: {
      usuario: "jpcabana",
      senha: "jpcabana",
    },
  };
}

export function removerUsuario() {
  return {
    type: LIMPARUSUARIO,
    payload: {},
  };
}
