"use strict";

// # Øvelse 19

// Environment: `environment-07`

// *Prøveeksamen #1*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, 
// fra formularen på websiden og tilføjer det til en liste.

window.addEventListener("load", start);

const studentList = [];

function start() {
    console.log("Hello");

    document.querySelector("#create-student-form").addEventListener("submit", addStudent);
    
}

function addStudent(event) {
    event.preventDefault();

    const form = event.target;
    console.log(event.target);

    const newStudent = {
        name: form.name.value,
        email: form.email.value,
        age: Number(form.age.value)
    }

    studentList.push(newStudent);
    loopStudents();
    console.log("the students on the list: ", studentList);
}

// 2. Lav en funktion der tjekker om en student har en korrekt email der består af mindst 4 tegn efterfulgt af @stud.kea.dk

function loopStudents() {
    for (const student of studentList) {
        checkStudentEmail(student)
    }
}

function checkStudentEmail(student) {

    const studentEmail = student.email;

    const splitEmail = studentEmail.split("@");
    const before = splitEmail[0];
    const after = splitEmail[1];

    if (before.length >= 4 && after === "stud.kea.dk") {
        console.log("All is good");
        return true;
    } else {
        console.error("Oh ohh");
        return false
    }
    
}



// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.

function removeBadStudents() {

    studentList = studentList.filter(student => checkStudentEmail(student));

    console.log(studentList);
}