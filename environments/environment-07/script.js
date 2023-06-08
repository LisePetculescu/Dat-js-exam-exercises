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

    document.querySelector("#create-student-form").addEventListener("submit",createStudent); 
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
    console.log(studentList);
    loopStudents();
    
}

// 2. Lav en funktion der tjekker om en student har en korrekt email der består af mindst 4 tegn efterfulgt af @stud.kea.dk

function loopStudents() {
    for (const student of studentList) {
        removeThatShit(student)
    }
}

function checkThatEmail(student) {
    const theEmail = student.email;

    const splitEmail = theEmail.split("@");
    const before = splitEmail[0];
    const after = splitEmail[1];

    if (before.length >= 4 && after === "stud.kea.dk") {
        console.log("This is a correct student email: ", theEmail);
        return true;
    } else {
        console.error("This is not a correct student email: ", theEmail);
        return false;
    }
}



// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.

function removeThatShit() {
    studentList = studentList.filter(student => checkThatEmail(student));
}