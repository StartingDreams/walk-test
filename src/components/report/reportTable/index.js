import React from "react";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  table: {
    borderCollapse: "collapse",
    fontFamily: "monospace",
    width: "100%",
    maxWidth: "500px"
  },
  cellHeader: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center"
  },
  cell: {
    backgroundColor: "#eee",
    color: "#333",
    fontSize: "23px",
    padding: "3px 10px",
    border: "1px solid #333"
  },
  cellDuration: {
    textAlign: "center"
  }
};

const ReportTable = props => {
  const headerStyles = Object.assign({}, styles.cell, styles.cellHeader);
  const cellDuration = Object.assign({}, styles.cell, styles.cellDuration);
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <td style={headerStyles}>
            <FontAwesomeIcon icon={faCalendar} />
          </td>
          <td style={headerStyles}>
            <FontAwesomeIcon icon={faClock} />
          </td>
        </tr>
      </thead>
      <tbody>
        {props.walkTests.map((walkTest, index) => {
          return (
            <tr>
              <td style={styles.cell}>
                {new Date(walkTest.start).toDateString()}
              </td>
              <td style={cellDuration}>{walkTest.duration}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReportTable;
