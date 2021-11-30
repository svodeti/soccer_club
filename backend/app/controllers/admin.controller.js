const db = require("../models");
const Admin = db.admin;

// Create and Save a new admin
exports.create = (req, res) => {

  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a admin
  const admin = {
    id: req.body.ref_id,
    name: req.body.name,
    password: req.body.password,
    mobile_number: req.body.mobile_number,

  };

  // Save referee in the database
  Coach.create(coach)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the admin."
      });
    });
};



// Delete admin from the database

exports.deleteAdmin = (req,res)=> {
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


