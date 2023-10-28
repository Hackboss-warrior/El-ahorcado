'use strict';

function lightDark() {
  active_mode = !active_mode;
  const light_dark = document.getElementById('lightDark');
  body.classList.toggle('dark');
  if (active_mode) {
    console.log('Modo claro activado');
    light_dark.innerHTML = '<i class="fa-solid fa-moon "></i>';
  } else {
    console.log('Modo oscuro activado');
    light_dark.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }
}

function volume() {
  active_sound = !active_sound;

  if (active_sound) {
    console.log('Modo claro activado');
    muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    console.log('Modo oscuro activado');
    muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
}

// Función para seleccionar aleatoriamente una palabra y sus pistas
function seleccionarPalabraAleatoria(jsonData) {
  const palabras = Object.keys(jsonData);
  const palabraAleatoria =
    palabras[Math.floor(Math.random() * palabras.length)];
  const pistas = jsonData[palabraAleatoria];
  const pistaAleatoria = pistas[Math.floor(Math.random() * pistas.length)];

  document.getElementById('main-menu').style.display = 'none';
  document.getElementById('main-screen').style.display = 'block';
  showKeyboard('a', 'z');
  return {
    palabra: palabraAleatoria,
    pista: pistaAleatoria,
  };
}

// Función mostrar teclado en pantalla
function showKeyboard(a, z) {
  let i = a.charCodeAt(0),
    j = z.charCodeAt(0);
  let letras = '';
/*
Las barras invertidas utilizadas abajo se utilizan para representar comillas reales que no rompan la concatenación, si omites las barras invertidas estaríamos cortando la concatenación realizada (CR > strings> characters scape)
*/
  for (i; i <= j; i++) {
    letras = String.fromCharCode(i).toUpperCase();
    document.getElementById('keyboard').innerHTML +=
    "<button onclick= 'inputLetter(\"" + letras + "\")' value='"+letras+"'>" +letras+ "</button>"
    console.log(letras);
    if (i === 110){
      document.getElementById('keyboard').innerHTML +=
    "<button onclick= inputLetter(\"Ñ\")> Ñ </button>";
    }
  }
}


function inputLetter(letras){
  console.log(letras)
}