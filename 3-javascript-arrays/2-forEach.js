import { students } from "./0-data.js";

// Non-Functional Approach
// Forma clàssica (no funcional)
// “Ves del 0 fins al final i mira cada casella”
/*
for(let i = 0; i < students.length; i++) {
  console.log(students[i])
}
*/

// Functional Approach
// “Per cada estudiant, executa això”
/*
students.forEach(function (student, index) {
  console.log(student, index)
})
*/

// Functional Approach with Arrow Function
// Immutability - Data should not be changed; use copies instead.

// Recorre els estudiants
// Construeix nom complet
// El guarda a fullnames

/*
const fullnames = [];

students.forEach((student) => {
  fullnames.push(student.name + " " + student.lastname);
});

console.log(fullnames);
*/
