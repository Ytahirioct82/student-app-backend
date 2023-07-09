// App.js
// Define the rout handlers

const express = require("express");
const studentData = require("./studentData.json");

//Create an instance of a express application.

const app = express();

// Define our routes.
// Healthcheck route.
// GET / method = GET path = /

app.get("/", (req, res) => {
  // Handler goes here
  res.status(200).json({ data: "Service is running!" });
});

//Get /students
// Define path + method and handlers
// Catch errors

app.get("/students", (req, res) => {
  try {
    // Handler goes here and gets all students
    const { students } = studentData;

    res.status(200).json({ data: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // Get / students / id

  app.get("/students/:id", (req, res) => {
    try {
      // Handler goes here and gets all students
      const { students } = studentData;
      const { id } = req.params;
      const student = students.find((student) => student.id === id);
      student
        ? res.status(200).json({ data: student })
        : res.status(404).json({ error: `No student with id of ${id} was found` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});

// export the app so other files can use it.
module.exports = app;
