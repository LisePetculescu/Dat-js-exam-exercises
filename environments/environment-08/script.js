"use strict";

// # Øvelse 22

// Environment: `environment-08`

// *Prøveeksamen #4 (sæt 2)*

// 1. Lav en funktion der indlæser JSON-filen `playlist.json` og gemmer listen i en variabel.

window.addEventListener("load", start);

async function start() {
    console.log("Hello");

   const thePlaylist = await getPlaylist();
   showPlaylist(thePlaylist);
}

async function getPlaylist() {
    const response = await fetch("playlist.json");
    const data = await response.json();

    console.log(data);
    return data;
}



// 2. Lav en funktion til at udskrive listen af sange på websiden- 
// tilføj en `remove`-knap til hver sang.

function showPlaylist(thePlaylist) {
    for (const song of thePlaylist) {
        showSongs(song)
    }
}

function showSongs(song) {
    const html = /* html */ `
    <br>
    <li>ARTIST: ${song.artist}, TITLE: ${song.title}, (DURATION) ${song.duration}</li>
    <button id="removeSong">Delete</button>
    `;

    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

    document.querySelector("#songlist li:last-child").addEventListener("click", removeChosenSong);
}



// 3. Få remove-knappen til at fjerne den pågældende sang fra listen, og udskriv listen igen.

function removeChosenSong(event) {

    console.log(event.target);
}
