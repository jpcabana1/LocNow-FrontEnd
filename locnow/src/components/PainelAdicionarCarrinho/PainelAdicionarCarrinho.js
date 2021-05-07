import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
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
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modalBordas"
          >
            Informação
          </Modal.Title>
          <Button variant="link" onClick={props.onHide}>
            <FontAwesomeIcon size="2x" icon={faWindowClose} />
          </Button>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h4>{props.info.name}</h4>
          <Figure>
            <Figure.Image
              alt="171x180"
              className="modelImagem"
              src={props.info.srcImage}
            />
            <Figure.Caption className="modalCaption">
              Preço do aluguel: <b>R$ 15.00</b>
            </Figure.Caption>
          </Figure>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <div className="botoesAluguelModal">
            <Button className="botaoAluguel" variant="primary">
              Alugar para 1 dia
            </Button>
            <Button className="botaoAluguel" variant="primary">
              Alugar para 3 dias
            </Button>
            <Button className="botaoAluguel" variant="primary">
              Alugar para 5 dias
            </Button>
            <Button className="botaoAluguel" variant="primary">
              Alugar para 7 dias
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="modalBordas"></Modal.Footer>
      </Modal>
    </div>
  );
}

export default PainelAdicionarCarrinho;
