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
    console.log("submeti");
    // this.demoAsyncCall().then(response => {
    //   this.setState({ presentes: [] });
    // });

    this.state.presentes.map(value => {
      console.log("estou enviando o payload ", value);

      const payload = {
        gift: value.gift,
        name: value.name
      };

      axios
        .post("/gifts/toggle", payload)
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
