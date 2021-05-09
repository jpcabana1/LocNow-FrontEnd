import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrinho.css";

function Carrinho() {
  return (
    <div>
      <Dropdown className="dropCarrinho">
        <Dropdown.Toggle
          style={{ fontSize: "2rem" }}
          variant="warning"
          id="dropdown-basic"
        >
          <FontAwesomeIcon size="1x" icon={faShoppingCart} />
          Carrinho
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            Action
            <Button className="carrinhoItem">
              <FontAwesomeIcon size="2x" icon={faTrash} />
            </Button>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Another action
            <Button className="carrinhoItem">
              <FontAwesomeIcon size="2x" icon={faTrash} />
            </Button>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Something else
            <Button className="carrinhoItem">
              <FontAwesomeIcon size="2x" icon={faTrash} />
            </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Carrinho;
