"use strict";

// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder
// `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)

window.addEventListener("load", start);

let songList = [
  { artist: "Bob Dylan", title: "Knockin on heaven door", duration: "3:12", likes: 0 },
  { artist: "Miley Cyrus", title: "Flowers", duration: "2:50", likes: 0 },
  { artist: "Harry Styles", title: "sign of the times", duration: "4:10", likes: 0 },
];

function start() {
    console.log("Hello");

    showSongs();
}

// 2. Lav en funktion til at udskrive listen af sange på websiden 
// - tilføj en `upvote`-knap til hver sang.

function showSongs() {
    document.querySelector("#songlist").innerHTML = "";

    for (const song of songList) {
        showAllSongs(song)
        
    }
}

function showAllSongs(song) {
    const html = /*html */ `
    <li> ARTIST: ${song.artist} TITLE: ${song.title} (DURATION) ${song.duration} Upvotes: (${song.likes}) <button class="like">Upvote</button> </li>
    `;

    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

    document.querySelector("#songlist li:last-child .like").addEventListener("click", () => moveUpvotedSong(song))
}


// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen
// - udskriv derefter listen igen.

function moveUpvotedSong(song) {
    song.likes++;
    console.log(song.likes);
    songList = songList.sort((songA, songB) => songB.likes - songA.likes);

    showSongs();
}