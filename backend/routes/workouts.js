const express = require("express")
const {
  createWorkout,
  getWorkouts,
  getWorkout
} = require("../controllers/workoutController");


const router = express.Router()

// GET all workouts
router
  .route("/")
  .get(getWorkouts)
  //POST a new workout
  .post(createWorkout);



//GET a single workout
router
  .route("/:id")
  .get(getWorkout)
  //DELETE a new workout
  .delete((req, res) => {
    res.json({ message: "DELETE a new workout" });
  })
  // UPDATE a workout
  .patch((req, res) => {
    res.json({ message: "UPDATE a new workout" });
  });




module.exports = router;