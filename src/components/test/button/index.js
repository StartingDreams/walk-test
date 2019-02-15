import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { accentDark } from "src/theme";

const styles = {
  button: {
    fontSize: "40px",
    lineHeight: "100px",
    borderRadius: "20px",
    width: "50%",
    border: "none"
  }
};

const Button = props => {
  const colors = props.colors || accentDark;
  return (
    <button
      style={Object.assign({}, styles.button, colors)}
      onClick={props.onClickHandler}
    >
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default Button;
