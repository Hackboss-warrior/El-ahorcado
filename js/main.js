"use strict";

// Declaraciones de variables y constantes
let active_mode = true;
let active_sound = true;
const body = document.body;
let errores=0;
let arrayWord=[];
let wordSize;
let z = 0;
let fail = 0;
// Botón de mutear
const muteButton = document.getElementById("mute");

// Botón de pistas
let palabraSeleccionada;
const pistasButton = document.getElementById("buttonPistas")
const showPistas = document.getElementById("showPistas")
pistasButton.addEventListener("click",solicitarPistas)

// Eventos click
muteButton.addEventListener("click", volume);

