import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarrinhoPainel.css";

function CarrinhoPainel() {
  return (
    <div className="carrinhoPainel">
      <Container fluid="md">
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Pesquisar"
              size="lg"
              style={{ width: "25rem", marginTop: "3rem" }}
            />
          </Col>
          <Col>
            <Button style={{ marginTop: "3rem" }}>
              <FontAwesomeIcon size="2x" icon={faSearch} />
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              style={{
                width: "25rem",
                marginTop: "3rem",
                float: "right",
                textAlign: "left",
                fontSize: "2rem",
                color: "",
              }}
            >
              Finalizar pedido
              <FontAwesomeIcon
                style={{ float: "right" }}
                size="2x"
                icon={faCheckCircle}
              />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarrinhoPainel;
