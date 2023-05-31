"use strict";
window.addEventListener("load", start);

let songList = [];

function start() {
    console.log("hello");

    getSongs();
}

async function getSongs() {
    const response = await fetch("./playlist.json")
    const data = await response.json()

    songList = data;
    console.log(songList);
    showSongs(songList);
}

function showSongs(songList) {
    document.querySelector("#songlist").innerHTML = "";
    for (const song of songList) {
        console.log(song);
        showSong(song);
    }
}

function showSong(song) {
    const html = /*html */ ` 
    
    <li>${song.artist}, ${song.title}, ${song.duration} <button>Delete</button></li>
    `
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
        document.querySelector("#songlist li:last-child button").addEventListener("click", () => deleteSong(song));

}

function deleteSong(song) {
    // console.log(song);
    const songToRemove = song;
    songList = songList.filter(song => song.title != songToRemove.title)
    showSongs(songList);

}