import React, { Component } from "react";
import "./home.css";

import NavBar from "./../../Components/NavBar/NavBar";
import CheckboxList from "./../../Components/CheckboxList/CheckboxList";

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
    check: true,
    gift: "Aranha de borracha",
    name: ""
  }
];

class home extends Component {
  onChange = obj => {
    console.log("home: ", obj);
  };

  render() {
    return (
      <div>
        <NavBar />
        <CheckboxList data={data} onChangeXXX={() => console.log("oioioi")} />
      </div>
    );
  }
}
export default home;
