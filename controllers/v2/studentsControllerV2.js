const express = require("express");
const {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWIthGradesV2,
} = require("../../queries/v2/studentsQueriesV2");
const { getGradesByStudentIdV2 } = require("../../queries/v2/gradeQueriesV2");

const studentsControllerV2 = express.Router();

// Get /students
// Define path + method and handlers
// Catch errors
studentsControllerV2.get("/", async (req, res) => {
  try {
    const { include } = req.query;

    if (include === "grades") {
      // embed the grades

      const students = await getAllStudentsWIthGradesV2();
      return res.status(200).json({ data: students });
    } else {
      // Handler goes here and gets all students
      const students = await getAllStudentsV2();
      res.status(200).json({ data: students });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // Get / students / id
  studentsControllerV2.get("/:id", async (req, res) => {
    try {
      // Handler goes here and gets the student with id
      const { id } = req.params;
      const student = await getStudentByIdV2(id);

      return student
        ? res.status(200).json({ data: student })
        : res.status(404).json({ error: `No student with id of ${id} was found` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get/students/id/grades

  studentsControllerV2.get("/:id/grades", async (req, res) => {
    // get student - return 404 if no students
    // if student, get student grades
    try {
      // Handler goes here and gets the student with id
      const { id } = req.params;
      const student = await getStudentByIdV2(id);

      // const student = getStudentByIdV2(id);
      if (student) {
        // return 200
        const grades = await getGradesByStudentIdV2(id);
        return res.status(200).json({ data: grades });
      }
      // return 404
      res.status(404).json({ error: `No student with id of ${id} was found` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});

module.exports = studentsControllerV2;
