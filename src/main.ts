import './style.css';

/* type NumeralCarta = {
  value: number;
};

// Definición de los valores de las cartas
const AS: NumeralCarta = { value: 1 };
const DOS: NumeralCarta = { value: 2 };
const TRES: NumeralCarta = { value: 3 };
const CUATRO: NumeralCarta = { value: 4 };
const CINCO: NumeralCarta = { value: 5 };
const SEIS: NumeralCarta = { value: 6 };
const SIETE: NumeralCarta = { value: 7 };
const SOTA: NumeralCarta = { value: 10 };
const CABALLO: NumeralCarta = { value: 11 };
const REY: NumeralCarta = { value: 12 }; */

// Puntuación inicial
let puntuacion = 0;

const muestraPuntuacion = () => {
  let mostrarPuntuacion = document.querySelector('.mostrar_puntuacion');
  mostrarPuntuacion !== null &&
  mostrarPuntuacion !== undefined &&
  mostrarPuntuacion instanceof HTMLHeadingElement
    ? (mostrarPuntuacion.textContent = puntuacion.toString())
    : console.error('No se puede mostrar la puntuación');
};

// Genera valor de carta aleatoria
const dameCarta = () => {
  let cartaAleatoria = Math.ceil(Math.random() * 10);
  cartaAleatoria > 7
    ? (cartaAleatoria += 2)
    : console.log('CartaAleatoria no es >7');
  return cartaAleatoria;
};
// Pasamos como parametro el valor que devuelve dameCarta()
const muestraCarta = (valorCartaAleatoria: number): void => {
  // Valor cartas
  const AS = 1;
  const DOS = 2;
  const TRES = 3;
  const CUATRO = 4;
  const CINCO = 5;
  const SEIS = 6;
  const SIETE = 7;
  const SOTA = 10;
  const CABALLO = 11;
  const REY = 12;
  // Img carta que será visible /
  const CARTA_UP_IMG = document.querySelector('.carta_levantada>img');
  if (
    CARTA_UP_IMG !== null &&
    CARTA_UP_IMG !== undefined &&
    CARTA_UP_IMG instanceof HTMLImageElement
  ) {
    switch (valorCartaAleatoria) {
      // AS
      case AS:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // DOS
      case DOS:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // TRES
      case TRES:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // CUATRO
      case CUATRO:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // CINCO
      case CINCO:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // SEIS
      case SEIS:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // SIETE
      case SIETE:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // SOTA
      case SOTA:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // CABALLO
      case CABALLO:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;
      // REY
      case REY:
        CARTA_UP_IMG.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
        );
        /* CARTA_UP.classList.add('mostrar_carta'); */
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
        break;

      default:
        console.error('No muestra ninguna carta');
        break;
    }
  } else {
    console.error('No muestra ninguna carta');
  }
};

// Mostrar mensajes en función de la puntuación
const texto = () => {
  let texto = document.querySelector('.texto_avisos');
  return texto;
};

// Gestionar me planto
const mePlanto = () => {
  let mensaje = texto();
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    /* Pasando al switch la variable 'puntuacion' no permite evaluar condicion
    en cada 'case', pero si le pasamos un booleano si. He visto este truco
    por ahí y he tenido que utilizarlo O_o */

    // Modificado según el ejercicio para abarcar todas las puntuaciones
    switch (true) {
      case puntuacion <= 4:
        mensaje.textContent = 'Has sido muy conservador 😱';
        break;
      case puntuacion > 4 && puntuacion < 6:
        mensaje.textContent = 'Te ha entrado el canguelo eh?😵';
        break;
      case puntuacion >= 6 || puntuacion < 7.5:
        mensaje.textContent = 'Casi casi...😬';
        break;
      case puntuacion === 7.5:
        winGame();
        break;

      default:
        console.error('No se ha ejecutado el switch en mePlanto');
        break;
    }
  }
};

// Reiniciar juego
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

// Gestionar Game Over
const gameOver = () => {
  let mensaje = texto();
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement &&
    puntuacion > 7.5
  ) {
    mensaje.textContent = '😵 GAME OVER 😵';
    desactivarBtnPedirCarta();
    reiniciarJuego();
    desactivarBtnPlantarse();
  } else {
    //console.log('No es game over');
  }
};

// Gestionar Win game
const winGame = () => {
  let mensaje = texto();
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement &&
    puntuacion === 7.5
  ) {
    mensaje.textContent = '¡ Lo has clavado! ¡Enhorabuena!😉';
    desactivarBtnPedirCarta();
    reiniciarJuego();
    desactivarBtnPlantarse();
  } else {
    console.error('No se ha ejecutado winGame');
  }
};

// Deshabilitar btn pedirCarta
const desactivarBtnPedirCarta = () => {
  const pedirCarta = document.querySelector('.pedir_carta');
  pedirCarta !== null &&
  pedirCarta !== undefined &&
  pedirCarta instanceof HTMLButtonElement
    ? (pedirCarta.disabled = true)
    : console.log('No se puede desactivar desactivarBtnPedirCarta ');
};

// Deshabilitar btn mePlanto
const desactivarBtnPlantarse = () => {
  const btnPlantarse = document.querySelector('.btn_plantarse');
  btnPlantarse !== null &&
  btnPlantarse !== undefined &&
  btnPlantarse instanceof HTMLButtonElement
    ? (btnPlantarse.disabled = true)
    : console.log('No se puede desactivar desactivarBtnPlantarse ');
};

// Ver las siguientes cartas después de plantarse
const verFuturo = () => {
  const btnFuturo = document.querySelector('.btn_futuro');
  let valorCarta = dameCarta();
  if (
    btnFuturo !== null &&
    btnFuturo !== undefined &&
    btnFuturo instanceof HTMLButtonElement
  ) {
    btnFuturo.style.display = 'block';
    btnFuturo.addEventListener('click', () => {
      muestraCarta(valorCarta);
      animacionPuntuacionCarta(valorCarta);
      btnFuturo.disabled = true;
    });
  }
};

// Animación mostrar puntuación de la carta
const animacionPuntuacionCarta = (valorCarta: number): void => {
  const elPuntuacionCarta = document.querySelector('.show_score');
  if (
    elPuntuacionCarta !== null &&
    elPuntuacionCarta !== undefined &&
    elPuntuacionCarta instanceof HTMLSpanElement
  ) {
    elPuntuacionCarta.textContent = `+${valorCarta.toString()}`;
    elPuntuacionCarta.classList.add('show_score_animation');
    elPuntuacionCarta.animate(
      [
        //from
        { opacity: '0' },
        { opacity: '1' },
        { zIndex: '1' },
        { transform: 'translate(-2vw, -6vh)' },
      ],
      {
        // opciones de sincronización
        duration: 1000,
        easing: 'ease-in',
      }
    );
  }
};

const eventos = () => {
  // Boton carta visible
  const CARTA_UP = document.querySelector('.carta_levantada');
  // Boton pedir carta
  const pedirCarta = document.querySelector('.pedir_carta');
  if (
    pedirCarta !== null &&
    pedirCarta !== undefined &&
    pedirCarta instanceof HTMLButtonElement &&
    CARTA_UP !== null &&
    CARTA_UP !== undefined &&
    CARTA_UP instanceof HTMLElement
  ) {
    pedirCarta.addEventListener('click', () => {
      CARTA_UP.classList.add('mostrar_carta');
      let valorCarta = dameCarta();
      muestraCarta(valorCarta);
      animacionPuntuacionCarta(valorCarta);
      winGame();
      gameOver();
      //console.log(valorCarta);
    });
  } else {
    console.error('No se ha ejecutado el evento pedirCarta');
  }

  // Btn plantarse
  const btnPlantarse = document.querySelector('.btn_plantarse');
  if (
    btnPlantarse != null &&
    btnPlantarse != undefined &&
    btnPlantarse instanceof HTMLButtonElement
  ) {
    btnPlantarse.addEventListener('click', () => {
      mePlanto();
      desactivarBtnPlantarse();
      reiniciarJuego();
      desactivarBtnPedirCarta();
      verFuturo();
    });
  } else {
    console.error('No ha podido plantarse');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion();
  eventos();
});
