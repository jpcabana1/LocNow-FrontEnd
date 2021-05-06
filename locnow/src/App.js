import React from "react";
//import Login from "./components/login/Login";
import Catalogo from "./components/catalogo/Catalogo";
import Pedidos from "./components/pedidos/Pedidos";
import PedidoDetalhe from "./components/pedidoDetalhe/PedidoDetalhe";
import NavbarLocadora from "./components/navbar/NavbarLocadora";
import Erro from "./components/Erro/Erro";

import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <main>
        <NavbarLocadora />
        <Switch>
          <Route path="/" component={Catalogo} exact />
          <Route path="/pedidos" component={Pedidos} />
          <Route path="/detalhe" component={PedidoDetalhe} />
          <Route component={Erro} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
