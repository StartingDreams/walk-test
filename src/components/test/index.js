import React, { Component } from "react";
import { connect } from "react-redux";
import { startTest, finishTest, updateTest, saveTest } from "src/actions/test";
import { faStop, faPlay, faSave } from "@fortawesome/free-solid-svg-icons";
import Duration from "./duration";
import Button from "./button";
import { accentDark, accentLight, primaryDark } from "src/theme";

class Test extends Component {
  constructor(props) {
    super(props);
    this.startTest = this.startTest.bind(this);
    this.finishTest = this.finishTest.bind(this);
    this.saveTest = this.saveTest.bind(this);
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  startTest() {
    this.props.startTest();
    const createTimeout = () => {
      return setTimeout(() => {
        this.tick();
        this.timeout = createTimeout();
      }, 100);
    };
    this.timeout = createTimeout();
  }
  finishTest() {
    this.clearTimeout();
    this.props.finishTest();
  }
  saveTest() {
    this.props.saveTest(
      this.props.patientReducer.patient.id,
      this.props.testReducer.start,
      this.props.testReducer.stop
    );
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = undefined;
    }
  }
  tick() {
    this.props.updateTest();
  }

  renderRunning() {
    return this.props.testReducer.stop ? (
      <Button
        onClickHandler={this.saveTest}
        icon={faSave}
        colors={accentDark}
      />
    ) : (
      <Button
        onClickHandler={this.finishTest}
        icon={faStop}
        colors={accentDark}
      />
    );
  }

  render() {
    return (
      <>
        <Duration testDuration={this.props.testReducer.duration} />
        {this.props.testReducer.start ? (
          this.renderRunning()
        ) : (
          <Button onClickHandler={this.startTest} icon={faPlay} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateTest: () => dispatch(updateTest()),
  startTest: () => dispatch(startTest()),
  finishTest: () => dispatch(finishTest()),
  saveTest: (patient, start, end) => dispatch(saveTest(patient, start, end))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
