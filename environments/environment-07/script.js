"use strict";

window.addEventListener("load", start);

let students = [];

function start() {
  // createStudent(name, email, age);
  document.querySelector("#create-student-form").addEventListener("submit", createStudent);

  //   showStudents(students);
}

function createStudent(event) {
  event.preventDefault();

  const form = event.target;

  const newStudent = {
    name: form.name.value,
    email: form.email.value,
    age: Number(form.age.value)
  };

  students.push(newStudent);
  console.log(students);
  showStudents();
}

function showStudents() {
  document.querySelector("#students-table-body").innerHTML = "";
  students.sort((a, b) => a.name.localeCompare(b.name));
  for (const student of students) {
    if (student.age >= 18) {
      showStudent(student);
    }
  }
}

function showStudent(student) {
  const html = /*html */ `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
        </tr>
    `;

  document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
}
