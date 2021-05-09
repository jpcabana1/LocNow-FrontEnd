import React from "react";
import Carrinho from "../Carrinho/Carrinho";
import BotaoLogoff from "../Login/BotaoLogoff";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarLocadora.css";

function NavbarLocadora() {
  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand className="navegacaoBrand" href="/">
          <FontAwesomeIcon size="1x" icon={faFilm} />
          LocNow
        </Navbar.Brand>

        <Nav className="navegacao">
          <Nav.Link className="navegacaoLink" href="/catalogo">
            Catálogo
          </Nav.Link>
          <Nav.Link href="/pedidos">Pedidos</Nav.Link>
          <Nav.Link href="/detalhe">Detalhe</Nav.Link>
        </Nav>
        <Carrinho />
        <BotaoLogoff />
      </Navbar>
    </div>
  );
}

export default NavbarLocadora;
