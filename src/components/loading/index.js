import React from "react";
import loadingImage from "./loading.svg";

const styles = {
  container: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    backgroundColor: "rgba(50, 50, 50, .8)",
    justifyContent: "center",
    transition: "0.5s"
  },
  spinner: {
    width: "33%"
  }
};

const Loading = props => {
  return (
    <div style={styles.container}>
      <img src={loadingImage} style={styles.spinner} alt="" />
    </div>
  );
};

export default Loading;
