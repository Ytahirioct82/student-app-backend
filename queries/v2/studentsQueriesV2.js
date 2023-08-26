const studentDataV2 = require("../../data/v2/studentDataV2.json");
const { getGradesByStudentIdV2 } = require("./gradeQueriesV2");

const { students } = studentDataV2;
// Handler goes here and gets all students
const getAllStudentsV2 = () => students;

// Handler goes here and gets student by id
const getStudentByIdV2 = (id) => students.find((student) => student.id === id);

const getAllStudentsWIthGradesV2 = () => {
  // Get all students
  const allStudents = getAllStudentsV2();
  // for each student...
  const allStudentsWithGrades = allStudents.map((student) => {
    // get the student's id
    const { id } = student;
    // get student's grades
    const grades = getGradesByStudentIdV2(id);
    //copy the student and add its grades (no mutation) to the copy
    const copy = { ...student, grades: grades };

    return copy;
  });
  return allStudentsWithGrades;
};
module.exports = { getAllStudentsV2, getStudentByIdV2, getAllStudentsWIthGradesV2 };
