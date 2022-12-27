// const respuesta = true;
const respuesta = false;

function pensandoRespuesta() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (respuesta) {resolve('Acepto ir al cine con tigo.')} 
      else { reject("Lo siento! no han aceptado tu propuesta.")}
    }, 2000);
  });
}

async function recibiendoRespuesta() {
  console.log('recibiendo la respuesta...');
  const respuestaFinal = await pensandoRespuesta();
  console.log(respuestaFinal);
}

recibiendoRespuesta();

