import React from "react";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarrinhoItem.css";

function CarrinhoItem(props) {
  return (
    <div className="carrinhoItem">
      <Row>
        <Col>
          <Figure.Image width={100} height={100} src={props.srcImage} />
        </Col>
        <Col style={{ width: "30rem", paddingTop: "3rem" }}>
          <h4>{props.nome}</h4>
        </Col>
        <Col style={{ paddingTop: "3rem" }}>
          <h4>R$ {props.valor}</h4>
        </Col>
        <Col style={{ paddingTop: "3rem", marginRight: "4rem" }}>
          <h4>Tempo: {props.tempoAluguel} dias</h4>
        </Col>
        <Col>
          <Button
            variant="danger"
            style={{
              width: "8rem",
              marginTop: "3rem",
              marginRight: "4rem",
              fontSize: "1rem",
            }}
          >
            <FontAwesomeIcon size="2x" icon={faTrash} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CarrinhoItem;
