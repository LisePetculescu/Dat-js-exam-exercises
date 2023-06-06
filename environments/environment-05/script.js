"use strict";
import { courses } from "./courses.js";
window.addEventListener("load", start);
// # Øvelse 11

// Environment: `environment-05`

// 1. Importer `courses`-listen i `script.js`.
function start() {
    console.log("hello");
    console.log(courses);

    addCourse();

    showCourses();
}

// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.

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
    <li>${course.teacher}</li>
    
    `

    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}



// 3. Lav en funktion der tilføjer et nyt `course`-objekt til listen. Sørg for at nye `course`-objekter vises på websiden.

function addCourse() {
    const newCourse = {
        name: "java for beginners",
        ectsPoints: "10",
        teacher: "Rasmus"
    }

    courses.push(newCourse);
}

