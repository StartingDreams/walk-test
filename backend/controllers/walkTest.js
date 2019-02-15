const WalkTest = require("../models/WalkTest");

module.exports = {
  add: (req, res, next) => {
    let { start, end, patient } = req.body;
    if (!start || !end || !patient) {
      res.sendStatus(400);
      next();
    } else {
      new WalkTest({ start, end, patient }).save((err, newWalkTest) => {
        if (err) {
          res.status(500).send(err);
        } else if (!newWalkTest) {
          res.sendStatus(404);
        } else {
          res.send(newWalkTest);
        }
        next();
      });
    }
  },
  getAll: (req, res, next) => {
    WalkTest.find({})
      .sort("-start")
      .exec((err, walkTests) => {
        if (err) {
          res.status(500).send(err);
        } else if (!walkTests) {
          res.sendStatus(404);
        } else {
          res.send(
            walkTests.map(function(walkTest) {
              return walkTest.toObject({ virtuals: true });
            })
          );
        }
        next();
      });
  },
  getForPatient: (req, res, next) => {
    WalkTest.find({ patient: req.params.id })
      .sort("-start")
      .populate("patient")
      .exec((err, walkTests) => {
        if (err) {
          res.status(500).send(err);
        } else if (!walkTests) {
          res.sendStatus(404);
        } else {
          res.send(
            walkTests.map(function(walkTest) {
              return walkTest.toObject({ virtuals: true });
            })
          );
        }
        next();
      });
  },
  get: (req, res, next) => {
    WalkTest.findById(req.params.id)
      .populate("patient")
      .exec((err, walkTest) => {
        if (err) {
          res.status(500).send(err);
        } else if (!walkTest) {
          res.sendStatus(404);
        } else {
          res.send(walkTest.toObject({ virtuals: true }));
        }
        next();
      });
  }
};
