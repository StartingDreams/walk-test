const patientCtrl = require("../controllers/patient");

module.exports = router => {
  router.route("/patient/:id").get(patientCtrl.get);
  router.route("/patient").get(patientCtrl.getAll);
  router.route("/patient").post(patientCtrl.add);
};
