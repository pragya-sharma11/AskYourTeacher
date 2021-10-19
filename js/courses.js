var fullstack = document.getElementById("fullStack");
var os = document.getElementById("os");
var dsa = document.getElementById("dsa");
var java = document.getElementById("java");
var cn = document.getElementById("computerNetworks");
var dbms = document.getElementById("dbms");
var bookmarks = document.getElementsByClassName("bookmark");

function toggleBookmark(a) {
  a.classList.toggle("toggleBookmark");
}

function handleClick (e) {
  window.location = `playlist.html?course=${e.id}`;
} 
