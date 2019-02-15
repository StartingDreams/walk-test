import React from "react";

const styles = {
  fontFamily: "monospace",
  fontSize: "60px",
  textAlign: "center"
};

const Duration = props => {
  return <h1 style={styles}>{(props.testDuration / 1000).toFixed(2)} </h1>;
};

export default Duration;
