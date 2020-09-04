const express = require("express");
const router = express.Router();

const db = require("../data/helpers/actionModel.js");
const dbp = require("../data/helpers/projectModel.js");

// custom middleware

function validateAction(req, res, next) {
    const { notes, description } = req.body
    if (notes === undefined) {
       res.status(400).json({
          message: "Missing action note (MW)."
      });
    }
    if (description === undefined) {
       res.status(400).json({
          message: "Missing action description (MW)."
      });
    }
    next();
 }
 
 function validateProjectId(req, res, next) {
    dbp.get(req.params.id)
       .then(dbRes => {
          if (dbRes) {
             next();
          } else {
             res.status(400).json({ 
                message: "Invalid project id (MW)."
             }); 
          }
       })
       .catch(error => {
          console.log(error);
             res.status(500).json({
                message: "Failure validating project id (MW)."
             });
       });
 }

module.exports = router;