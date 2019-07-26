import React, { Component } from "react";
import "./GiftList.css";

import CheckboxList from "./../../Components/CheckboxList/CheckboxList";
import NavBar from "./../../Components/NavBar/NavBar";
import Footer from "./../../Components/Footer/Footer";
import Loader from "./../../Components/Loader/Loader";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
const axios = require("axios");
axios.defaults.baseURL = "https://lista-de-presentes-do-lucas.appspot.com";

const styles = theme => ({
  myCustomClass: {
    fontFamily: "Arial"
  },
  root: {
    flexGrow: 1
  },
  text: {
    textIndent: "30px",
    fontSize: "large",
    textAlign: "justify"
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
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    height: "100%"
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
    const { classes } = this.props;
    return (
      <Grid className="root">
        {loading ? <Loader /> : null}
        <NavBar />
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} sm={5}>
            <div className={classes.centerAll}>
              <Typography className={classes.text}>
                Esta é apenas uma lista de sugestões, outros presentes também
                são bem-vindos!
              </Typography>
              <Typography className={classes.text}>
                Ao definir o presente lembre de marcar aqui para que outro
                convidado não compre o mesmo outra vez!
              </Typography>
              <Typography className={classes.text}>
                O preço serve como referência dos valores médios do mercado.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <div style={{ height: "100%", maxHeight: "65vh" }}>
              {data.length !== 0 ? (
                <CheckboxList data={data} onChange={e => this.onChange(e)} />
              ) : null}
            </div>
          </Grid>
        </Grid>

        <Footer
          payload={this.state.presentes}
          onClick={() => this.onSubmit()}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(GiftList);
