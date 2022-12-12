const express = require("express");

const app = express();

const port = process.env.PORT || 7000; 

// routes
app.get('/', (req, res) => {
    res.json({message: " welcome to the app"})
})


app.listen(port, () => console.log(`Server started on port ${port}`))