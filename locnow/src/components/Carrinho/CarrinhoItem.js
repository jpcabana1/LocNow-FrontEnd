import React from "react";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
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
          <h5>{props.nome}</h5>
        </Col>
        <Col style={{ paddingTop: "3rem" }}>
          <h5>R$ {props.valor}</h5>
        </Col>
        <Col style={{ paddingTop: "3rem", marginRight: "4rem" }}>
          <h5>Tempo: {props.tempoAluguel} dias</h5>
        </Col>
        <Col style={{ paddingTop: "3rem", marginRight: "4rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              style={{ fontSize: "1.5rem" }}
            >
              Dias de locação
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ fontSize: "1.5rem" }}>
              <Dropdown.Item>Alugar para 1 dia</Dropdown.Item>
              <Dropdown.Item>Alugar para 3 dias</Dropdown.Item>
              <Dropdown.Item>Alugar para 5 dias</Dropdown.Item>
              <Dropdown.Item>Alugar para 7 dias</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
