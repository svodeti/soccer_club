const db = require("../models");
const Sponsors = db.sponsors;

// Create and Save a new Sponsor
exports.create = (req, res) => {

  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Sponsor
  const sponsor = {
    name: req.body.name,
    representative_name: req.body.representative_name,
    mobile_number: req.body.mobile_number,
    email_id: req.body.email_id,
    income: req.body.income,
    acceptance_status: req.body.acceptance_status,
    sponsoring_amount: req.body.sponsoring_amount,
    comments: req.body.comments,
    previous_sponsorships: req.body.previous_sponsorships,
    address: req.body.address
  };

  // Save sponsor in the database
  Sponsors.create(sponsor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sponsor."
      });
    });
};

// Retrieve all sponsors from the database.
exports.findAll = (req, res) => {

  Sponsors.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sponsors."
      });
    });
};

