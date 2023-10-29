'use strict';

// Función Controlador de botón de modo noche / modo día
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

// Función controladora de botón de volumen
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

// Función para cargar el json dependiendo de que hayas seleccionado
function loadJSON(modo) {
  let archivoJSON;

  switch (modo) {
    case 'facil':
      archivoJSON = './assets/JSON/modo_facil.json';
      break;
    case 'normal':
      archivoJSON = './assets/JSON/modo_normal.json';
      break;
    case 'dificil':
      archivoJSON = './assets/JSON/modo_dificil.json';
      break;
    case 'samu':
      archivoJSON = './assets/JSON/modo_samu.json';
      break;
    default:
      console.error('Modo no válido');
      return;
  }

  fetch(archivoJSON)
    .then(response => response.json())
    .then(data => {
      const palabraSeleccionada = seleccionarPalabraAleatoria(data);
      console.log("Palabra: " + palabraSeleccionada.palabra);
      console.log("Pista: " + palabraSeleccionada.pista.pista1);
      if ((modo === 'facil') || (modo === 'normal')) {
        console.log("Pista: " + palabraSeleccionada.pista.pista2);
      }
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
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

// Función mostrar teclado en pantalla y leer la tecla clickada
function showKeyboard(a, z) {
  let i = a.charCodeAt(0),
    j = z.charCodeAt(0);
  let letras = '';

  document.addEventListener("keydown", function (event) {
    document.getElementById("main-screen").focus();
    keyPress(event);
  });
  /*
  Las barras invertidas utilizadas abajo se utilizan para representar comillas reales que no rompan la concatenación, si omites las barras invertidas estaríamos cortando la concatenación realizada (CR > strings> characters scape)
  */
  for (i; i <= j; i++) {
    letras = String.fromCharCode(i).toUpperCase();
    document.getElementById('keyboard').innerHTML +=
      "<button onclick= 'inputLetter(\"" + letras + "\")' value='" + letras + "'>" + letras + "</button>"
    console.log(letras);
    if (i === 110) {
      document.getElementById('keyboard').innerHTML +=
        "<button onclick= inputLetter(\"Ñ\")> Ñ </button>";
    }
  }
}

// Función leer la tecla pulsada en el teclado
function keyPress(event) {
  const key = event.key.toUpperCase(); // Obtiene la tecla que se presionó
  inputLetter(key)
}

//conteo de marcador
function accounting(correct) {
  switch (correct) {
    case "true":
      totalScore = totalScore + sum_points;
      break;
    case "false":
      if (totalScore >= 1) {
        totalScore = totalScore - substract_points;
      } else {
        totalScore = 0;
      }
      break;
    case "reset":
      totalScore = 0;
      break;
    case "oneShot":
      totalScore = 20 + totalScore;
      break;
    default:
      console.error("no has pasado true, false o reset");
      break;
  }
  return totalScore;
}

// Función leer pulsaciones de teclado en pantalla o en su casa de sugerencia de letras por teclado
function inputLetter(letras) {
  console.log(letras)
}