const studentDataV2 = require("../../data/v2/studentDataV2.json");

const { students } = studentDataV2;
// Handler goes here and gets all students
const getAllStudentsV2 = () => students;

// Handler goes here and gets student by id
const getStudentByIdV2 = (id) => students.find((student) => student.id === id);
module.exports = { getAllStudentsV2, getStudentByIdV2 };
