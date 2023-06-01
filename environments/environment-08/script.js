"use strict";

// eksamenøvelse #6

window.addEventListener("load", start);

const songList = [];

function start() {
  console.log("hello");

  // addSong();
  document.querySelector("#add-song-form").addEventListener("submit", addSongClicked);
  document.querySelector("#sort-artist").addEventListener("change", sortBy);
  document.querySelector("#sort-title").addEventListener("change", sortBy);
}

function addSongClicked(event) {
  event.preventDefault();

  const form = document.querySelector("#add-song-form");
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  addSong(artist, title, duration);
}

function addSong(artist, title, duration) {
  const newSong = {
    artist: artist,
    title: title,
    duration: duration
  };
  songList.push(newSong);
  console.log(songList);
  showSongs()
}

function showSongs() {
  document.querySelector("#songlist").innerHTML = "";
songList.sort((a, b) => a.artist.localeCompare(b.artist));
  for (const song of songList) {
    showSong(song);
  }
}

function showSong(song) {
  const html = /*html */ `
    <li>${song.artist}, ${song.title}, ${song.duration}</li>
    
    `;

  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
}

function sortBy(event) {
    if (event.target.value === "artist") {
        songList.sort((a, b) => a.artist.localeCompare(b.artist));
    } else if (event.target.value === "title") {
        songList.sort((a, b) => a.title.localeCompare(b.title));
    }
    showSongs();
}
