"use strict";
import { courses } from "./courses.js";

// # Øvelse 13

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.
window.addEventListener("load", start);

function start() {
    console.log("hello");

    console.log(courses);

document.querySelector("#select-filter-ects").addEventListener("change", filterByEcts)

    showCourses();
}

// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.

function showCourses() {

    for (const course of courses) {
        showCourse(course)
    }

}

function showCourse(course) {

    const html = /* html */ `
    <br>
    <li>${course.name}</li>
    <li>${course.ectsPoints}</li>
    
    `

    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

// 3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). 

function filterByEcts() {

    const selected = document.querySelector(option).value;
    if (selected === "5") {
        courses.filter()
    }
}


// Filtreringen ændrer sig hver gang en ny `option` vælges.
