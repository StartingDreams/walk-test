import React, { Component } from "react";
import { connect } from "react-redux";
import { getWalkTestsForPatient } from "src/actions/walkTest";
import ReportTable from "./reportTable";

class Report extends Component {
  componentWillMount() {
    this.props.getWalkTestsForPatient(this.props.patientReducer.patient._id);
  }

  render() {
    const walkTests = this.props.walkTestReducer.walkTests;
    const patient = this.props.patientReducer.patient;
    return (
      <>
        <h1>{patient.fullName}</h1>
        <ReportTable walkTests={walkTests} />
      </>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getWalkTestsForPatient: patientId => {
    dispatch(getWalkTestsForPatient(patientId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);
