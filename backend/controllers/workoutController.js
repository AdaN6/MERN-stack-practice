const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose")

// --- GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
    const user_id = req.user._id

    // sort -1 is decending order
    // find user_id in order to list the workout for specific user
    const workouts = await Workout.find({user_id}).sort({createdAt: -1})

    res.json(workouts)
}

// --- CREATE A NEW WORKOUT
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    // add doc to db
    try {
        const user_id = req.user._id;
        const workout = await Workout.create({title, load, reps, user_id})
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

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ error: "No such workout" });
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
       ...req.body
    })
    if (!workout) {
        return res.status(400).json({error: "No such workout"})
    } 

    res.json(workout)

}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
};