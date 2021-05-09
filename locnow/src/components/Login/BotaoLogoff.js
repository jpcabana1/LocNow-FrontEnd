import React from "react";
import Button from "react-bootstrap/Button";
import { removerUsuario } from "../../reducers/login/loginActions";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./BotaoLogoff.css";

function BotaoLogoff() {
  const dispatch = useDispatch();

  const limpar = () => {
    dispatch(removerUsuario());
  };

  return (
    <div className="logoffBotao">
      <Button onClick={limpar} variant="outline-danger">
        <FontAwesomeIcon size="1x" icon={faSignOutAlt} />
        Logoff
      </Button>
    </div>
  );
}

export default BotaoLogoff;
