const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose")

// --- GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
    // sort -1 is decending order
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.json(workouts)
}

// --- CREATE A NEW WORKOUT
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// -------- id ----------------

// --- GET A SINGLE WORKOUT

const getWorkout = async (req, res) => {
    const  { id } = req.params

    // check whether the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }
    res.json(workout)
}



// --- DELETE A WORKOUT
const deleteWorkout = async (req, res) => {
 const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
}
    const workout = await Workout.findOneAndDelete({_id: id})
    if (!workout) {
    return res.status(400).json({ error: "No such workout" });
    }
    res.json(workout);

}
// --- UPDATE A WORKOUT

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout
};