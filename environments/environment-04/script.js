"use strict";
import { teachers } from "./teachers.js";

// # Øvelse 9

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.

window.addEventListener("load", start);

function start() {
    console.log("hello");
    console.log(teachers);
    
    sortByEmail();
    ShowTeachers();
}

// 2. Lav en funktion i `script.js`, der viser listen af alle `teacher`-objekter på websiden.
function ShowTeachers() {
    // sortByName();
    for (const teacher of teachers) {
        showTeacher(teacher);
    }
}

function showTeacher(teacher) {
    const html = /*html*/ `
    <li>Name: ${teacher.name}</li>
    <li>Email: ${teacher.email}</li>
    <br>

    `
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
}

// 3. Lav en funktion der kan sortere listen efter `name` og en anden funktion, der kan sortere listen efter `email`.

function sortByEmail() {
    teachers.sort((a, b) => a.email.localeCompare(b.email));
}
function sortByName() {
    teachers.sort((a, b) => a.name.localeCompare(b.name));
}
