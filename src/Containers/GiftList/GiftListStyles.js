import React, { Component } from "react";
import "./GiftList.css";

import CheckboxList from "../../Components/CheckboxList/CheckboxList";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const axios = require("axios");
axios.defaults.baseURL = "https://lista-de-presentes-do-lucas.appspot.com";

const classes = theme => ({
  myCustomClass: {
    fontFamily: "Arial"
  },
  root: {
    flexGrow: 1
  },
  customFont: {
    fontFamily: "Just Another Hand",
    textIndent: "20px",
    fontSize: "xx-large"
  },
  container: {
    width: "100%",
    margin: 0
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  centerAll: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

class GiftList extends Component {
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
    const { container, myCustomClass } = classes;
    console.log(classes);
    return (
      <div className="root">
        {loading ? <Loader /> : null}
        <NavBar />
        <Grid
          container
          spacing={3}
          className={classes.container}
          style={{ marginBottom: "6vh" }}
        >
          {/* <Grid item xs={12} sm={6}>
            <Typography className={classes.customFont}>
              Querida família! Como vocês sabem, em agosto comemoro meu
              aniversário de 15 anos!
            </Typography>
            <div className="mainText">
              <p>
                Esta é apenas uma lista de sugestões, outros presentes também
                são bem-vindos!
              </p>
              <p>
                Ao definir o presente lembre de marcar aqui para que outro
                convidado não compre o mesmo outra vez! O preço serve como
                referência dos valores médios do mercado.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            {data.length !== 0 ? (
              <CheckboxList data={data} onChange={e => this.onChange(e)} />
            ) : null}
          </Grid> */}
        </Grid>

        <Footer
          payload={this.state.presentes}
          onClick={() => this.onSubmit()}
        />
      </div>
    );
  }
}
export default GiftList;
