"use strict";

// eksamenøvelse #6

window.addEventListener("load", start);

const songList = [];

function start() {
  console.log("hello");

  // addSong();
  document.querySelector("#add-song-form").addEventListener("submit", addSong);
}

function addSong(artist, title, duration) {
  const newSong = {
    artist: artist,
    title: title,
    duration: duration
  };
  songList.push(newSong);
  console.log(songList);
}

function addSongClicked(event) {
  event.preventDefault;
  newSong = {
    artist: form.name.value,
    title: form.title.value,
    duration: Number(form.duration.value)
  };
}

function showSongs() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of songList) {
    showSongs(song);
  }
}

function showSong() {
  const html = /*html */ `
    <li>${song.artist}, ${song.title}, ${song.duration}</li>
    
    `;

  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
}
