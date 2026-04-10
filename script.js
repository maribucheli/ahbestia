// Listas de imágenes
const listaCabezas = [
  "assets/img/cholao.jpg",
  "assets/img/icedcoffee.jpg",
  "assets/img/michelada.jpg",
];
const listaTroncos = [
 "assets/img/coca.png",
  "assets/img/fernet.jpg",
  "assets/img/tampico.png",
];
const listaPatas = [
  "assets/img/vino.png",
  "assets/img/limonada.jpg",
  "assets/img/stanley.jpg",
];

const sonido = new Audio("assets/audio/charli.mp3");

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
  sonido.currentTime = 0; // reinicia el audio si ya había sonado
  sonido.play();
});

