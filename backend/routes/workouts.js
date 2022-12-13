const express = require("express")
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout
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
  .delete(deleteWorkout)
  // UPDATE a workout
  .patch((req, res) => {
    res.json({ message: "UPDATE a new workout" });
  });




module.exports = router;