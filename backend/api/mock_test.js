const express = require("express");
const router = express.Router();
// const { MockTestCategory } = require("../db/MockTestCategory.js");
const { connection } = require("../db/db.js");
function generateCategory(mock_test) {
  for (let i = 0; i < mock_test.length; i++) {
    let pid = mock_test[i].parent_id;
    while (pid) {}
  }
}
router.get("/", async function (req, res) {
  let query = `
  WITH  mock_category AS
   ( select title ,id,1  from tbl_mock_test_category
    where parent_id=0
    union all 
    select tbl_mock_test_category.title ,tbl_mock_test_category.id,mock_category[level]+1
    from tbl_mock_test_category
    join mock_category  
    on tbl_mock_test_category.parent_id=mock_category.id
    
    )`;
  let q = `
WITH RECURSIVE cte AS
(
  SELECT 1 AS n, 1 AS p, -1 AS q
  UNION ALL
  SELECT n + 1, q * 2, p * 2 FROM cte WHERE n < 5
)
SELECT * FROM cte;

`;
console.log(q)
  connection.query(q, (err, mock_test, fields) => {
    console.log(mock_test, err, fields);
    if (!err) {
      return res.status(200).json(mock_test);
    }
    res.status(400).json(err);
  });
});
module.exports = router;
