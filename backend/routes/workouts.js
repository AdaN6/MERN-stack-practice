const express = require("express")

const router = express.Router()

// GET all workouts
router
  .route("/")
  .get((req, res) => {
    res.json({ message: " welcome to the app" });
  })
//POST a new workout
  .post((req, res) => {
    res.json({message: "POST a new workout"})
  })



//GET a single workout
router
  .route("/:id")
  .get((req, res) => {
    res.json({ message: "GET a single workout" });
  })
  //DELETE a new workout
  .delete((req, res) => {
    res.json({ message: "DELETE a new workout" });
  })
  // UPDATE a workout
  .patch((req, res) => {
    res.json({ message: "UPDATE a new workout" });
  });




module.exports = router;