const express = require("express");
require('dotenv').config()
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");

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

app.use("/api/user", userRoutes);



//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(port, () =>
      console.log(`connect to db & Server started on port ${port}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });

