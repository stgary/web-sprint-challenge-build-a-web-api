const express = require("express");
const router = express.Router();

const db = require("../data/helpers/projectModel.js");

// CRUD operations

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