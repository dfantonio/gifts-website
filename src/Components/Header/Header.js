import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import moment from "moment";

/**
 * @author Antônio D. F.
 * @description Header
 * @copyright 07/2019
 */
class Header extends Component {
  renderDate = () => {
    const a = moment([2019, 8 - 1, 9]);
    const diff = a.diff(moment(), "days") + 1;
    const text = diff == 1 ? "Falta apenas 1 dia" : "Faltam " + diff + " dias";
    return (
      <div>
        <h3>09/08/2019</h3>
        <h4>{text}</h4>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div>A</div>
        <div>{this.props.title}</div>
        <div>{this.renderDate()}</div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  birthday: PropTypes.string
};

export default Header;
