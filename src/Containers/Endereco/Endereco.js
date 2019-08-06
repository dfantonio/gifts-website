import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";

import "./Endereco.css";

import NavBar from "../../Components/NavBar/NavBar";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100vw"
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
    paddingTop: "3vh",
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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container spacing={3} className={classes.container}>
        <div className={classes.centerAll}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="body1">
                Pessoal, para aqueles que preferirem pernoitar em Santo Antônio,
                seja pra aproveitar a estadia seja porque querem beber um
                pouquinho... encontramos o seguinte:
              </Typography>
              <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Pousada dos Oliveiras</Typography>
                  <Typography variant="body1">
                    fica pertinho de casa, tem apartamentos com ar condicionado,
                    banheiro e café da manhã. <br />O preço é R$ 140,00 pro
                    casal. Fone de contato: Sr Adroaldo, (51)3662 6793
                    <br />
                    <a
                      target="_blank"
                      href="https://www.pousadadosoliveiras.com.br/"
                    >
                      pousadadosoliveiras.com
                    </a>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Hotel EcoVilly</Typography>
                  <Typography variant="body1">
                    Apartamentos variam de 200,00 a 250,00. <br />
                    Fone de contato: (51) 3199 7000
                    <br />
                    <a target="_blank" href="http://www.hotelecovilly.com.br/">
                      hotelecovilly.com
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </div>
      </Grid>
    </div>
  );

  return (
    <div class="oi">
      <div class="test" contenteditable>
        Em construção
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"
            />
            <feDisplacementMap
              id="displacement"
              in="SourceGraphic"
              in2="noise"
              scale="6"
            />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-2">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-4">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>
    </div>
  );

  // return (
  //   <div className={classes.root}>
  //     <NavBar />
  //     <Grid container spacing={3} className={classes.container}>
  //       <Grid item xs={12} sm={4} />
  //       <Grid item xs={12} sm={4}>
  //         <Paper className={classes.paper}>
  //           <div className={classes.textHeader}>
  //             <Typography variant="h3" align="center">
  //               Local da festa
  //             </Typography>
  //           </div>
  //           <Typography variant="body1" align="center">
  //             A ser decidido
  //           </Typography>
  //         </Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={4} />
  //     </Grid>
  //   </div>
  // );
}
