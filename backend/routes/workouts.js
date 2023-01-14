const express = require("express")
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

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