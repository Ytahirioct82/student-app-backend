//Create an instance of a express application.

const express = require("express");
const studentsController = require("./controllers/studentsController");
const cors = require("cors");

// Init express application
const app = express();

// Set up middleware
// Functions that will work with req, res before
// the final route handler function

app.use(cors());

// controllers
app.use("/students", studentsController);
// Define the rout handlers

// Healthcheck route.

app.get("/", (req, res) => {
  // Handler goes here
  res.status(200).json({ data: "Service is running!" });
});

// export the app so other files can use it.
module.exports = app;
