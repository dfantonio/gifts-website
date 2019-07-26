// import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import moment from "moment";
import { withRouter } from "react-router-dom";
import React from "react";
const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  bottomMargin: {
    marginBottom: "20px"
  }
}));

const renderDate = () => {
  const a = moment([2019, 8 - 1, 10]);
  const diff = a.diff(moment(), "days") + 1;
  const text = diff === 1 ? "Falta apenas 1 dia" : "Faltam " + diff + " dias";
  return (
    <>
      <Typography variant="h5">10/08/2019</Typography>
      <Typography variant="h6">{text}</Typography>
    </>
  );
};

const renderBack = (history, location) => {
  if (location.pathname !== "/")
    return (
      <IconButton
        style={{ color: "white" }}
        onClick={() => {
          history.goBack();
        }}
      >
        <ArrowBack />
      </IconButton>
    );
};

const NavBar = ({ history, location }) => {
  const classes = useStyles();
  return (
    <div className={classes.bottomMargin}>
      <AppBar position="static">
        <Toolbar>
          {renderBack(history, location)}
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
export default withRouter(NavBar);
