const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Patient = new Schema({
  first: String,
  last: String
});
Patient.virtual("fullName").get(function() {
  return this.first + " " + this.last;
});
module.exports = mongoose.model("Patient", Patient);
