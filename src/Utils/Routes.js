import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./../Containers/Home/home";
import Sobre from "../Containers/Sobre/sobre";
import errorPage from "../Containers/Error/errorPage";
import GiftList from "../Containers/GiftList/GiftList";
import Endereco from "../Containers/Endereco/Endereco";

const createRoutes = () => {
  const Paths = {
    HOME: "/",
    GIFTS: "/presentes",
    ABOUT: "/sobre",
    FINDUS: "/findus"
  };

  return (
    <BrowserRouter>
      <Switch>
        {/* Home */}
        <Route exact path={Paths.HOME} component={Home} />

        {/* Serviço indisponivel */}
        <Route exact path={Paths.ABOUT} component={Sobre} />

        {/* Lista de presentes */}
        <Route exact path={Paths.GIFTS} component={GiftList} />

        {/* Local da festa */}
        <Route exact path={Paths.FINDUS} component={Endereco} />

        <Route path="*" component={errorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default createRoutes;
