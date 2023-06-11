"use strict";

// # Øvelse 4

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.

window.addEventListener("load", start);

let users = [];

async function start() {
  users = await getUsers();

  createUser("lise", true, "admin");
  createUser("bølle", true, "admin");
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  console.log(data);
  return data;
}

function showUsers() {
  document.querySelector("#userlist").innerHTML = "";
  for (const user of users) {
    if (user.active) {
      showUser(user);
    }
  }
}

// 2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.

function showUser(user) {
  console.log(user);

  const html = `
  <li>${user.name}</li>`;

  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

// 3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user`
// objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden
// opdateres hver gang, der oprettes et nyt objekt.

function createUser(name, active, role) {
  const newUser = {
    name: name,
    active: active,
    role: role,
  };

  users.push(newUser);
  showUsers();
}
