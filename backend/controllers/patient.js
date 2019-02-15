const Patient = require("../models/Patient");

module.exports = {
  add: (req, res, next) => {
    let { first, last } = req.body;
    if (!last || !first) {
      res.sendStatus(400);
      next();
    } else {
      new Patient({ first, last }).save((err, newPatient) => {
        if (err) {
          res.status(500).send(err);
        } else if (!newPatient) {
          res.sendStatus(400);
        } else {
          res.send(newPatient.toObject({ virtuals: true }));
        }
        next();
      });
    }
  },
  getAll: (req, res, next) => {
    Patient.find({}).exec((err, patients) => {
      if (err) {
        res.status(500).send(err);
      } else if (!patients) {
        res.sendStatus(404);
      } else {
        res.send(
          patients.map(function(patient) {
            return patient.toObject({ virtuals: true });
          })
        );
      }
      next();
    });
  },
  get: (req, res, next) => {
    Patient.findById(req.params.id)
      .populate("patient")
      .exec((err, patient) => {
        if (err) {
          res.status(500).send(err);
        } else if (!patient) {
          res.sendStatus(404);
        } else {
          res.send(patient.toObject({ virtuals: true }));
        }
        next();
      });
  }
};
