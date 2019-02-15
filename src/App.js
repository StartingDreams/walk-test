import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPatients } from "src/actions/patient";
import Loading from "src/components/loading";
import Header from "src/components/header";
import Test from "src/components/test";
import Result from "src/components/result";
import Report from "src/components/report";
import { primaryLight } from "src/theme";
const styles = {
  app: Object.assign(
    {
      height: "100vh"
    },
    primaryLight
  ),
  bodyContainer: Object.assign(
    {
      padding: "10px 20px",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
      alignItems: "center"
    },
    primaryLight
  )
};

class App extends Component {
  componentWillMount() {
    this.props.getAllPatients();
  }
  render() {
    const isLoading = this.props.loadingReducer.loading > 0;
    const mode = this.props.uiReducer.mode;
    return (
      <div className="App" style={styles.app}>
        <Header />
        <div style={styles.bodyContainer}>
          {mode === "testing" && <Test />}
          {mode === "result" && <Result />}
          {mode === "report" && <Report />}
        </div>
        {isLoading === true && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getAllPatients: () => dispatch(getAllPatients())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
