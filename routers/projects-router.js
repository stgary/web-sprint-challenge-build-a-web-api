const express = require("express");
const router = express.Router();

const db = require("../data/helpers/projectModel.js");

// CRUD operations

// Post

router.post('/', validateProject, (req, res) => {
    db.insert(req.body)
       .then(dbRes => {
          res.status(201).json(req.body)
       })
       .catch(error => {
          console.log(error);
          res.status(500).json({
             message: "There was an error while saving the project to the database",
          });
       });
 });

// custom middleware

function validateProject(req, res, next) {
    const { name, description } = req.body
    if (name === undefined) {
      res.status(400).json({
        message: "Missing project name (MW)."
      });
    }
    if (description === undefined) {
      res.status(400).json({
        message: "Missing project description (MW)."
      });
    }
    next();
 }

module.exports = router;