import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
    marginTop: "3%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
    border: "solid",
    borderColor: theme.palette.secondary.main
  }
}));

export default function CheckboxList(data, { onChange }) {
  data = data.data;
  const classes = useStyles();
  const [state, setState] = React.useState(data);

  useEffect(() => {
    console.log("useEffect: ", state);
    // do something when value changes
  }, [state]);

  const handleToggle = index => () => {
    setState(prevState =>
      prevState.map((value, ArrIndex) =>
        ArrIndex === index ? { ...value, check: !value.check } : value
      )
    );
    // console.log(onChange());
    // if (state[index].check) onChange(state[index].gift);
  };

  const renderList = (item, index) => {};

  return (
    <List className={classes.root}>
      {state.map((value, index) => {
        return (
          <ListItem
            key={index}
            role={undefined}
            dense
            button
            divider
            onClick={handleToggle(index)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.check}
                tabIndex={-1}
                disableRipple
                // inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              style={{ textAlign: "center" }}
              id={index}
              primary={value.gift}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

CheckboxList.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
