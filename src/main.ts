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
    case AS:
      if (
        CARTA_AS !== null &&
        CARTA_AS !== undefined &&
        CARTA_AS instanceof HTMLElement
      ) {
        console.log(typeof valorCartaAleatoria);
        //console.log('CARTA_AS');
        CARTA_AS.classList.add('mostrar_carta');
        CARTA_AS.setAttribute(
          'src',
          'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg'
        );
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_AS');
      }
      break;
    case DOS:
      if (
        CARTA_DOS !== null &&
        CARTA_DOS !== undefined &&
        CARTA_DOS instanceof HTMLElement
      ) {
        //console.log('CARTA_DOS');
        CARTA_DOS.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_DOS');
      }
      break;
    case TRES:
      if (
        CARTA_TRES !== null &&
        CARTA_TRES !== undefined &&
        CARTA_TRES instanceof HTMLElement
      ) {
        //console.log('CARTA_TRES');
        CARTA_TRES.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_TRES');
      }
      break;
    case CUATRO:
      if (
        CARTA_CUATRO !== null &&
        CARTA_CUATRO !== undefined &&
        CARTA_CUATRO instanceof HTMLElement
      ) {
        //console.log('CARTA_CUATRO');
        CARTA_CUATRO.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_CUATRO');
      }
      break;
    case CINCO:
      if (
        CARTA_CINCO !== null &&
        CARTA_CINCO !== undefined &&
        CARTA_CINCO instanceof HTMLElement
      ) {
        //console.log('CARTA_CINCO');
        CARTA_CINCO.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_CINCO');
      }
      break;
    case SEIS:
      if (
        CARTA_SEIS !== null &&
        CARTA_SEIS !== undefined &&
        CARTA_SEIS instanceof HTMLElement
      ) {
        //console.log('CARTA_SEIS');
        CARTA_SEIS.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_SEIS');
      }
      break;
    case SIETE:
      if (
        CARTA_SIETE !== null &&
        CARTA_SIETE !== undefined &&
        CARTA_SIETE instanceof HTMLElement
      ) {
        //console.log('CARTA_SIETE');
        CARTA_SIETE.classList.add('mostrar_carta');
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_SIETE');
      }
      break;
    case SOTA:
      if (
        CARTA_SOTA !== null &&
        CARTA_SOTA !== undefined &&
        CARTA_SOTA instanceof HTMLElement
      ) {
        //console.log('CARTA_SOTA');
        CARTA_SOTA.classList.add('mostrar_carta');
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_SOTA');
      }
      break;
    case CABALLO:
      if (
        CARTA_CABALLO !== null &&
        CARTA_CABALLO !== undefined &&
        CARTA_CABALLO instanceof HTMLElement
      ) {
        //console.log('CARTA_CABALLO');
        CARTA_CABALLO.classList.add('mostrar_carta');
        valorCartaAleatoria = 0.5;
        puntuacion += valorCartaAleatoria;
        return muestraPuntuacion();
      } else {
        console.error('No se puede mostrar el CARTA_CABALLO');
      }
      break;
    case REY:
      if (
        CARTA_REY !== null &&
        CARTA_REY !== undefined &&
        CARTA_REY instanceof HTMLElement
      ) {
        //console.log('CARTA_REY');
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

    switch (true) {
      case puntuacion <= 4:
        mensaje.textContent = 'Has sido muy conservador 😱';
        break;
      case puntuacion === 5:
        mensaje.textContent = 'Te ha entrado el canguelo eh?😵';
        break;
      case puntuacion === 6:
        mensaje.textContent = 'Casi casi...😬';
        break;
      case puntuacion === 7:
        mensaje.textContent = 'Casi casi...😬';
        break;
      case puntuacion === 7.5:
        mensaje.textContent = '¡ Lo has clavado! ¡Enhorabuena!😉';
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
  } else {
    //console.log('No es game over');
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
    });
  }
};

const eventos = () => {
  // Boton pedir carta
  const pedirCarta = document.querySelector('.pedir_carta');
  if (
    pedirCarta !== null &&
    pedirCarta !== undefined &&
    pedirCarta instanceof HTMLButtonElement
  ) {
    pedirCarta.addEventListener('click', () => {
      let valorCarta = dameCarta();
      muestraCarta(valorCarta);
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
