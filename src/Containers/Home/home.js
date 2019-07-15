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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. ANTÔnio
          </p>
          <Link className="App-link" to="/sobre">
            Learn React
          </Link>
        </header>
      </div>
    );
  }
}
export default home;
