const studentData = require("../data/studentData.json");

const { students } = studentData;
// Handler goes here and gets all students
const getAllStudents = () => students;

// Handler goes here and gets student by id
const getStudentById = (id) => students.find((student) => student.id === id);
module.exports = { getAllStudents, getStudentById };
