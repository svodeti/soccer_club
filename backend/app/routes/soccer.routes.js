module.exports = app => {
  const sponsors = require("../controllers/sponsor.controller.js");
  const referees = require("../controllers/referees.controller.js");

  var router = require("express").Router();

  router.post("/sponsors/create", sponsors.create);

  // Retrieve all sponsors
  router.get("/sponsors/retrieve", sponsors.findAll);

  router.post("/referees/create",referees.create);
  router.get("/referees/retrieve",referees.findAll);
  router.put("/referees/update",referees.update);

  app.use('/api/', router);
};
