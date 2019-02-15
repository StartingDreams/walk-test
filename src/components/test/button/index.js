import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  button: {
    fontSize: "40px",
    lineHeight: "100px",
    backgroundColor: "#AAA",
    borderColor: "#999",
    borderRadius: "20px",
    color: "#333",
    width: "50%"
  }
};

const Button = props => {
  const colors = {
    color: props.color || styles.button.color,
    backgroundColor: props.backgroundColor || styles.button.backgroundColor,
    borderColor: props.borderColor || styles.button.borderColor
  };
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
