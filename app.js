// Define our route handlers here
// Separation of concerns
// Import external stuff (libraries)
// Import express library

const express = require("express");
const cors = require("cors");

// Import our stuff (our files, our components)
const studentsController = require("./controllers/studentsController");
const studentsControllerV2 = require("./controllers/v2/studentsControllerV2");
const gradesControllerV2 = require("./controllers/v2/gradesControllerV2");

// Init express application
const app = express();

// Set up middleware
// Functions that will work with req, res before
// the final route handler function
app.use(cors());

// controllers
app.use("/students", studentsController);
app.use("/v2/students", studentsControllerV2);
app.use("/v2/grades", gradesControllerV2);
// Define the rout handlers

// HealthCheck route.

app.get("/", (req, res) => {
  // Handler goes here
  res.status(200).json({ data: "Service is running!" });
});

// export the app so other files can use it.
module.exports = app;
