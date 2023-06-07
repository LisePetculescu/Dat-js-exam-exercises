"use strict";
import { teachers } from "./teachers.js";

window.addEventListener("load", start);


// # Øvelse 10

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.

function start() {
    console.log(teachers);

    addTeacher("Rasmus", "race@kea.dk")
    showTeachers(teachers);
    // filterbyName("Mark Lee");

    document.querySelector("#searchName").addEventListener("keyup", searchByName);
    // searchByName();
}

// 2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.

function showTeachers(list) {
    document.querySelector("#teachers-list").innerHTML = "";
    for (const teacher of list) {
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

// function addTeacher() {
//     const newTeacher = {
//         name: "Rasmus",
//         email: "race@kea.dk"
//     }

//     teachers.push(newTeacher);
// }

function addTeacher(name, email) {
  const newTeacher = {
    name: name,
    email: email,
  };

  teachers.push(newTeacher);
}

function filterbyName(name) {

   const newList = teachers.filter(teacher => teacher.name === name);

   console.log(newList);

   showTeachers(newList);

}

function searchByName(event) {

    const name = event.target.value.toLowerCase();

    const searchedName = teachers.filter(teacher => teacher.name.toLowerCase().includes(name));

    showTeachers(searchedName);

}