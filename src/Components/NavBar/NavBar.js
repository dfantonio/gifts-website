import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  bold: {
    fontWeight: "bold"
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={[classes.title, classes.bold]}>
            News
          </Typography>
          <Typography className={classes.title}>
            <Typography variant="h5">News</Typography>
            <Typography variant="h6">Old</Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
