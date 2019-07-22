import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import moment from "moment";
import React from "react";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  GreatVibes: {
    // fontFamily: "Great Vibes"
  }
}));

const renderDate = () => {
  const a = moment([2019, 8 - 1, 9]);
  const diff = a.diff(moment(), "days") + 1;
  const text = diff === 1 ? "Falta apenas 1 dia" : "Faltam " + diff + " dias";
  return (
    <>
      <Typography variant="h5">09/08/2019</Typography>
      <Typography variant="h6">{text}</Typography>
    </>
  );
};

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Lucas | Aniversário
          </Typography>
          <Typography variant="inherit" className={classes.title}>
            {renderDate()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
