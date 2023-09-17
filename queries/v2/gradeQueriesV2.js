const db = require("../../db");
// const { grades } = gradesDataV2;

const getGradesByStudentIdV2 = async (id) => {
  const studentGrades = await db.any("SELECT * FROM grades WHERE student_id = $1", [id]);
  return studentGrades;
};

const getAllGradesV2 = async () => {
  const AllGrades = await db.any("SELECT * FROM grades");
  return AllGrades;
};

const getGradeByIdV2 = async (id) => {
  const grade = await db.oneOrNone("SELECT * FROM grades WHERE id = $1", [id]);
  return grade;
};

module.exports = { getGradesByStudentIdV2, getAllGradesV2, getGradeByIdV2 };
