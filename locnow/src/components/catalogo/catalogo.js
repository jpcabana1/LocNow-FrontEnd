import React from "react";
import { useSelector } from "react-redux";
import CartaoFilme from "../CartaoFilme/CartaoFilme";
import "./Catalogo.css";
function Catalogo() {
  const filmes = useSelector((state) => state.carregamentoInicial.filmes);

  return (
    <div className="catalogo">{filmes.map((filme) => CartaoFilme(filme))}</div>
  );
}

export default Catalogo;
