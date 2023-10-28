"use strict";

function lightDark() {
  active_mode = !active_mode;
  const light_dark = document.getElementById("lightDark");
  body.classList.toggle("dark");
  if (active_mode) {
    console.log("Modo claro activado");
    light_dark.innerHTML = '<i class="fa-solid fa-moon "></i>';
  } else {
    console.log("Modo oscuro activado");
    light_dark.innerHTML = '<i class="fa-regular fa-sun"></i>';
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

// Función para seleccionar aleatoriamente una palabra y sus pistas
function seleccionarPalabraAleatoria(jsonData) {
  const palabras = Object.keys(jsonData);
  const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
  const pistas = jsonData[palabraAleatoria];
  const pistaAleatoria = pistas[Math.floor(Math.random() * pistas.length)];
  return {
    palabra: palabraAleatoria,
    pista: pistaAleatoria
  };
}
