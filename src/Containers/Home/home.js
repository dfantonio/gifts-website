import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";

import "./home.css";

import centerPhoto from "./../../Images/centerPhoto.jpg";
import NavBar from "./../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: "#111",
    marginBlockStart: "0px",
    height: "100%"
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
}));

const leftText = classes => {
  return (
    <>
      <Typography className={classes.customFont}>
        Querida família! Como vocês sabem, em agosto comemoro meu aniversário de
        15 anos!
      </Typography>
      <Typography className={classes.customFont}>
        Estou mudando de status e quero recordar dessa fase com todos vocês.
      </Typography>
      <Typography className={classes.customFont}>
        Espero que todos venham!
      </Typography>
      <Typography className={classes.customFont}>Beijos</Typography>
      <Typography className={classes.customFont}>Lucas</Typography>
    </>
  );
};

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid
        container
        spacing={3}
        className={classes.container}
        style={{ marginBottom: "6vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>{leftText(classes)}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <div className={classes.centerAll}>
              <img className={classes.image} src={centerPhoto} alt="Lucas" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <div className={classes.centerAll}>
              <Typography
                className={classes.customFont}
                style={{ fontSize: 43 }}
              >
                Venha comemorar comigo!
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.button}
            variant="contained"
            component={Link}
            to="/presentes"
            color="primary"
            size="large"
            fullWidth
          >
            Lista de presentes
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.button}
            variant="contained"
            component={Link}
            to="/findus"
            color="primary"
            size="large"
            fullWidth
          >
            Hospedagem
          </Button>
        </Grid>
      </Grid>
      <Typography
        color="secondary"
        align="right"
        style={{ paddingRight: "12px" }}
      >
        Site em desenvolvimento
      </Typography>
    </div>
  );
}
