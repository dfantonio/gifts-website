import React, { Component } from "react";
import "./home.css";

import NavBar from "./../../Components/NavBar/NavBar";
import CheckboxList from "./../../Components/CheckboxList/CheckboxList";

class home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CheckboxList />
      </div>
    );
  }
}
export default home;
