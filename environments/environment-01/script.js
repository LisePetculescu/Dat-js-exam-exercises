"use strict";

window.addEventListener("load", start);

let users = [];

async function start() {
  console.log("js is running");

  users = await getUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();

  console.log(data);

  return data;
}

// Lav en funktion der viser listen på websiden -
// hver user skal vises med navn og hvorvidt de er aktive eller ej.

function showUsers(users) {
  for (const user in users) {
  }
}
