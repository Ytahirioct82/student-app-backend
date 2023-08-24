const express = require("express");
const { getAllStudents, getStudent } = require("../queries/studentsQueries");
const studentsController = express.Router();

//Get /students
// Define path + method and handlers
// Catch errors

studentsController.get("/", (req, res) => {
  try {
    // Handler goes here and gets all students
    const students = getAllStudents();

    res.status(200).json({ data: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // Get / students / id

  studentsController.get("/:id", (req, res) => {
    try {
      // Handler goes here and gets all students

      const { id } = req.params;
      const student = getStudent(id);

      return student
        ? res.status(200).json({ data: student })
        : res.status(404).json({ error: `No student with id of ${id} was found` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});

module.exports = studentsController;
