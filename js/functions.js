"use strict";

function lightDark() {
  active_mode = !active_mode;
  const light_dark = document.getElementById("lightDark");
  if (active_mode) {
    console.log("Modo claro activado");
    light_dark.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    console.log("Modo oscuro activado");
    light_dark.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function volume() {
  active_sound = !active_sound;

  if (active_sound) {
    console.log("Modo claro activado");
    muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    console.log("Modo oscuro activado");
    muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
}
