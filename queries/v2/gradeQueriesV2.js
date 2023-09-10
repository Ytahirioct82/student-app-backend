const gradesDataV2 = require("../../data/v2/studentGradesV2.json");
const { grades } = gradesDataV2;

const getGradesByStudentIdV2 = (id) => {
  // Create an array to hold the result.
  const results = [];

  // for each grade..
  for (const grade of grades) {
    // Get the studentId for that grade
    const { studentId } = grade;
    // if the studentId === id
    if (studentId === id) {
      // push the grade to the results
      results.push(grade);
    }
  }
  //return results with all grades
  return results;
};

const getAllGradesV2 = () => {
  return grades;
};

const getGradeByIdV2 = (id) => {
  const grade = grades.find((grade) => id === grade.id);
  console.log("run", grade);
  return grade;
};

module.exports = { getGradesByStudentIdV2, getAllGradesV2, getGradeByIdV2 };
