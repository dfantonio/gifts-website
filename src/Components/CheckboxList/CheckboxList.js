import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import React from "react";
import PropTypes from "prop-types";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    width: "100%",
    maxWidth: 450,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
    border: "solid",
    borderColor: theme.palette.secondary.main,
    maxHeight: "100%",
    overflow: "auto"
  },
  paper: {
    position: "absolute",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    marginLeft: "25%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
}));

export default function CheckboxList({ data, onChange }) {
  const classes = useStyles();
  const [state, setState] = React.useState(data);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");
  const [indexa, setIndex] = React.useState(0);

  const setNewState = () => {
    const index = indexa;
    let newData = state.map((value, ArrIndex) =>
      ArrIndex === index ? { ...value, check: !value.check } : value
    );
    setState(newData);
    newData[index].name = userName;
    newData[index].mensagem = userMessage;
    onChange(newData[index]);
  };

  const handleToggle = index => () => {
    setModalVisible(true);
    setIndex(index);
  };

  const renderList = () => {
    return state.map((value, index) => {
      return (
        <ListItem
          key={index}
          dense
          button
          divider
          onClick={handleToggle(index)}
          disabled={value.check}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={value.check}
              // tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText style={{ marginRight: 20 }} primary={value.gift} />
          <ListItemSecondaryAction>R$ {value.valor}</ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  const renderModal = () => {
    return (
      <Dialog
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Confirmação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para garantir a sua reserva, coloque o seu nome e uma mensagem para
            o Lucas (opcional)
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Nome*"
            type="text"
            fullWidth
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="message"
            label="Mensagem"
            type="text"
            multiline
            fullWidth
            onChange={e => {
              setUserMessage(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalVisible(false)} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              setModalVisible(false);
              setNewState();
            }}
            color="primary"
            disabled={!userName}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <List className={classes.root}>
      {renderModal()}
      {renderList()}
    </List>
  );
}

CheckboxList.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
