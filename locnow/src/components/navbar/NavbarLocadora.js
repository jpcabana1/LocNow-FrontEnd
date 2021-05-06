import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";

function NavbarLocadora() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">LocNow</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Catalogo</Nav.Link>
          <Nav.Link href="/pedidos">Pedidos</Nav.Link>
          <Nav.Link href="/detalhe">Detalhes</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavbarLocadora;
