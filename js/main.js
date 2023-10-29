"use strict";

// Declaraciones de variables y constantes
let active_mode = true;
let active_sound = true;
const body = document.body;

// Botón de mutear
const muteButton = document.getElementById("mute");

// Eventos click
muteButton.addEventListener("click", volume);


//const ejem = document.getElementById("main-screen");

//document.body.addEventListener("keydown", keyPress);

//ejem.addEventListener("keydown", keyPress);


 document.addEventListener("keydown", function (event) {
     document.getElementById("main-screen").focus();
     keyPress(event);
 });

