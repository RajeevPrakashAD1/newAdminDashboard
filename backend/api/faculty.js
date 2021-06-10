const express = require("express");
const router = express.Router();

const { connection } = require("../db/db.js");

router.get("/", async function (req, res) {
  let { limit, page } = req.query;
  limit = limit || 50;
  page = page || 0;
  let query = `select * from tbl_faculty limit ${limit} offset ${
    page * limit
  }`;
  connection.query(query, (err, faculty, fields) => {
    if (!err) {
      res.status(200).json(faculty);
    } else {
      res.status(400).json(err);
    }
  });
});
module.exports = router;
