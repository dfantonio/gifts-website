import React, { Component } from "react";
import "./home.css";

import CheckboxList from "./../../Components/CheckboxList/CheckboxList";
import NavBar from "./../../Components/NavBar/NavBar";
import Footer from "./../../Components/Footer/Footer";
import Loader from "./../../Components/Loader/Loader";

const axios = require("axios");
axios.defaults.baseURL = "https://lista-de-presentes-do-lucas.appspot.com";

class home extends Component {
  state = {
    presentes: [],
    data: [],
    loading: true
  };

  componentDidMount = () => {
    console.log("Versão 1.0.2");
    axios
      .get("/gifts")
      .then(response => {
        console.log("resposta: ", response.data);
        this.setState({ data: response.data, loading: false });
      })
      .catch(function(error) {
        console.log("erro: ", error);
      })
      .finally(function() {
        // always executed
      });
  };

  onChange = obj => {
    this.setState({ presentes: [...this.state.presentes, obj] }, () => {
      console.log("state/home: ", this.state.presentes);
    });
  };

  //Func para matar tempo
  demoAsyncCall = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  onSubmit = () => {
    this.state.presentes.map(value => {
      const payload = {
        gift: value.gift,
        check: true,
        name: value.name,
        mensagem: value.mensagem
      };

      axios
        .post("/gifts/update", payload)
        .then(response => {
          console.log("payload com sucesso ", payload);
          this.setState({ presentes: [] });
        })
        .catch(function(error) {
          console.log("erro: ", error);
        });

      return true;
    });
  };

  //TODO The submit button is needing scroll on mobile
  render() {
    const { data, loading } = this.state;
    return (
      <div className="root">
        <NavBar />
        {loading ? <Loader /> : null}
        <div className="mainText">
          <p>
            Esta é apenas uma lista de sugestões, outros presentes também são
            bem-vindos!
          </p>
          <p>
            Ao definir o presente lembre de marcar aqui para que outro convidado
            não compre o mesmo outra vez! O preço serve como referência dos
            valores médios do mercado.
          </p>
        </div>
        {data.length !== 0 ? (
          <CheckboxList data={data} onChange={e => this.onChange(e)} />
        ) : null}

        <Footer
          payload={this.state.presentes}
          onClick={() => this.onSubmit()}
        />
      </div>
    );
  }
}
export default home;
