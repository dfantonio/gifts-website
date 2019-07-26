import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";

import "./Endereco.css";

import NavBar from "../../Components/NavBar/NavBar";

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
  container: {
    width: "100%",
    margin: 0
  },
  textHeader: {
    borderBottom: "1px solid #E8E8E8",
    marginBottom: "10px"
  }
}));

export default function Home() {
  // const classes = useStyles();

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
