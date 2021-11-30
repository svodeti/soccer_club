const db = require("../models");
const Coach = db.coach;

// Create and Save a new coach
exports.create = (req, res) => {

  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a coach
  const referee = {
    id: req.body.ref_id,
    name: req.body.name,
    mobile_number: req.body.mobile_number,
    email_id: req.body.email_id,
  };

  // Save referee in the database
  Coach.create(coach)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the coach."
      });
    });
};

// Retrieve all coach from the database.
exports.findAll = (req, res) => {

  Coach.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving coach."
      });
    });
};

// Delete coach from the database

exports.deleteCoach = (req,res)=> {
  Coach.destroy({
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
  
    Coach.update(req.body, {
      where: { id: req.body.id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Coach status was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Coach status with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating coach with id=" + id
        });
      });
  };

