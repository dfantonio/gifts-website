import React, { Component } from "react";
import "./home.css";

import NavBar from "./../../Components/NavBar/NavBar";
import CheckboxList from "./../../Components/CheckboxList/CheckboxList";
import Button from "@material-ui/core/Button";
import Footer from "./../../Components/Footer/Footer";
const data = [
  {
    check: true,
    gift: "ps4",
    name: "Oswaldo"
  },
  {
    check: false,
    gift: "Monitor",
    name: ""
  },
  {
    check: false,
    gift: "Aranha de borracha",
    name: ""
  }
];

class home extends Component {
  state = {
    presentes: []
  };

  onChange = obj => {
    this.setState({ presentes: [...this.state.presentes, obj] }, () => {
      console.log("state: ", this.state.presentes);
    });
  };

  render() {
    return (
      <div className="root">
        <NavBar />
        <CheckboxList data={data} onChange={e => this.onChange(e)} />

        <Footer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(this.state.presentes)}
          >
            Submeter presente(s)
          </Button>
        </Footer>
      </div>
    );
  }
}
export default home;
