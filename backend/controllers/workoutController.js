const Workout = require("../models/WorkoutModel");

//GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
    // sort -1 is decending order
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.json(workouts)
}


//GET A SINGLE WORKOUT

const getWorkout = async (req, res) => {
    const  {id} = req.params

    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }
    res.json(workout)
}

//CREATE A NEW WORKOUT
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

//DELETE A WORKOUT

//UPDATE A WORKOUT

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout
};