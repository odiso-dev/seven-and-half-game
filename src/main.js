import './style.css';


let PUNTUACION_INICIAL = 0;
const VAL1 = 1;
const VAL2 = 2;
const VAL3 = 3;
const VAL4 = 4;
const VAL5 = 5;
const VAL6 = 6;
const VAL7 = 7;
const VAL_SOTA = 0.5;
const VAL_CABALLO = 0.5;
const VAL_REY = 0.5;

/* let as = document.querySelector(".carta_copas1");
let dos = document.querySelector(".carta_copas2");
let tres = document.querySelector(".carta_copas3");
let cuatro = document.querySelector(".carta_copas4");
let cinco = document.querySelector(".carta_copas5");
let seis = document.querySelector(".carta_copas6");
let siete = document.querySelector(".carta_copas7");
let sota = document.querySelector(".carta_copas_sota");
let caballo = document.querySelector(".carta_copas_caballo");
let rey = document.querySelector(".carta_copas_rey");
 */
const muestraPuntuacion = () => {
    let mostrarPuntuacion = document.querySelector(".mostrar_puntuacion");
    return mostrarPuntuacion.textContent = PUNTUACION_INICIAL;

}

const dameCarta = () => {
    let cartaAleatoria = Math.floor(Math.random() * 11);
    console.log(cartaAleatoria);
    if (cartaAleatoria === VAL1) {
        document.querySelector(".carta_copas1").classList.add('mostrar_carta');
    }
};

const eventos = () => {
    const pedirCarta = document.querySelector(".pedir_carta");
    pedirCarta.addEventListener("click", dameCarta);
}


document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    eventos();
})
