const express = require("express")
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
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
  .patch(updateWorkout);




module.exports = router;