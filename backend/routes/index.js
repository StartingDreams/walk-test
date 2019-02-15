const patient = require("./patient");
const walkTest = require("./walkTest");
module.exports = router => {
  patient(router);
  walkTest(router);
};
