import './style.css';

// Variables con valor de cada carta
enum TipoCarta {
  AS = 1,
  DOS = 2,
  TRES = 3,
  CUATRO = 4,
  CINCO = 5,
  SEIS = 6,
  SIETE = 7,
  SOTA = 8,
  CABALLO = 9,
  REY = 10,
}

// Puntuación inicial
let puntuacion = 0;

// Genera nº aleatorio del 1 al 10
const crearNumAleatorio = () => {
  const numero = Math.ceil(Math.random() * 10);
  return numero;
};

// Calcula valor carta que se mostrará como puntuación
// Argumento es numAleatorio = crearNumAleatorio()
const calculaValorCarta = (numAleatorio: number) => {
  if (numAleatorio <= 7) {
    return numAleatorio;
  } else {
    return 0.5;
  }
};

// Calcula nº de la carta
// Argumento  numAleatorio = crearNumAleatorio()
const calculaNumCarta = (numAleatorio: number) => {
  if (numAleatorio <= 7) {
    return numAleatorio;
  } else {
    return (numAleatorio += 2);
  }
};

// Muestra carta con url
const urlCarta = (numCarta: number) => {
  switch (numCarta) {
    case TipoCarta.AS:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
      break;
    case TipoCarta.DOS:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
      break;
    case TipoCarta.TRES:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
      break;
    case TipoCarta.CUATRO:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
      break;
    case TipoCarta.CINCO:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
      break;
    case TipoCarta.SEIS:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
      break;
    case TipoCarta.SIETE:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
      break;
    case TipoCarta.SOTA:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
      break;
    case TipoCarta.CABALLO:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
      break;
    case TipoCarta.REY:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
      break;
    default:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
      break;
  }
};

// Mapea coincidencia de valor de carta con su url y muestra carta
const mostrarCarta = (numAleatorio: number) => {
  const url = urlCarta(numAleatorio);
  // Img carta que será visible /
  const CARTA_UP_IMG = document.querySelector('.carta_levantada>img');

  CARTA_UP_IMG !== null &&
  CARTA_UP_IMG !== undefined &&
  CARTA_UP_IMG instanceof HTMLImageElement
    ? CARTA_UP_IMG.setAttribute('src', url)
    : console.error('No muestra carta con urlCarta');
};

// Mostramos puntuación como string
const muestraPuntuacion = (valorCarta: number) => {
  let mostrarPuntuacion = document.querySelector('.mostrar_puntuacion');
  if (
    mostrarPuntuacion !== null &&
    mostrarPuntuacion !== undefined &&
    mostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    puntuacion += valorCarta;
    mostrarPuntuacion.textContent = puntuacion.toString();
  } else {
    console.error('No se puede mostrar la puntuación');
  }
};

// Estructura con los estados en funcion de la puntuación
type Estado = 'CONSERVADOR' | 'CAGADO' | 'CASI' | 'WIN' | 'GAMEOVER' | 'NULO';

// Comprueba puntuación y asigna un estado
const comprobarNumero = (puntuacion: number): Estado => {
  switch (true) {
    case puntuacion <= 4:
      return 'CONSERVADOR';
      break;
    case puntuacion > 4 && puntuacion < 6:
      return 'CAGADO';
      break;
    case puntuacion >= 6 && puntuacion < 7.5:
      return 'CASI';
      break;
    case puntuacion === 7.5:
      return 'WIN';
      break;
    case puntuacion > 7.5:
      return 'GAMEOVER';
      break;
    default:
      return 'NULO';
      break;
  }
};
// Mostrar mensajes en función de la puntuación
const texto = () => {
  let texto = document.querySelector('.texto_avisos');
  return texto;
};

// Evalua estado en función de comprobarNumero y muestra texto según la puntuación
const mostrarMensajes = (estado: string) => {
  let mensaje = texto();
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    switch (estado) {
      case 'CONSERVADOR':
        mensaje.textContent = 'Has sido muy conservador 😱';
        break;
      case 'CAGADO':
        mensaje.textContent = 'Te ha entrado el canguelo eh?😵';
        break;
      case 'CASI':
        mensaje.textContent = 'Casi casi...😬';
        break;
      case 'WIN':
        mensaje.textContent = '¡ Lo has clavado! ¡Enhorabuena!😉';
        break;
      case 'GAMEOVER':
        mensaje.textContent = '😵 GAME OVER 😵';
        break;
      default:
        console.error('No se ha ejecutado el switch en mostrarMensajes');
        break;
    }
  } else {
  }
};

// Gestiona cada click de btn pedir carta
const handlerClickPedirCarta = () => {
  const numAleatorio = crearNumAleatorio();
  const numAleatorioValor = calculaValorCarta(numAleatorio);
  calculaValorCarta(numAleatorio);
  calculaNumCarta(numAleatorio);
  urlCarta(numAleatorio);
  mostrarCarta(numAleatorio);
  animacionPuntuacionCarta(numAleatorioValor);
  muestraPuntuacion(numAleatorioValor);
  const estado = comprobarNumero(puntuacion);
  comprobarJuego(estado);
  activarBtnPlantarse();
};
// Deshabilitar btn pedirCarta
const desactivarBtnPedirCarta = () => {
  const pedirCarta = document.querySelector('.pedir_carta');
  pedirCarta !== null &&
  pedirCarta !== undefined &&
  pedirCarta instanceof HTMLButtonElement
    ? (pedirCarta.disabled = true)
    : console.error('No se puede desactivar desactivarBtnPedirCarta ');
};

// Deshabilitar btn mePlanto
const desactivarBtnPlantarse = () => {
  const btnPlantarse = document.querySelector('.btn_plantarse');
  btnPlantarse !== null &&
  btnPlantarse !== undefined &&
  btnPlantarse instanceof HTMLButtonElement
    ? (btnPlantarse.disabled = true)
    : console.error('No se puede desactivar desactivarBtnPlantarse ');
};
// Habilitar btn mePlanto
const activarBtnPlantarse = () => {
  const btnPlantarse = document.querySelector('.btn_plantarse');
  btnPlantarse !== null &&
  btnPlantarse !== undefined &&
  btnPlantarse instanceof HTMLButtonElement
    ? (btnPlantarse.disabled = false)
    : console.error('No se puede activar activarBtnPlantarse ');
};

// Gestionar game over
const gameOver = () => {
  desactivarBtnPedirCarta();
  reiniciarJuego();
  desactivarBtnPlantarse();
};

// Gestionar win
const winGame = () => {
  desactivarBtnPedirCarta();
  reiniciarJuego();
  desactivarBtnPlantarse();
};

// Gestionar me planto
const mePlanto = () => {
  const estado: Estado = comprobarNumero(puntuacion);
  mostrarMensajes(estado);
  desactivarBtnPlantarse();
  reiniciarJuego();
  desactivarBtnPedirCarta();
  verSiguienteCarta();
};

// Comprobar si el juego es win o gameover
const comprobarJuego = (estado: Estado) => {
  switch (estado) {
    case 'WIN':
      winGame();
      mostrarMensajes(estado);
      break;
    case 'GAMEOVER':
      gameOver();
      mostrarMensajes(estado);
      break;
    default:
      break;
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

// Dejar fijar la puntuacion de la siguiente carta una vez te has plantado
const puntuacionSiguienteCarta = (numAleatorioValor: number): void => {
  const valorSiguienteCarta = document.querySelector('.puntuacion_futuro');
  const total = puntuacion + numAleatorioValor;
  if (
    valorSiguienteCarta !== null &&
    valorSiguienteCarta !== undefined &&
    valorSiguienteCarta instanceof HTMLHeadingElement
  ) {
    valorSiguienteCarta.textContent = total.toString();
  }
};

// Ver la siguiente carta después de plantarse
const verSiguienteCarta = () => {
  const btnFuturo = document.querySelector('.btn_futuro');
  const numAleatorio = crearNumAleatorio();
  const numAleatorioValor = calculaValorCarta(numAleatorio);
  if (
    btnFuturo !== null &&
    btnFuturo !== undefined &&
    btnFuturo instanceof HTMLButtonElement
  ) {
    btnFuturo.style.display = 'block';
    btnFuturo.addEventListener('click', () => {
      mostrarCarta(numAleatorio);
      animacionPuntuacionCarta(numAleatorioValor);
      btnFuturo.disabled = true;
      puntuacionSiguienteCarta(numAleatorioValor);
    });
  }
};

// Animación mostrar puntuación de la carta
const animacionPuntuacionCarta = (numAleatorio: number): void => {
  const elPuntuacionCarta = document.querySelector('.show_score');
  if (
    elPuntuacionCarta !== null &&
    elPuntuacionCarta !== undefined &&
    elPuntuacionCarta instanceof HTMLSpanElement
  ) {
    elPuntuacionCarta.textContent = `+${numAleatorio.toString()}`;
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
  // Elemnto carta visible
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
      handlerClickPedirCarta();
      CARTA_UP.classList.add('mostrar_carta');
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
    });
  } else {
    console.error('No ha podido plantarse');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion(0);
  eventos();
  desactivarBtnPlantarse();
});
