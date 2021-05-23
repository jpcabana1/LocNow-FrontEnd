import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BotaoLogoff from "../Login/BotaoLogoff";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarLocadora.css";

function NavbarLocadora() {
  const carrinho = useSelector((state) => state.states.carrinho);

  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand className="navegacaoBrand">
            <FontAwesomeIcon size="1x" icon={faFilm} />
            LocNow
          </Navbar.Brand>
        </Link>

        <Nav className="navegacao">
          <Link to="/catalogo">
            <Button className="navegacaoLink" variant="dark">
              Catálogo
            </Button>
            {/* <Nav.Link className="navegacaoLink">Catálogo</Nav.Link> */}
          </Link>

          <Link to="/pedidos">
            <Button className="navegacaoLink" variant="dark">
              Pedidos
            </Button>
          </Link>

          <Link to="/detalhe">
            <Button className="navegacaoLink" variant="dark">
              Detalhe
            </Button>
          </Link>
        </Nav>
        <Link to="/carrinho">
          <Button className="navegacaoCarrinho" variant="warning">
            <FontAwesomeIcon size="1x" icon={faShoppingCart} />
            Carrinho: {carrinho.length} itens
          </Button>
        </Link>

        <BotaoLogoff />
      </Navbar>
    </div>
  );
}

export default NavbarLocadora;
