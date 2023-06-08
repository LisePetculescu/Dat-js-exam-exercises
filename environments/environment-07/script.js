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
    console.log("the students on the list: ", studentList);
}

// 2. Lav en funktion der tjekker om en student har en korrekt email der består af mindst 4 tegn efterfulgt af @stud.kea.dk

function checkStudentEmail() {

    const studentEmail = 
}



// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.