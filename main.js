$(".keys").fadeToggle(10).slideDown(1000);
$(".heading").slideToggle(2000).slideToggle(1000);
var hotbod = document.querySelector(".top");
function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};
const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  this.classList.remove("playing");
}


keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);

