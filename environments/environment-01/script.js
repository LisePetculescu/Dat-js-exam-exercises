"use strict";

// # Øvelse 2

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json`
// og gemmer listen i en variabel.

window.addEventListener("load", start);

let users = [];

async function start(params) {
  console.log("js is on");

  users = await getUsers(users);

  console.log(users);
  showUsers(users);
  // count(users);
  countRoles(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();

  console.log(data);
  return data;
}

// 2. Lav en funktion der viser listen på websiden.

function showUsers(users) {
  for (const user of users) {
    showUsersAll(user);
    // countIf(user);
    // count(user);
  }
}

function showUsersAll(user) {
  const html = `<li>${user.id}, ${user.name}, ${user.role}, ${user.active}</li>
  `;
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

// 3. Lav en funktion der tæller hvor mange brugere
// der har rollerne `admin`, `user` og `guest` - 
// og viser antallene på websiden.

function countRoles(users) {
  let countAdmin = 0;
  let countUsers = 0;
  let countGuests = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "admin") {
      countAdmin++;
    } else if (users[i].role === "user") {
      countUsers++;
    } else if (users[i].role === "guest") {
      countGuests++;
    }
  }

  document.querySelector("#admin-count").innerHTML = `${countAdmin}`;
  document.querySelector("#user-count").innerHTML = `${countUsers}`;
  document.querySelector("#guest-count").innerHTML = `${countGuests}`;
}

// function countIf(user) {
//   let admin = 0;
//   for (let i = 0; i < users.length; i++) {
//     if (user.role === "admin") {
//       // console.log("admin: " + user.name);
//       admin++;
//     }
//     // console.log(i)
//     // } else if (user.role === "user") {
//       //   console.log(`user: ${user.name}`);
//       // } else if (user.role === "guest") {
//         //   console.log(`guest: ${user.name}`);
//         // }
//         // console.log("ll" + admin)
//       }
// }

// function count( user) {
//   // let length = users.length;
//   // console.log(length);

//   // if (user.role === "admin") {
//   //   console.log(user.name);
//   // }
//   // console.log(admins)
//   // // let admins = users.role

//   let ad = 0;
//   for (let i = 0; i < users.length; i++) {
//     if (user.role === "admin") {
//       ad++;
//     }
//     console.log(ad);
//   }
// }
