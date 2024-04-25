import './style.css';

let puntuacionInicial = 0;
/* const AS = 1;
const DOS = 2;
const TRES = 3;
const CUATRO = 4;
const CINCO = 5;
const SEIS = 6;
const SIETE = 7;
const SOTA = 8;
const CABALLO = 9;
const REY = 10; */

const muestraPuntuacion = () => {
  let mostrarPuntuacion = document.querySelector('.mostrar_puntuacion');
  if (
    mostrarPuntuacion !== null &&
    mostrarPuntuacion !== undefined &&
    mostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    mostrarPuntuacion.textContent = puntuacionInicial.toString();
  } else {
    console.error('No se puede mostrar la puntuación');
  }
};

// Genera valor de carta aleatoria
const dameCarta = () => {
  let cartaAleatoria = Math.ceil(Math.random() * 10);
  if (cartaAleatoria > 7) {
    cartaAleatoria += 2;
  }
  return cartaAleatoria;
};

const muestraCarta = (valorCartaAleatoria: number): void => {
  // Div de cada carta
  const AS = document.querySelector('.carta_copas1');
  const DOS = document.querySelector('.carta_copas2');
  const TRES = document.querySelector('.carta_copas3');
  const CUATRO = document.querySelector('.carta_copas4');
  const CINCO = document.querySelector('.carta_copas5');
  const SEIS = document.querySelector('.carta_copas6');
  const SIETE = document.querySelector('.carta_copas7');
  const SOTA = document.querySelector('.carta_copas_sota');
  const CABALLO = document.querySelector('.carta_copas_caballo');
  const REY = document.querySelector('.carta_copas_rey');

  switch (valorCartaAleatoria) {
    case 1:
      if (AS !== null && AS !== undefined && AS instanceof HTMLElement) {
        console.log('AS');
        AS.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el AS');
      }
      break;
    case 2:
      if (DOS !== null && DOS !== undefined && DOS instanceof HTMLElement) {
        console.log('DOS');
        DOS.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el DOS');
      }
      break;
    case 3:
      if (TRES !== null && TRES !== undefined && TRES instanceof HTMLElement) {
        console.log('TRES');
        TRES.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el TRES');
      }
      break;
    case 4:
      if (
        CUATRO !== null &&
        CUATRO !== undefined &&
        CUATRO instanceof HTMLElement
      ) {
        console.log('CUATRO');
        CUATRO.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CUATRO');
      }
      break;
    case 5:
      if (
        CINCO !== null &&
        CINCO !== undefined &&
        CINCO instanceof HTMLElement
      ) {
        console.log('CINCO');
        CINCO.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CINCO');
      }
      break;
    case 6:
      if (SEIS !== null && SEIS !== undefined && SEIS instanceof HTMLElement) {
        console.log('SEIS');
        SEIS.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el SEIS');
      }
      break;
    case 7:
      if (
        SIETE !== null &&
        SIETE !== undefined &&
        SIETE instanceof HTMLElement
      ) {
        console.log('SIETE');
        SIETE.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el SIETE');
      }
      break;
    case 10:
      if (SOTA !== null && SOTA !== undefined && SOTA instanceof HTMLElement) {
        console.log('SOTA');
        SOTA.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el SOTA');
      }
      break;
    case 11:
      if (
        CABALLO !== null &&
        CABALLO !== undefined &&
        CABALLO instanceof HTMLElement
      ) {
        console.log('CABALLO');
        CABALLO.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CABALLO');
      }
      break;
    case 12:
      if (REY !== null && REY !== undefined && REY instanceof HTMLElement) {
        console.log('REY');
        REY.classList.add('mostrar_carta');
        puntuacionInicial += valorCartaAleatoria;
        muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el REY');
      }
      break;

    default:
      console.error('No muestra ninguna carta');
      break;
  }
};

const handleClick = () => {
  const pedirCarta = document.querySelector('.pedir_carta');
  if (
    pedirCarta !== null &&
    pedirCarta !== undefined &&
    pedirCarta instanceof HTMLButtonElement
  )
    pedirCarta.addEventListener('click', () => {
      dameCarta();
      let valorCartaAleatoria = dameCarta();
      muestraCarta(valorCartaAleatoria);
      muestraPuntuacion();
      console.log(valorCartaAleatoria);
    });
};

document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion();
  handleClick();
});
