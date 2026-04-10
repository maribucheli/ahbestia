// Listas de imágenes
const listaCabezas = [
  "../ahbestia/assets/img/cholao.jpg",
  "../ahbestia/assets/img/icedcoffee.jpg",
  "../ahbestia/assets/img/michelada.jpg",
];
const listaTroncos = [
 "../ahbestia/assets/img/coca.png",
  "../ahbestia/assets/img/fernet.jpg",
  "../ahbestia/assets/img/tampico.png",
];
const listaPatas = [
  "../ahbestia/assets/img/vino.png",
  "../ahbestia/assets/img/limonada.jpg",
  "../ahbestia/assets/img/stanley.jpg",
];

const sonido = new Audio("/assets/audio/charli.mp3");

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

