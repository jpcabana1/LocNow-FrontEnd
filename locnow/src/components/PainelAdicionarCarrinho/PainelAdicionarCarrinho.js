import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PainelAdicionarCarrinho.css";

function PainelAdicionarCarrinho(props) {
  return (
    <div>
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modalBordas">
          <Modal.Title id="contained-modal-title-vcenter">
            Informação
          </Modal.Title>
          <Button variant="danger" onClick={props.onHide}>
            <b>X</b>
          </Button>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h4>{props.info.name}</h4>
          <Figure>
            <Figure.Image
              className="modelImagem"
              alt="171x180"
              src={props.info.srcImage}
            />
            <Figure.Caption className="modalCaption">
              Preço do aluguel: <b>15.00 R$</b>
            </Figure.Caption>
          </Figure>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className="modalBordas"></Modal.Footer>
      </Modal>
    </div>
  );
}

export default PainelAdicionarCarrinho;
