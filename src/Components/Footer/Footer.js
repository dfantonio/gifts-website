import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

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
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

export default function StickyFooter({ onClick, payload }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [oldPayload, setOldPayload] = React.useState(payload);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  React.useEffect(() => {
    if (oldPayload.length < payload.length) setOldPayload(payload);
    if (oldPayload.length > payload.length) {
      setSuccess(true);
      setLoading(false);
      setOldPayload(payload);
    }
  }, [oldPayload, payload]);

  return (
    <div>
      <footer className={classes.footer}>
        {/* {children} */}
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading || (!payload.length && !success)}
            onClick={() => {
              if (payload.length) {
                setSuccess(false);
                setLoading(true);
                onClick();
              }
            }}
          >
            Confirmo o presente
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </footer>
    </div>
  );
}
