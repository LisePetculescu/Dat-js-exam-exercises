"use strict";
import { courses } from "./courses.js";

// # Øvelse 12

// Environment: `environment-05`

// 1. Importer `courses`-listen i `script.js`.

window.addEventListener("load", start);

function start() {
    console.log("hello");
    console.log(courses);

    sortByEcts();
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
    <li>ects points: ${course.ectsPoints}</li>
    `

    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}


// 3. Lav en funktion, der sorterer listen af `courses` efter stigende antal ECTS. Vis den sorterde liste på websiden.

function sortByEcts() {

    courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}
