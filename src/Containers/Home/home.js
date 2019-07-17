import React, { Component } from "react";
import logo from "./../../Images/logo.svg";
import { Link } from "react-router-dom";
import Header from "./../../Components/Header/Header";

import "./home.css";

class home extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Teste" />
        <div className="App-header" />
      </div>
    );
  }
}
export default home;
