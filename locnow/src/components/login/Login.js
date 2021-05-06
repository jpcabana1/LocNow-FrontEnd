import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  definirUsuario,
  removerUsuario,
} from "../../reducers/login/loginActions";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const definir = () => {
    dispatch(definirUsuario());
  };

  const limpar = () => {
    dispatch(removerUsuario());
  };

  return (
    <div className="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
      </Form>
      <Form.Group className="botao">
        <Button onClick={definir} variant="outline-info">
          Definir
        </Button>
        {"  "}
        <Button onClick={limpar} variant="outline-warning">
          Limpar
        </Button>
      </Form.Group>
    </div>
  );
}

export default Login;
