import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarLocadora.css";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//import FormControl from "react-bootstrap/FormControl";

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
        {/* <Form inline style={{ marginLeft: "45rem" }}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Button style={{ marginLeft: "4rem" }} variant="outline-info">
          Search
        </Button> */}
      </Navbar>
    </div>
  );
}

export default NavbarLocadora;
