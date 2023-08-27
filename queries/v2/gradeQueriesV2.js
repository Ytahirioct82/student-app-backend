const gradesDataV2 = require("../../data/v2/studentGradesV2.json");

const getGradesByStudentIdV2 = (id) => {
  // Create an array to hold the result.
  const results = [];
  const { grades } = gradesDataV2;

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

module.exports = { getGradesByStudentIdV2 };
