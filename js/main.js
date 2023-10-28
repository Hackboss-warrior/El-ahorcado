"use strict";

// Declaraciones de variables y constantes
let active_mode = true;
let active_sound = true;
const body = document.body;

const easyButton = document.getElementById('btnEasyMode');
const normalButton = document.getElementById('btnNormalMode');
const hardButton = document.getElementById('btnHardMode');

// Botón de mutear
const muteButton = document.getElementById("mute");

// Eventos click
muteButton.addEventListener("click", volume);
easyButton.addEventListener('click', easyMode);
normalButton.addEventListener('click', normalMode);
hardButton.addEventListener('click', hardMode);

// Cargar el JSON facil
function easyMode() {
    fetch('./assets/JSON/modo_facil.json')
        .then(response => response.json())
        .then(data => {
            const palabraSeleccionada = seleccionarPalabraAleatoria(data);
            console.log("Palabra: " + palabraSeleccionada.palabra);
            console.log("Pista: " + palabraSeleccionada.pista.pista1);
            console.log("Pista: " + palabraSeleccionada.pista.pista2);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Cargar el JSON normal
function normalMode() {
    fetch('./assets/JSON/modo_normal.json')
        .then(response => response.json())
        .then(data => {
            const palabraSeleccionada = seleccionarPalabraAleatoria(data);
            console.log("Palabra: " + palabraSeleccionada.palabra);
            console.log("Pista: " + palabraSeleccionada.pista.pista1);
            console.log("Pista: " + palabraSeleccionada.pista.pista2);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Cargar el JSON dificil
function hardMode() {
    fetch('./assets/JSON/modo_dificil.json')
        .then(response => response.json())
        .then(data => {
            const palabraSeleccionada = seleccionarPalabraAleatoria(data);
            console.log("Palabra: " + palabraSeleccionada.palabra);
            console.log("Pista: " + palabraSeleccionada.pista.pista1);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Cargar el JSON samu
function samuMode() {
    fetch('./assets/JSON/modo_samu.json')
        .then(response => response.json())
        .then(data => {
            const palabraSeleccionada = seleccionarPalabraAleatoria(data);
            console.log("Palabra: " + palabraSeleccionada.palabra);
            console.log("Pista: " + palabraSeleccionada.pista.pista1);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}
