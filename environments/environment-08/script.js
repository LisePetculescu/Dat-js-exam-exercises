"use strict";

// # Øvelse 24

// Environment: `environment-08`

// *Prøveeksamen #6 (sæt 2)*

// 1. Lav en liste over sange, og lav en funktion til at tilføje et
// sang-objekt med `artist`, `title` og `duration` fra formularen på websiden.

window.addEventListener("load", start);

let songList = [];

function start() {
  console.log("Hello");

  document.querySelector("#add-song-form").addEventListener("submit", createSong);

  document.querySelector("#sort-songs-form").addEventListener("change", sortBySelected);

  // loopSongs();
}

function createSong(event) {
  event.preventDefault();

  const form = event.target;

  const newSong = {
    artist: form.name.value,
    title: form.title.value,
    duration: form.duration.value
  };

  songList.push(newSong);
  console.log(songList);

  songList.sort((songA, songB) => songA.artist.localeCompare(songB.artist));

  loopSongs();
}

// 2. Lav en funktion til at udskrive listen af sange på websiden.

function loopSongs() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of songList) {
    showSongs(song);
  }
}

function showSongs(song) {
  const html = /*html */ `
    <li>ARTIST: ${song.artist} TITLE: ${song.title} (DURATION) ${song.duration} </li>
    `;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
}

// 3. Sortér listen alfabetisk efter `artist` eller `title` alt efter hvad der bliver valgt på websiden.

// function sortBySelected(event) {
//   // console.log("sorting");

//   const selected = event.target;
//   console.log(selected);
//   if (selected.value === "artist") {
//     songList = songList.sort((songA, songB) => songA.artist.localeCompare(songB.artist));
//   } else if (selected.value === "title") {
//     songList = songList.sort((songA, songB) => songA.title.localeCompare(songB.title));
//   }

//   loopSongs(songList);
// }

function sortBySelected(event) {
  // console.log("sorting");

  const selected = event.target.value;
  console.log(selected);

  songList = songList.sort((songA, songB) => songA[selected].localeCompare(songB[selected]));

  loopSongs(songList);
}

// [selected.value]
