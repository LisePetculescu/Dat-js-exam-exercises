"use strict";

window.addEventListener("load", start);

// 1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.

const animalList = [
  { name: "Monkey", type: "cat", age: 3 },
  { name: "Charlie", type: "dog", age: 4 },
  { name: "Hammy", type: "hamster", age: 2 },
];

function start() {
  showAnimals();
}
// 2. Lav en funktion der viser listen af alle animal-objekter - sorteret efter `age`.

function showAnimals() {
  animalList.sort(function (a, b) {
    return a.age - b.age;
  });

  for (let i = 0; i < animalList.length; i++) {
    const html = /*HTML*/ `
    <tbody>
        <tr>
            <td>${animalList[i].name}</td>
            <td>${animalList[i].type}</td>
            <td>${animalList[i].age}</td>
            <br>
        </tr>
    </tbody>
    `;

    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
  }
}

// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal` objekt
// og tilføjer det til den liste. Listen på websiden opdateres hver gang, der opretteres et nyt objekt.
function createAnimal() {

}

