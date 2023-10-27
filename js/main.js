"use strict";

// Declaraciones de variables y constantes
let active = true;
// Botón silenciar música
const muteButton = document.getElementById("mute");

function lightDark() {
  active = !active;
  const light_dark = document.getElementById("lightDark");
  if (active) {
    console.log("Modo claro activado");
    light_dark.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    console.log("Modo oscuro activado");
    light_dark.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
