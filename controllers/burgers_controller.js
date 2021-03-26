// Inside the `burgers_controller.js` file, import the following:
//    * Express
const express = require("express");

const router = express.Router();
//    * Import `burger.js` to use its database functions
const burger = require("../models/burger.js");

// Create the `router` for the app and set up logic within those routes where required
// GET (read) ROUTE
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST (create) route
router.post("/api/burgers/", (req, res) => {
  
  burger.insertOne(
    
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      
      
      res.json({ id: result.insertId });
   
    }
  );
});

// PUT (update) route
router.put("api/burgers/:id", (req, res) => {
  let id = req.params.id;

  console.log("This is ID = ", id);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    id,
    function (result) {
      console.log("SHow me results = ", result);
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export the `router` at the end of your file.
module.exports = router;
