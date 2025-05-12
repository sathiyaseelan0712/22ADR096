const router = require("express").Router();

const solveProblem = require("../controllers/problem.controller");

router.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Welcome Back");
});

router.get("/number", solveProblem);

module.exports = router;
