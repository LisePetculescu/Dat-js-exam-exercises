"use strict";

// # Øvelse 19

// Environment: `environment-07`

// *Prøveeksamen #1*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`,
// fra formularen på websiden og tilføjer det til en liste.

window.addEventListener("load", start);

let studentList = [];

function start() {
  console.log("Hello");

  document.querySelector("#create-student-form").addEventListener("submit", createStudent);

  checkStudentEmail("lise1@stud.kea.dk");
  checkStudentEmail("lis@gmail.com");
}

function createStudent(event) {
  event.preventDefault();

  const form = event.target;

  const newStudent = {
    name: form.name.value,
    email: form.email.value,
    age: Number(form.age.value)
  };

  if (checkStudentEmail(newStudent.email)) {
    studentList.push(newStudent);
  }

  console.log(studentList);
  // removeBadEmails();
}

// 2. Lav en funktion der tjekker om en student har en korrekt email der
// består af mindst 4 tegn efterfulgt af @stud.kea.dk

function checkStudentEmail(email) {
  const split = email.split("@");
  const before = split[0];
  const after = split[1];

  if (before.length >= 4 && after === "stud.kea.dk") {
    console.log("den er go du! ", email);
    return true;
  } else {
    console.error("Du er dum ", email);
    return false;
  }
}

// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.

// function removeBadEmails() {

//     studentList = studentList.filter(student => checkStudentEmail(student.email));

//     console.log(studentList);
// }
