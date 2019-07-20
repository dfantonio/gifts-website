import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex"
  },
  main: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(8)
  },
  footer: {
    padding: theme.spacing(2),
    display: "table",
    margin: "auto"
  }
}));

export default function StickyFooter({ children }) {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        {/* <Container fixed maxWidth="xl"> */}
        {children}
        {/* </Container> */}
      </footer>
    </div>
  );
}
