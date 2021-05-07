import React from "react";
//import Login from "./components/login/Login";
import Catalogo from "./components/Catalogo/Catalogo";
import Pedidos from "./components/Pedidos/Pedidos";
import PedidoDetalhe from "./components/PedidoDetalhe/PedidoDetalhe";
import NavbarLocadora from "./components/Navbar/NavbarLocadora";
import Erro from "./components/Erro/Erro";
import Home from "./components/Home/Home";

import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <main>
        <NavbarLocadora />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/catalogo" component={Catalogo} exact />
          <Route path="/pedidos" component={Pedidos} />
          <Route path="/detalhe" component={PedidoDetalhe} />
          <Route component={Erro} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
