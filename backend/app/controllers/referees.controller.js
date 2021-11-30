const db = require("../models");
const Referee = db.referees;

// Create and Save a new Referee
exports.create = (req, res) => {

  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a referee
  const referee = {
    id: req.body.ref_id,
    name: req.body.name,
    mobile_number: req.body.mobile_number,
    email_id: req.body.email_id,
    income: req.body.income,
    acceptance_status: req.body.acceptance_status
  };

  // Save referee in the database
  Referee.create(referee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the referee."
      });
    });
};

// Retrieve all referees from the database.
exports.findAll = (req, res) => {

  Referee.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving referees."
      });
    });
};

// Delete referee from the database

exports.deleteReferee = (req,res)=> {
  Referee.destroy({
    where: {
      email_id: req.body.email_id
    }
  }).then(result => {
    res.send(result)
    }).catch(error => {
    console.log(error)
  })
}


// Update a referee by the id in the request
exports.update = (req, res) => {
    // const id = req.params.id;
  
    Referee.update(req.body, {
      where: { id: req.body.id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Referee status was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Referee status with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Referee with id=" + id
        });
      });
  };

