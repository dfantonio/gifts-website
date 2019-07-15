import React, { Component } from "react";
import "./errorPage.css";
class errorPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ops, acho que você fez algo errado :/</h1>
        </header>
        <p className="App-intro">Exemplo de Página Sobre</p>
      </div>
    );
  }
}
export default errorPage;
