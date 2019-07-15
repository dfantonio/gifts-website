import React from "react";
import PropTypes from "prop-types";

/**
 * @author Antônio D. F.
 * @description Header
 * @copyright 07/2019
 */
function Header({ title, birthday }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <p style={{ float: "left", backgroundColor: "red" }}>content1</p>
      <p style={{ float: "left", textAlign: "center", width: "33%" }}>a</p>
      <p style={{ float: "right", backgroundColor: "green" }}>content2</p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  birthday: PropTypes.string
};

export default Header;
