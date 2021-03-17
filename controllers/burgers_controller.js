// Inside the `burgers_controller.js` file, import the following:
//    * Express
const express = require("express")

const router = express.Router();
//    * Import `burger.js` to use its database functions
const burger = require("../models/burger.js");

// Create the `router` for the app and set up logic within those routes where required

// GET (read) ROUTE 
router.get("/", (req, res) => {
    res.send("Testing....");
});

// POST (create) route
router.post("/api/burgers", (req, res) => {
    res.send("Testing api .... Need req.body");
});

// PUT (update) route
router.put("api/burgers/:id", (req, res) => {
    res.send("Testing ... Need req.params");
});





// Export the `router` at the end of your file.
module.exports = router;