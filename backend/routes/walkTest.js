const walkTestCtrl = require("../controllers/walkTest");

module.exports = router => {
  router.route("/walk-test/:id").get(walkTestCtrl.get);
  router.route("/walk-test/patient/:id").get(walkTestCtrl.getForPatient);
  router.route("/walk-test").get(walkTestCtrl.getAll);
  router.route("/walk-test").post(walkTestCtrl.add);
};
