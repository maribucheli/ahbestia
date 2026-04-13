// Listas de imágenes
const listaCabezas = [
  "assets/img/cholao.png",
  "assets/img/icedcoffee.png",
  "assets/img/michelada.png",
  "assets/img/ponymalta.png",
  "assets/img/pepsi.png",
  "assets/img/jugohit2.png",
  "assets/img/champagne.png",
  "assets/img/starbucks.png",
];
const listaTroncos = [
 "assets/img/coca.png",
  "assets/img/fernet.png",
  "assets/img/tampico.png",
  "assets/img/energizante.png",
  "assets/img/starbucks2.png",
  "assets/img/ron.png",
  "assets/img/mrtea.png",
];
const listaPatas = [
  "assets/img/vino.png",
  "assets/img/limonada.png",
  "assets/img/stanley.png",
  "assets/img/starbucks3.png",
  "assets/img/starbucks4.png",
  "assets/img/granada.png",
  "assets/img/smirnoff.png",
];

const sonido = new Audio("assets/audio/charlixcx.mp3");

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

generarBestia();