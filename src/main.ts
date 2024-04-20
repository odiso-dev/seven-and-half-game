import './style.css';

// Crear carrousel imgs
/* function cambiarFotoPrincipal(idMiniatura) {
    const fotoPrincipal = document.querySelector("#foto-principal");
    const miniatura = document.getElementById(idMiniatura);
    fotoPrincipal.src = miniatura.src;
    fotoPrincipal.alt = miniatura.alt;
}

const miniatura1 = document.querySelector("#miniatura1");
const miniatura2 = document.querySelector("#miniatura2");
const miniatura3 = document.querySelector("#miniatura3");


miniatura1.addEventListener("click", () => {
    cambiarFotoPrincipal("miniatura1");
});
miniatura2.addEventListener("click", () => {
    cambiarFotoPrincipal("miniatura2");
});
miniatura3.addEventListener("click", () => {
    cambiarFotoPrincipal("miniatura3");
});
miniatura4.addEventListener("click", () => {
    cambiarFotoPrincipal("miniatura4");
}); */

/* ************************************ */
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);

const numeroParaAcertar: number = generarNumeroAleatorio();

console.log(numeroParaAcertar);

type Estado =
  | 'NO_ES_UN_NUMERO'
  | 'EL_NUMERO_ES_MAYOR'
  | 'EL_NUMERO_ES_MENOR'
  | 'ES_EL_NUMERO_SECRETO'
  | 'GAME_OVER_MAXIMO_INTENTOS';

const MAXIMO_INTENTOS: number = 5;
let numeroDeIntentos: number = 0;

const hasSuperadoElNumeroMaximoDeIntentos = (): boolean =>
  numeroDeIntentos >= MAXIMO_INTENTOS;

const muestraNumeroDeIntentos = () => {
  const elementoIntentos = document.querySelector('#intentos');
  if (elementoIntentos) {
    elementoIntentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
  } else {
    console.error('muestraNumeroDeIntentos: algo ha ido mal');
  }
};

document.addEventListener('DOMContentLoaded', muestraNumeroDeIntentos);

const gestionarGameOVer = (estado: Estado) => {
  if (estado === 'GAME_OVER_MAXIMO_INTENTOS') {
    const elementoComprobar = document.querySelector('#comprobar');
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
      elementoComprobar.disabled = true;
    } else {
      console.error(
        'gestionarGameOver : No se ha encontrado el elemento con id comprobar'
      );
    }
  }
};

const muestaMensajeComprobación = (texto: string, estado: Estado) => {
  let mensaje: string = '';

  switch (estado) {
    case 'NO_ES_UN_NUMERO':
      mensaje = `${texto} no es un número`;
      break;
    case 'EL_NUMERO_ES_MAYOR':
      mensaje = `${texto} te has pasado! Prueba con uno menor`;
      break;
    case 'EL_NUMERO_ES_MENOR':
      mensaje = `${texto} te has quedado corto! Prueba con uno mayor`;
      break;
    case 'ES_EL_NUMERO_SECRETO':
      mensaje = 'Enhorabuena! has acertado el número';
      break;
    case 'GAME_OVER_MAXIMO_INTENTOS':
      mensaje = 'GAME OVER! no tienes más intentos';
      break;
    default:
      mensaje = 'Qué ha pasado?';
      break;
  }

  const elementoResultado = document.querySelector('#resultado');
  if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
  } else {
    console.error('muestaMensajeComprobación: ha habido un error');
  }
};

const comprobarNumero = (texto: string): Estado => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);
  if (!esUnNumero) {
    return 'NO_ES_UN_NUMERO';
  }
  if (numero === numeroParaAcertar) {
    return 'ES_EL_NUMERO_SECRETO';
  }
  if (hasSuperadoElNumeroMaximoDeIntentos()) {
    return 'GAME_OVER_MAXIMO_INTENTOS';
  }

  return numero > numeroParaAcertar
    ? 'EL_NUMERO_ES_MAYOR'
    : 'EL_NUMERO_ES_MENOR';
};

const handleCompruebaClick = () => {
  let texto: string = '';
  const inputElement = document.querySelector('#numero');
  if (inputElement && inputElement instanceof HTMLInputElement) {
    texto = inputElement.value;
  }
  const estado: Estado = comprobarNumero(texto);
  muestaMensajeComprobación(texto, estado);
  numeroDeIntentos++;
  muestraNumeroDeIntentos();
  gestionarGameOVer(estado);
};

const botonComprobar = document.querySelector('#comprobar');
botonComprobar?.addEventListener('click', handleCompruebaClick);
