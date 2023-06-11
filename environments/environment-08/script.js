"use strict";

// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title`
// og `duration` (i form af minutter:sekunder, fx 3:21)

window.addEventListener("load", start);

const songList = [
  { artist: "artist1", title: "title1", duration: "2:13", votes: 0 },
  { artist: "artist2", title: "title2", duration: "2:23", votes: 0 },
  { artist: "artist3", title: "title3", duration: "2:33", votes: 0 }
];

function start() {
  console.log("Hello");

  console.log(songList);

  loopSongs();
}

// 2. Lav en funktion til at udskrive listen af sange på websiden -
// tilføj en `upvote`-knap til hver sang.

function loopSongs() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of songList) {
    showSong(song);
  }
}

function showSong(song) {
  const html = /* html */ `
    <br>
    <li>ARTIST: ${song.artist} TITLE: ${song.title} (DURATION) ${song.duration} votes: ${song.votes} <button>Upvote</button> </li>
    `;

  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

  document.querySelector("#songlist li:last-child button").addEventListener("click", () => upvoteClicked(song));
}

// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen
// - udskriv derefter listen igen.

function upvoteClicked(song) {
  song.votes++;
  console.log(song);
  songList.sort((songA, songB) => songB.votes - songA.votes);

  loopSongs();
}
