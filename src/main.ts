import './style.css';

let puntuacion = 0;
/* const CARTA_AS = 1;
const CARTA_DOS = 2;
const CARTA_TRES = 3;
const CARTA_CUATRO = 4;
const CARTA_CINCO = 5;
const CARTA_SEIS = 6;
const CARTA_SIETE = 7;
const CARTA_SOTA = 10;
const CABALLO = 11;
const CARTA_REY = 12; */

const muestraPuntuacion = () => {
  let mostrarPuntuacion = document.querySelector('.mostrar_puntuacion');
  if (
    mostrarPuntuacion !== null &&
    mostrarPuntuacion !== undefined &&
    mostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    mostrarPuntuacion.textContent = puntuacion.toString();
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
  const CARTA_AS = document.querySelector('.carta_copas1');
  const CARTA_DOS = document.querySelector('.carta_copas2');
  const CARTA_TRES = document.querySelector('.carta_copas3');
  const CARTA_CUATRO = document.querySelector('.carta_copas4');
  const CARTA_CINCO = document.querySelector('.carta_copas5');
  const CARTA_SEIS = document.querySelector('.carta_copas6');
  const CARTA_SIETE = document.querySelector('.carta_copas7');
  const CARTA_SOTA = document.querySelector('.carta_copas_sota');
  const CARTA_CABALLO = document.querySelector('.carta_copas_caballo');
  const CARTA_REY = document.querySelector('.carta_copas_rey');

  // Mapea el valor de la carta y la muestra
  switch (valorCartaAleatoria) {
    case 1:
      if (
        CARTA_AS !== null &&
        CARTA_AS !== undefined &&
        CARTA_AS instanceof HTMLElement
      ) {
        console.log('CARTA_AS');
        CARTA_AS.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_AS');
      }
      break;
    case 2:
      if (
        CARTA_DOS !== null &&
        CARTA_DOS !== undefined &&
        CARTA_DOS instanceof HTMLElement
      ) {
        console.log('CARTA_DOS');
        CARTA_DOS.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_DOS');
      }
      break;
    case 3:
      if (
        CARTA_TRES !== null &&
        CARTA_TRES !== undefined &&
        CARTA_TRES instanceof HTMLElement
      ) {
        console.log('CARTA_TRES');
        CARTA_TRES.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_TRES');
      }
      break;
    case 4:
      if (
        CARTA_CUATRO !== null &&
        CARTA_CUATRO !== undefined &&
        CARTA_CUATRO instanceof HTMLElement
      ) {
        console.log('CARTA_CUATRO');
        CARTA_CUATRO.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_CUATRO');
      }
      break;
    case 5:
      if (
        CARTA_CINCO !== null &&
        CARTA_CINCO !== undefined &&
        CARTA_CINCO instanceof HTMLElement
      ) {
        console.log('CARTA_CINCO');
        CARTA_CINCO.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_CINCO');
      }
      break;
    case 6:
      if (
        CARTA_SEIS !== null &&
        CARTA_SEIS !== undefined &&
        CARTA_SEIS instanceof HTMLElement
      ) {
        console.log('CARTA_SEIS');
        CARTA_SEIS.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_SEIS');
      }
      break;
    case 7:
      if (
        CARTA_SIETE !== null &&
        CARTA_SIETE !== undefined &&
        CARTA_SIETE instanceof HTMLElement
      ) {
        console.log('CARTA_SIETE');
        CARTA_SIETE.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_SIETE');
      }
      break;
    case 10:
      if (
        CARTA_SOTA !== null &&
        CARTA_SOTA !== undefined &&
        CARTA_SOTA instanceof HTMLElement
      ) {
        console.log('CARTA_SOTA');
        CARTA_SOTA.classList.add('mostrar_carta');
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_SOTA');
      }
      break;
    case 11:
      if (
        CARTA_CABALLO !== null &&
        CARTA_CABALLO !== undefined &&
        CARTA_CABALLO instanceof HTMLElement
      ) {
        console.log('CARTA_CABALLO');
        CARTA_CABALLO.classList.add('mostrar_carta');
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_CABALLO');
      }
      break;
    case 12:
      if (
        CARTA_REY !== null &&
        CARTA_REY !== undefined &&
        CARTA_REY instanceof HTMLElement
      ) {
        console.log('CARTA_REY');
        CARTA_REY.classList.add('mostrar_carta');
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_REY');
      }
      break;

    default:
      console.error('No muestra ninguna carta');
      break;
  }
};

// Mostrar mensajes en función de la puntuación
const texto = () => {
  let texto = document.querySelector('.texto_avisos');
  return texto;
};
// Gestionar Game Over
const gameOver = () => {
  let mensaje = texto();
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement &&
    puntuacion > 7.5
  ) {
    mensaje.textContent = 'GAME OVER';
    reiniciarJuego();
  } else {
    console.log('No es game over');
  }
};

// Gestionar me planto
const mePlanto = () => {
  let mensaje = texto();
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement &&
    puntuacion < 4
  ) {
    mensaje.textContent = 'Has sido muy conservador';
  }
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement &&
    puntuacion === 5
  ) {
    mensaje.textContent = 'Te ha entrado el canguelo eh?';
  }
  if (
    (mensaje !== null &&
      mensaje !== undefined &&
      mensaje instanceof HTMLHeadingElement &&
      puntuacion === 6) ||
    (mensaje !== null &&
      mensaje !== undefined &&
      mensaje instanceof HTMLHeadingElement &&
      puntuacion === 7)
  ) {
    mensaje.textContent = 'Casi casi..';
  }
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement &&
    puntuacion === 7.5
  ) {
    mensaje.textContent = '¡ Lo has clavado! ¡Enhorabuena!';
  }
};

const reiniciarJuego = () => {
  const btnReloadPage = document.querySelector('.btn_reload');
  if (
    btnReloadPage !== null &&
    btnReloadPage !== undefined &&
    btnReloadPage instanceof HTMLButtonElement
  ) {
    btnReloadPage.style.display = 'block';
    btnReloadPage.addEventListener('click', () => {
      window.location.reload();
    });
  }
};

const handlerClick = () => {
  eventos();
};

const eventos = () => {
  // Boton pedir carta
  const pedirCarta = document.querySelector('.pedir_carta');
  if (
    pedirCarta !== null &&
    pedirCarta !== undefined &&
    pedirCarta instanceof HTMLButtonElement
  ) {
    // Fn deshabilitar btn pedirCarta
    const desactivarBtnPedirCarta = () => {
      pedirCarta.disabled = true;
    };

    pedirCarta.addEventListener('click', () => {
      //dameCarta();
      let valorCarta = dameCarta();
      muestraCarta(valorCarta);
      gameOver();
      console.log(valorCarta);
      // Btn plantarse
      const btnPlantarse = document.querySelector('.btn_plantarse');
      if (
        btnPlantarse != null &&
        btnPlantarse != undefined &&
        btnPlantarse instanceof HTMLButtonElement
      ) {
        btnPlantarse.addEventListener('click', () => {
          mePlanto();
          reiniciarJuego();
          desactivarBtnPedirCarta();
        });
      } else {
        console.error('No ha podido plantarse');
      }
    });
  } else {
    console.error('No se han podido ejecutar los eventos');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion();
  handlerClick();
});
