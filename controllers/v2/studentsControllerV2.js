const express = require("express");
const { getAllStudentsV2, getStudentByIdV2 } = require("../../queries/v2/studentsQueriesV2");

const studentsControllerV2 = express.Router();

// Get /students
// Define path + method and handlers
// Catch errors
studentsControllerV2.get("/", (req, res) => {
  try {
    // Handler goes here and gets all students
    const students = getAllStudentsV2();

    res.status(200).json({ data: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // Get / students / id
  studentsControllerV2.get("/:id", (req, res) => {
    try {
      // Handler goes here and gets the student with id
      const { id } = req.params;
      const student = getStudentByIdV2(id);

      return student
        ? res.status(200).json({ data: student })
        : res.status(404).json({ error: `No student with id of ${id} was found` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});

module.exports = studentsControllerV2;
