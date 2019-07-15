import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./../Containers/Home/home";
import Sobre from "../Containers/Sobre/sobre";
import errorPage from "../Containers/Error/errorPage";

const createRoutes = () => {
  const Paths = {
    HOME: "/",
    ABOUT: "/sobre"
  };

  return (
    <BrowserRouter>
      <Switch>
        {/* Home */}
        <Route exact path={Paths.HOME} component={Home} />

        {/* Serviço indisponivel */}
        <Route exact path={Paths.ABOUT} component={Sobre} />

        <Route path="*" component={errorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default createRoutes;
