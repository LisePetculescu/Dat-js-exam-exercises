"use strict";
import { courses } from "./courses.js";

// # Øvelse 13

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.
window.addEventListener("load", start);

// let newCourseList = courses;
// console.log("gg", newCourseList);

function start() {
    console.log("hello");

    console.log(courses);


    showCourses(courses);
 document
   .querySelector("#select-filter-ects")
   .addEventListener("change", filterByEcts);
// filterByEcts();
}

// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.

function showCourses(filteredCourses) {
    document.querySelector("#courses-list").innerHTML = "";
    for (const course of filteredCourses) {
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
// Filtreringen ændrer sig hver gang en ny `option` vælges.

function filterByEcts(event) {

    const selected = Number(event.target.value);
    // if (selected == "5") {
    //    newCourseList = courses.filter(course => course.ectsPoints == "5")
    // }

    const newCourseList = courses.filter(course => course.ectsPoints === selected)
    // eller .toString()

    showCourses(newCourseList);
}

