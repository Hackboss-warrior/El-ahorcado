"use strict";

// Función Controlador de botón de modo noche / modo día
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

// Función controladora de botón de volumen
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

// Función para cargar el json dependiendo de que hayas seleccionado
function loadJSON(modo) {
  let archivoJSON;

  switch (modo) {
    case "facil":
      archivoJSON = "./assets/JSON/modo_facil.json";
      break;
    case "normal":
      archivoJSON = "./assets/JSON/modo_normal.json";
      break;
    case "dificil":
      archivoJSON = "./assets/JSON/modo_dificil.json";
      break;
    case "samu":
      archivoJSON = "./assets/JSON/modo_samu.json";
      break;
    default:
      console.error("Modo no válido");
      return;
  }

  fetch(archivoJSON)
    .then((response) => response.json())
    .then((data) => {
      const palabraSeleccionada = seleccionarPalabraAleatoria(data);
      console.log("Palabra: " + palabraSeleccionada.palabra);
      console.log("Pista: " + palabraSeleccionada.pista.pista1);
      if (modo === "facil" || modo === "normal") {
        console.log("Pista: " + palabraSeleccionada.pista.pista2);
      }
      //convertimos palabra seleccionada a un array de caracteres.
      arrayWord = Array.from(palabraSeleccionada.palabra);
      spaceGen();
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}

// Función para seleccionar aleatoriamente una palabra y sus pistas
function seleccionarPalabraAleatoria(jsonData) {
  const palabras = Object.keys(jsonData);
  const palabraAleatoria =
    palabras[Math.floor(Math.random() * palabras.length)];
  let pistas = jsonData[palabraAleatoria];
  pistas = pistas[0];

  document.getElementById("main-menu").style.display = "none";
  document.getElementById("main-screen").style.display = "block";
  showKeyboard("a", "z");
  return {
    palabra: palabraAleatoria.toUpperCase(),
    pista: pistas,
  };
}

// Función mostrar teclado en pantalla y leer la tecla clickada
function showKeyboard(a, z) {
  let i = a.charCodeAt(0);
  let j = z.charCodeAt(0);
  let letras = "";

  document.addEventListener("keydown", function (event) {
    document.getElementById("main-screen").focus();
    keyPress(event);
  });

  for (i; i <= j; i++) {
    letras = String.fromCharCode(i).toUpperCase();
    document.getElementById("keyboard").innerHTML += "<button id = '" + letras + "' onclick= 'inputLetter(\"" + letras + "\")' value='" + letras + "'>" + letras + "</button>";

    if (i === 110) {
      document.getElementById("keyboard").innerHTML +=
        "<button id='Ñ' onclick= inputLetter('Ñ')> Ñ </button>";
    }
  }
}

// Función leer la tecla pulsada en el teclado
function keyPress(event) {
  const key = event.key.toUpperCase(); // Obtiene la tecla que se presionó


  inputLetter(key);
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
      totalScore = oneShot + totalScore;
      break;
    default:
      console.error("no has pasado true, false o reset");
      break;
  }
  return totalScore;
}
//Función crea los espacios en funcion al numero de letras de la palabra escogida
function spaceGen() {
  wordSize = arrayWord.length;

  for (let i = 0; i < wordSize; i++) {
    let ids = arrayWord[i].toUpperCase();
    document.getElementById("palabraJuego").innerHTML +=
      "<p class=" + ids + ">_</p>";
  }
}

// Función leer pulsaciones de teclado en pantalla o en su casa de sugerencia de letras por teclado
let z = 0;
let fallaste = 0;
function inputLetter(letras) {


// Función leer pulsaciones de teclado en pantalla o en su casa de sugerencia de letras por teclado

function inputLetter(letras) {
  if (!document.getElementById(letras).disabled) {
    document.getElementById(letras).style.backgroundColor = 'red';
    document.getElementById(letras).disabled = 'true'
    let j = 0;
    for (let i = 0; i < wordSize; i++) {
      if (letras === arrayWord[i]) {
        const classLetter = document.getElementsByClassName(letras)
        classLetter[j].innerHTML = `<p>${letras}</p>`
        j = j + 1
        z = z + 1
        accounting('true')
        if (z === wordSize) {
          console.log('win');
        }
      }
    }

    if (z === wordSize) {
      console.log('win');
    }
    
    const omar = arrayWord.filter(letra => { return letras === letra })
    if (omar.length === 0) {
      accounting('false')
      fallaste = fallaste + 1
      perder()
      if (fallaste === 6) {
        console.log('loose');
      }
    }
    console.log(totalScore);
  }
}
function perder() {


  console.log(fallaste);
  switch (fallaste) {

    case 1:
      document.getElementById('circle').style.display = "block";
      console.log('cabeza');
      break;

    case 2:

      break;

    case 3:

      break;

    case 4:

      break;

    case 5:

      break;
    case 6:

      break;

      break;
    case maxFails:
      console.log('loose');
      break;


    default:
      break;
  }
}

