const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }

}, { timestamps: true})

// here use singular as later on it's going to pluralise this to create a workout collection for us automatically
module.exports = mongoose.model('Workout', workoutSchema)