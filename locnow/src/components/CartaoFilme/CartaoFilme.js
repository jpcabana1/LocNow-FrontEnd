import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
//import PainelAdicionarCarrinho from "../PainelAdicionarCarrinho/PainelAdicionarCarrinho";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartaoFilme.css";

function CartaoFilme(props) {
  return (
    <div>
      <Card className="cartaoFilme">
        <Card.Img
          className="cartaoImagem"
          variant="bottom"
          src={props.info.srcImage}
        />
        <Card.Body>
          <Card.Text className="textCartao">
            {" "}
            <b>{props.info.name}</b>
          </Card.Text>
          <Button variant="outline-info" className="botaoCartao">
            Adicionar
            <FontAwesomeIcon
              className="botaoIcone"
              size="2x"
              icon={faPlusSquare}
            />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CartaoFilme;
