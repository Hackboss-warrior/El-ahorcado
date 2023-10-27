"use strict";

// Declaraciones de variables y constantes
let active_mode = true;
let active_sound = true;

// Botón de mutear
const muteButton = document.getElementById("mute");

// Eventos click
muteButton.addEventListener("click", volume);
