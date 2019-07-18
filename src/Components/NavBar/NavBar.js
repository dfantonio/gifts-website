import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  GreatVibes: {
    fontFamily: "Great Vibes"
  }
}));

const renderDate = () => {
  const a = moment([2019, 8 - 1, 9]);
  const diff = a.diff(moment(), "days") + 1;
  const text = diff == 1 ? "Falta apenas 1 dia" : "Faltam " + diff + " dias";
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
          <Typography
            variant="h4"
            className={[classes.title, classes.GreatVibes]}
          >
            Lucas | Aniversário
          </Typography>
          <Typography className={classes.title}>
            {renderDate()}
            {/* <Typography variant="h5">News</Typography>
            <Typography variant="h6">Old</Typography> */}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
