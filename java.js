console.log("Conectado");
// Función que devuelve una jugada aleatoria para la computadora
/* function jugadaAleatoria() {
  var jugadas = ["piedra", "papel", "tijeras"];
  var indice = Math.floor(Math.random() * jugadas.length);
  return jugadas[indice];
} */
// Declaramos Variables para las imagenes
const imgPiedra = "./img/piedra.png";
const imgPapel = "./img/papel.png";
const imgTijera = "./img/tijera.png";

//clearmos o renderizamos las Imagenes
const crearImg = (img) => {
  //traes el body a javascript
  const body = document.getElementById("imagenPC");
  body.innerText="";
  //creas la etiqueta img
  const etiquetaImg = document.createElement("img");

  // le das los atributos a la etiqueta img
  etiquetaImg.src = img;
  etiquetaImg.alt = "Texto alternativo";
  etiquetaImg.width = 150;
  etiquetaImg.height = 150;
  //pones en el body la etiquta img como hijo
  body.appendChild(etiquetaImg);
};
const jugadas = () => {
  let jugadas = [
    { name: "Piedra", img: imgPiedra },
    { name: "Papel", img: imgPapel },
    { name: "Tijeras", img: imgTijera },
  ];
  let indice = Math.floor(Math.random() * jugadas.length);
  crearImg(jugadas[indice].img)
  return jugadas[indice].name
}


// Función que compara las jugadas y devuelve el resultado
function jugar(jugadaUsuario, jugadaComputadora) {
  if (jugadaUsuario === jugadaComputadora) {
    return "Empate 🤡😳";
  } else if (
    (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijeras") ||
    (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra") ||
    (jugadaUsuario === "Tijeras" && jugadaComputadora === "Papel")
  ) {

    return "😁 Ganaste! 😁" ;
  } else {
    return "Perdiste 😭😭";
  }
}

// Función que se ejecuta cuando se hace clic en una jugada
function jugarJugada(e) {
  var jugadaUsuario = e.target.id;
  var jugadaComputadora = jugadas();
  var resultado = jugar(jugadaUsuario, jugadaComputadora);
  document.getElementById("resultado").innerHTML = "Elegiste: " + jugadaUsuario;
  document.getElementById("resultado2").innerHTML = "La Computadora Eligio: " + jugadaComputadora
  + "<br><br>" + resultado;

}

// Eventos para las jugadas
document.getElementById("Piedra").addEventListener("click", jugarJugada);
document.getElementById("Papel").addEventListener("click", jugarJugada);
document.getElementById("Tijeras").addEventListener("click", jugarJugada);
