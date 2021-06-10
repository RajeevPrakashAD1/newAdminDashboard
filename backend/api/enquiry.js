const express = require("express");
const router = express.Router();
const { connection } = require("../db/db.js");
router.post("/", async function (req, res) {
  try {
    // connection.query()
    res.status(200).json({ message: "successfully inserted " });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
router.get("/", async (req, res) => {
  // let enquiry = await Enquiry.findAll();
  let query = `select * from  tbl_enquiry`;
  connection.query(query, (err, enquiry, fields) => {
    console.log(err, enquiry, fields);
    if (!err) {
      res.status(200).json(enquiry);
    } else {
      res.status(400).json(e);
    }
  });
});
module.exports = router;
