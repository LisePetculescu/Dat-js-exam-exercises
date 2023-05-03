"use strict";

// # Øvelse 3

// Environment: `environment-02`

// 1. Lav en funktion der modtager `name`, `type` og `age`,
// opretter et `animal` objekt med de tre properties, og returnerer det.

window.addEventListener("load", start);

const animals = [];

function start(ani) {
  // const my = createAnimal("charlie", "dog", 4);
  console.log(my);
  document.querySelector("button").addEventListener("click", createNew);
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  return animal;
}

// 2. Lav en funktion der reagerer når brugeren trykker
// på "Create new" knappen, og opretter et nyt `animal` objekt
// med de data der er tastet ind på websiden.

function createNew(event) {
  event.preventDefault();
  console.log("new");
  const newName = document.querySelector("#animal-name");
  const newType = document.querySelector("#animal-type");
  const newAge = document.querySelector("#animal-age");

  const name = newName.value;
  const type = newType.value;
  const age = newAge.value;

  const newAnimal = createAnimal(name, type, age);

  addToList(newAnimal);
  updateList();
}

// 3. Lav en funktion der viser listen af alle animal-objekter
// - sorteret alfabetisk. Listen opdateres hver gang brugeren
// opretter et nyt.

function addToList(animal) {
  animals.push(animal);
}

function updateList() {
  const sortedAnimals = animals.sort((a, b) => a.name.localeCompare(b.name));
  const namesChecked = animals.sort(checkName);

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  ////////////////////////how to not use => ???/////////////////
  sortedAnimals.forEach((animal) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td> ${animal.age}</td>`;
    tableBody.appendChild(row);
  });

  namesChecked.forEach(showAnimal);
}

function checkName(a, b) {
  return a.name.localeCompare(b.name);
}

function showAnimal(animal) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td> ${animal.age}</td>`;
  tableBody.appendChild(row);
}
