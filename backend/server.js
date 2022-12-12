const express = require("express");
require('dotenv').config()
const workoutRoutes = require("./routes/workouts");

const app = express();

const port = process.env.PORT || 7000; 

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/workouts", workoutRoutes)


app.listen(port, () => console.log(`Server started on port ${port}`))