import React, { Component } from "react";
import { connect } from "react-redux";
import { selectRandomPatient } from "src/actions/patient";
import { faUser, faTable, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showTesting, showReport } from "src/actions/ui";
import { primaryDarker, primaryLight } from "src/theme";

const styles = {
  header: Object.assign(
    {
      display: "flex"
    },
    primaryDarker
  ),
  selected: primaryLight,
  reset: {
    textAlign: "right"
  },
  patient: {
    width: "50%",
    textAlign: "right"
  },
  patientName: {
    marginRight: "10px"
  },
  navItem: Object.assign(
    {
      backgroundColor: "transparent",
      radius: "0",
      border: "none",
      flexGrow: "1",
      fontSize: "25px",
      lineHeight: "40px",
      cursor: "pointer"
    },
    primaryDarker
  )
};

class Header extends Component {
  render() {
    const patient = this.props.patientReducer.patient;
    const mode = this.props.uiReducer.mode;
    const testStyles = Object.assign(
      {},
      styles.navItem,
      mode === "testing" ? styles.selected : {}
    );
    const reportStyles = Object.assign(
      {},
      styles.navItem,
      mode === "report" ? styles.selected : {}
    );
    const userStyles = Object.assign({}, styles.navItem, styles.patient);
    return (
      <div style={styles.header}>
        <button style={testStyles} onClick={this.props.showTesting}>
          <FontAwesomeIcon icon={faClock} />
        </button>
        <button style={reportStyles} onClick={this.props.showReport}>
          <FontAwesomeIcon icon={faTable} />
        </button>
        <button style={userStyles} onClick={this.props.selectRandomPatient}>
          <span style={styles.patientName}>
            {patient ? patient.fullName : ""}
          </span>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  showTesting: () => dispatch(showTesting()),
  showReport: () => dispatch(showReport()),
  selectRandomPatient: () => dispatch(selectRandomPatient())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
