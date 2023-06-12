"use strict";

// # Øvelse 20

// Environment: `environment-07`

// *Prøveeksamen #2*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, 
// fra formularen på websiden og tilføjer det til en liste.

window.addEventListener("load", start);

const studentList = [];

function start() {
    console.log("Hello");

    document.querySelector("#create-student-form").addEventListener("submit", createStudent);
}

function createStudent(event) {
    event.preventDefault();

    const form = event.target;

    const newStudent = {
        name: form.name.value,
        email: form.email.value,
        age: Number(form.age.value)
    }
    studentList.push(newStudent);
    sortByAge();
    console.log(studentList);
    loopStudents();
}


// 2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.

function loopStudents() {
    document.querySelector("#students-table-body").innerHTML = "";
    for (const student of studentList) {
        showStudent(student)
        
    }
}

function showStudent(student) {
    const html = /* html */ `
    <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
    `;

    document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
}


// 3. Sortér listen efter `age` så de yngste vises først.

function sortByAge() {
    studentList.sort((studentA, studentB) => studentA.age - studentB.age);
}