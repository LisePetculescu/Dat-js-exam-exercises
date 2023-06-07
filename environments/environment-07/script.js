"use strict";


// # Øvelse 19

// Environment: `environment-07`

// *Prøveeksamen #1*

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.

window.addEventListener("load", start);

let studentList = [];

function start() {
    console.log("Hello");

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
    console.log(studentList);

    // loopStudents();
    removeFalseEmails();
    // return newStudent;
}


// 2. Lav en funktion der tjekker om en student har en korrekt email der består af mindst 4 tegn efterfulgt af @stud.kea.dk


function loopStudents() {

    console.log("check",studentList);

    for (const student of studentList) {
        checkEmail(student);
    }
}

function checkEmail(student) {

    const email = student.email;
    console.log(email);

    const splitEmail = email.split("@");
    console.log(splitEmail);
    const before = splitEmail[0]
    const after = splitEmail[1]
    console.log(before, "hihihi", after);

    if (before.length >= 4 && after === "stud.kea.dk") {
        console.log("all is good");
        return true;
    } else {
        console.log("it's all horrible");
        return false;
    }
    
}
// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.

function removeFalseEmails() {

    studentList = studentList.filter(student => checkEmail(student));

    console.log(studentList);
}