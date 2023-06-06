"use strict";
import { teachers } from "./teachers.js";

window.addEventListener("load", start);


// # Øvelse 10

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.

function start() {
    console.log(teachers);

    addTeacher()
    showTeachers();
    
}

// 2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.

function showTeachers() {
    document.querySelector("#teachers-list").innerHTML = "";
    for (const teacher of teachers) {
        showTeacher(teacher)
        
    }
}

function showTeacher(teacher) {
    const html = /* html */ `
    <li>${teacher.name}. email: ${teacher.email}</li>
    
    `

    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
}

// 3. Lav en funktion der tilføjer et nyt `teacher`-objekt til listen. Sørg for at nye `teacher`-objekter vises på websiden.

function addTeacher() {
    const newTeacher = {
        name: "Rasmus",
        email: "race@kea.dk"
    }

    teachers.push(newTeacher);
}
