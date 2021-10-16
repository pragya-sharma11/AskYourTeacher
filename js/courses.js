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

fullstack.onclick = () => {
  window.location = "../index.html?course=fullstack";
};
os.onclick = () => {
  window.location = "../index.html?course=os";
};
dsa.onclick = () => {
  window.location = "../index.html?course=dsa";
};
java.onclick = () => {
  window.location = "../index.html?course=java";
};
cn.onclick = () => {
  window.location = "../index.html?course=cn";
};
dbms.onclick = () => {
  window.location = "../index.html?course=dbms";
};
