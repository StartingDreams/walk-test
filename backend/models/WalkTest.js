const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const generateNote = (name, duration, date) =>
  name +
  ' completed their "Timed 10-Meter Walk Test" in ' +
  duration +
  " seconds on " +
  date.toDateString() +
  ".";

let WalkTest = new Schema({
  start: Date,
  end: Date,
  patient: {
    type: ObjectId,
    ref: "Patient"
  }
});
WalkTest.pre("save", function() {
  this.populate("patient");
});
WalkTest.pre("find", function() {
  this.populate("patient");
});
WalkTest.methods.setTestResults = function setTestResults(
  patientId,
  start,
  end
) {
  this.patient = patientId;
  this.start = start;
  this.end = end;
  return this.save();
};
WalkTest.virtual("note").get(function getNote() {
  return generateNote(this.patient.fullName, this.duration, this.start);
});
WalkTest.virtual("duration").get(function getDuration() {
  return (this.end.getTime() - this.start.getTime()) / 1000;
});
module.exports = mongoose.model("WalkTest", WalkTest);
