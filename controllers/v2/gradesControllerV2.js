const express = require("express");
const gradesControllerV2 = express.Router();
const { getAllGradesV2, getGradeByIdV2 } = require("../../queries/v2/gradeQueriesV2");

gradesControllerV2.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const grade = getGradeByIdV2(id);
    res.json({ data: grade });
  } catch (error) {
    res.status(404).json({ error: `No grade with id of ${id} was found` });
  }
});

gradesControllerV2.get("/", (req, res) => {
  try {
    const grades = getAllGradesV2();
    res.json({ data: grades });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = gradesControllerV2;
