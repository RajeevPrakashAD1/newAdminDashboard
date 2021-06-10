const express = require("express");
const router = express.Router();
// const { Suggestion } = require("../db/Suggestion.js");
const { connection } = require("../db/db.js");

router.post("/", async function (req, res) {
  try {
    // let suggestion = await Suggestion.create(req.body);
    let query = `insert into tbl_suggestions values ()`;
    connection.query(query);
    res.status(200).json({ message: "successfully inserted " });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
router.get("/", async (req, res) => {
  let { limit, page } = req.query;
  limit = limit || 50;
  page = page || 0;
  // let suggestion = await Suggestion.findAll();
  let query = `select * from tbl_suggestions limit ${limit} offset ${
    page * limit
  }`;
  connection.query(query, (err, suggestion, fields) => {
    if (!err) {
      res.status(200).json(suggestion);
    } else {
      res.status(400).json(err);
    }
  });
});
module.exports = router;
