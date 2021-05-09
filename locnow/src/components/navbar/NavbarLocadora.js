import React from "react";
import BotaoLogoff from "../Login/BotaoLogoff";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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

        <Button
          className="navegacaoCarrinho"
          variant="warning"
          href="/carrinho"
        >
          <FontAwesomeIcon size="1x" icon={faShoppingCart} />
          Carrinho
        </Button>
        <BotaoLogoff />
      </Navbar>
    </div>
  );
}

export default NavbarLocadora;
