"use strict";

window.addEventListener("load", start);

const studentList = [];

function start() {

console.log("hello");

document.querySelector("#create-student-form").addEventListener("submit", addStudent);

}

function addStudent(event) {
    event.preventDefault();

    const form = event.target;

    const newStudent = {
        name: form.name.value,
        email: form.email.value,
        age: form.age.value
    }

    studentList.push(newStudent);
    console.log("student objekt", newStudent);
    console.log("listen", studentList);
}