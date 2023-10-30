"use strict";

// Declaraciones de variables y constantes
let active_mode = true;
let active_sound = true;
const body = document.body;
let arrayWord=[];
//variables contador
let totalScore = 0;
const sum_points = 2;
const substract_points = 1;
// Botón de mutear
const muteButton = document.getElementById("mute");

// Eventos click
muteButton.addEventListener("click", volume);

