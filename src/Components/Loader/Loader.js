import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%"
    // margin: "50%"
  },
  root: {
    zIndex: 9999,
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    background: "rgb(100, 100, 100,0.5)"
  },
  text: {
    color: "white"
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    </div>
  );
}
