//const studentDataV2 = require("../../data/v2/studentDataV2.json");
const db = require("../../db");
const { getGradesByStudentIdV2 } = require("./gradeQueriesV2");

// const { students } = studentDataV2;
// Handler goes here and gets all students
const getAllStudentsV2 = async () => {
  const students = await db.any("SELECT * FROM students");
  return students;
};

// Handler goes here and gets student by id
const getStudentByIdV2 = async (id) => {
  const student = await db.oneOrNone("SELECT * FROM students WHERE id = $1", [id]);
  return student;
};

const getAllStudentsWIthGradesV2 = async () => {
  // Get all students
  const allStudents = await getAllStudentsV2();
  // for each student...

  const allStudentsWithGrades = await Promise.all(
    allStudents.map(async (student) => {
      // get the student's id
      const { id } = student;
      // get student's grades
      const grades = await getGradesByStudentIdV2(id);
      //copy the student and add its grades (no mutation) to the copy
      const copy = { ...student, grades: grades };

      return copy;
    })
  );

  return allStudentsWithGrades;
};
module.exports = { getAllStudentsV2, getStudentByIdV2, getAllStudentsWIthGradesV2 };
