const express = require("express");
const router = express.Router();
// const { Testimonial } = require("../db/Testimonials.js");

const { connection } = require("../db/db.js");

router.get("/", async function (req, res) {
  let { limit, page } = req.query;
  limit = limit || 50;
  page = page || 0;
  // let suggestion = await Suggestion.findAll();
  let query = `select * from tbl_testimonials limit ${limit} offset ${
    page * limit
  }`;
  connection.query(query, (err, testimonials, fields) => {
    if (!err) {
      res.status(200).json(testimonials);
    } else {
      res.status(400).json(err);
    }
  });
});
module.exports = router;
