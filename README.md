# El-ahorcado

# Primer proyecto de Hackaboss

ADD | crear archivo
DELL | Borrar archivo
UPD | Actualizar archivo

---

## Brainstorming

### CONCEPTUALIZACIÓN:

- Modo oscuro (terror) -> Temática pizarra escolar halloween. Fondo pizarra; font nosifer.

- Modo claro -> Temática cuaderno escolar. Fondo libreta; font <h>nene Weno</h> <p>handwrited</p>

- Pantalla menú: niveles de dificultad -> fácil / normal / difícil / Samu / custom

- Sonidos: Música de fondo -> Modo claro: tono escolar / Modo oscuro: Música tétrica. Botón silenciar música

- Efectos de sonido: Sonido para acierto y fallo.

- Diseño monigote: Modo claro -> Tradicional / Modo oscuro-> Cabeza calabaza

- Game Over: Pantalla con bicho y sonido para asustar.

- Crear favicon

---

### LÓGICA:

- Cómo máximo el usuario puede cometer 6 errores.

- La palabra en pantalla debe aparece sustituida por guiones bajos.

- Botón resetear juego.

- Puntos por resolución de palabras. Por cada letra acertada sumar 1 punto, por letra fallada restar dos puntos si resuelves la palabra entera 5 puntos. Si se muere el monigote pierdes todos los puntos y hay que ir a reset.

- Puntuar de diferente manera las vocales y las consonantes (las vocales 2 puntos al haber menos, las consonantes 1)

- Lógica de modo oscuro y modo claro (activar y desactivar con un interruptor)

- Botón silenciar música.

- Modo fácil: Una sola palabra, longitud máxima de 6 caracteres, no penalización por pedir pistas (el máximo es dos pistas).

- Modo normal: Se puede utilizar una sola palabra o una palabra compuesta, longitud máxima 15 caracteres, dos pistas, pero por cada pista se acumula un fallo.

- Modo difícil: Es igual que el normal pero no se pueden solicitar pistas.

- Modo Samu: Palabras relacionadas con programación, cosas de clase, etc. La pista debe ser una pregunta relacionada con la palabra en cuestión.

- Penalización por pedir una pista -> perder una extremidad del monigote.

- Todo tiene que trabajar en mayúsculas (toUpperCase).

- Game over: Aparte de mostrar que has perdido debe aparecer la puntuación final y la resolución de la palabra en la que se ha perdido.

---

BASE DE DATOS:

- Las palabras y pistas se almacenarán en un JSON, en formato objeto, con la estructura palabra/pista1/pista2.

- Las puntuaciones se almacenan en un contador (variable)

---

# DOC

DOCUMENTACION JSON
Creamos 4 archivos json distintos para almacenar la nuestro vocabulario con un array con dos pistas

PUNTUACIONES
Función de conteo que contiene un switch con cuatro posibles variables que ejecuntan operaciones distintas. la intención es que si marcas reset, reinicie el contador; que sume o reste puntos dependiendo de si acierrtas o no y por ultimo le hemos añadido la posibilidad de un bonus extra si se resuelve la palabra completa.

---

# Índice de documentos

- index.html --> Es la página principal, donde se estructuran los diferentes contenidos del juego.

- style.css --> Recoge todos los estilos del modo estándar del juego.

- dark_mode.css --> Recoge todos los estilos del modo oscuro del juego.

- main.js --> En este documento JavaScript recogemos las principales variables del juego, además de algunos elementos recuperados del index.html para trabajar con ellos desde JS.

- functions.js --> En este archivo se encuentran todas las funcionalidades del juego.

- config.js --> En este documento se encuentran los parámetros configurables relacionados con la puntuación del juego.

- carpeta "assets" --> En ella incluimos todos los recursos utilizados a lo largo del proyecto.

---

# Documentación

El proyecto trata de crear un juego basado en el clásico juego del ahorcado, además, hemos aprovechado este para celebrar el Samaín.

En primer lugar hemos creado 3 modos de dificultad; fácil, normal, difícil y un modo personalizado llamado "Modo Samu", en este último empleamos para el juego tanto palabras relacionadas con el sector tech, como palabras repetidas en clase. Para cada uno de los modos de dificultad hemos utilizado un archivo JSON que actúa como base de datos tanto para las palabras a utilizar como para las pistas de las propias palabras.

El juego se desarrolla en un solo documento HTML, en el que vamos habilitando y deshabilitando las diferentes pantallas necesarias.

A lo largo de todo el juego el usuario puede interactuar con un menu de navegación en el que aparecen tres botones. Uno para alternar entre el modo claro y oscuro (este modo tiene alguna sorpresas preparadas), silenciar los efectos de sonido del juego y la opción de resetear la partida y volver al menú de selección de modo.

Una vez el usuario decide un modo de juego, el programa le lleva a la página principal. En ella puede encontrar un contador de puntuación, mediante el cuál podrá obtener dos puntos por cada letra acertada y perder uno por cada fallo, además en la parte central puede observar un botón el cuál representa la opción a la que hemos apodado "oneshot", clicando en él podrá resolver la palabra completa en un solo intento. En el caso de lograrlo, el usuario obtendrá 50 puntos. También en la parte superior derecha de la pantalla existe un botón mediante el que el usuario podrá obtener hasta un máximo de dos pistas, dependiendo del modo de dificultad elegido con anterioridad.

En la parte inferior de la pantalla aparece un teclado funcional, el cuál facilita la selección de caracteres a adivinar en la palabra principal del juego, situada justo encima de este. Para la generación de este teclado en pantalla se ha realizado una función en JavaScript de la siguiente manera:

Para generar las letras accedemos a los codigos ASCII que recorren de la letra 'a' a la 'z', una vez que los adquirimos utilizamos la funncion String.fromCharCode() para recuperar esas letras que ya tenemos y utilizamos este parametro para llamar a todas las letras y guardarlas en un nuevo botón. Este la envia cuando la llamamos y la muestra en el boton como texto. ahora debemos de pensar que el ASCII es un codigo anglosajón que no contiene nuestra muy querida 'ñ' así  que la añadimos llamándola cuando el bucle llegue a la posición de la "n" y la añadimos a continuación.

Además, el usuario también puede introducir las letras de la palabra a adivinar con el teclado. Estas dos opciones sustituyen el input requerido en un principio, tras ser consultado con el tutor técnico y haber recibido su aprobación.

Para la palabra a adivinar, hemos utilizado también una función para generarla en pantalla sustituida por guiones bajos, los cuáles se ocultan al adivinar la palabra en cuestión. Esto también ha sido realizado con una funcionalidad de JavaScript recogida junto al resto en el documento "functions.js".

En la parte central de la pantalla principal encontramos al protagonista de nuestro juego al que hemos bautizado como Manolito.
Manolito, es el hangman utilizado en este programa, el cuál tendrá un fatídico final en el caso de que el usuario llegue a cometer 6 fallos.

Tanto Manolito, como su horca se han hecho íntegramente con CSS, y se pueden encontrar en el documento "style.css" y gracias a una funcionalidad de JavaScript podemos ver como se van mostrando las partes de su cuerpo en pantalla a medida que el jugador va cometiendo fallos.

Una vez finalizado el juego, se pueden dar dos casos. 

En primer lugar, si el jugador adivina la partida cumpliendo con los requisitos del juego, se mostrará una pantalla en la que se indica que ha ganado en la que tiene la opción de volver a comenzar y la de continuar. En el caso de seleccionar la segunda, el jugador puede volver a elegir modo de dificultad y seguir jugando contando con los puntos obtenidos en la partida anterior.

Si se diese la otra situación posible, y el jugador no lograse adivinar la palabra, este verá aparecer una pantalla de derrota donde se le muestran los puntos totales obtenidos y a partir de la cuál puede volver a comenzar a jugar, con la puntuación a cero.

Como mencionabamos antes, y para conmemorar la fiesta de Halloween, hemos decidio incluir un modo oscuro, en el que existen variaciones de estilo de las principales partes del programa. Para ello, hemos creado otro documento css, el cuál se activa al pulsar el botón de modo nocturno situado en la parte superior derecha.
