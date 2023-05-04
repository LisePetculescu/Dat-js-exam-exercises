"use strict";

// # Øvelse 4

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.

window.addEventListener("load", start);

let users;

async function start() {
  users = await getUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  console.log(data);
  return data;
}

function showUsers() {
  for (const user of users) {
    showUser(user);
  }
}

function showUser(user) {}

// 2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
// 3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user`
//objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden
// opdateres hver gang, der opretteres et nyt objekt.
