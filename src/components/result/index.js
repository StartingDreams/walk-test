import React, { Component } from "react";
import { connect } from "react-redux";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  container: {
    display: "flex",
    fontSize: "20px",
    justifyContent: "center"
  },
  note: {
    userSelect: "auto",
    margin: "0",
    padding: "15px"
  },
  button: {
    fontSize: "20px",
    backgroundColor: "transparent",
    border: "none",
    margin: "0",
    padding: "15px"
  }
};

const copy = () => {
  if (document.selection) {
    const range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("note"));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(document.getElementById("note"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
};

class Result extends Component {
  render() {
    const walkTest = this.props.walkTestReducer.walkTest;
    return walkTest ? (
      <div style={styles.container}>
        <p id="note" style={styles.note}>
          {walkTest.note}
        </p>
        <button onClick={copy} style={styles.button}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
