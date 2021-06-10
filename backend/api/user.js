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
router.get("/list", async (req, res) => {
  // let enquiry = await Enquiry.findAll();
  let { limit, page } = req.query;
  limit = limit || 50;
  page = page || 0;
  let query = `select id,name,email,phone,created_at,email_verified,phone_verified,status from  tbl_users limit ${limit} offset ${page*limit}`;
  console.log(query);
  connection.query(query, (err, enquiry, fields) => {
    console.log(err, enquiry, fields);
    if (!err) {
      res.status(200).json(enquiry);
    } else {
      res.status(400).json(err);
    }
  });
});
module.exports = router;
