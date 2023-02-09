document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number(Math.trunc($cantidadIntegrantes.value));
  
    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
  
    event.preventDefault();
};

document.querySelector('#calcular').onclick = function(event) {
    const numeros = Edad.obtenerEdadesIntegrantes();
    Boton.mostrarEdad('mayor', Edad.obtenerMayorNumero(numeros));
    Boton.mostrarEdad('menor', Edad.obtenerMenorNumero(numeros));
    Boton.mostrarEdad('promedio', Edad.obtenerPromedio(numeros));
    Boton.mostrarResultados();
  
    event.preventDefault();
};

function resetear() {
  borrarIntegrantesAnteriores();
  Boton.ocultarResultados();
  Boton.ocultarBotonCalculo();
}

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  $integrantes.forEach(integrante => {
    integrante.remove();
  })
}

function crearIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
      Boton.mostrarBotonCalculo();
  } else {
      resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
      crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'integrante';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  const $input = document.createElement('input');
  $input.type = 'number';

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
}

const Boton = {
    ocultarBotonCalculo: function () {
      document.querySelector('#calcular').className = 'oculto';
    },
    mostrarBotonCalculo: function () {
      document.querySelector('#calcular').className = '';
    },
    ocultarResultados: function () {
      document.querySelector('#analisis').className = 'oculto';
    },
    mostrarResultados: function () {
      document.querySelector('#analisis').className = '';
    },
    mostrarEdad: function (tipo, valor) {
      document.querySelector(`#${tipo}-edad`).textContent = valor;
    }
  };

const Edad = {
    obtenerEdadesIntegrantes: function () {
      const $integrantes = document.querySelectorAll('.integrante input');
      const edades = [];
      $integrantes.forEach(integrante => {
        edades.push(Number(Math.trunc(integrante.value)));
      });
      return edades;
    },
    obtenerMenorNumero: function (numeros) {
      let menorNumero = numeros[0];
      numeros.forEach(numero => {
        if (numero < menorNumero) {
          menorNumero = numero;
        }
      });
      return menorNumero;
    },
    obtenerMayorNumero: function (numeros) {
      let mayorNumero = numeros[0];
      numeros.forEach(numero => {
        if (numero > mayorNumero) {
          mayorNumero = numero;
        }
      });
      return mayorNumero;
    },
    obtenerPromedio: function (numeros) {
        let acumulador = 0;
        numeros.forEach(numero => {
            acumulador += numero;
        });
        return (acumulador / numeros.length).toFixed(2);
    }
};



function validarNumeroIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes === '') return 'Este campo debe tener al menos un integrante';
  if (cantidadIntegrantes > 30) return 'Este campo no puede ser mayor a 30';
  return '';
};

function validarEdadesIntegrantes(obtenerEdadesIntegrantes) {
  if (obtenerEdadesIntegrantes === '') return 'Este campo debe tener al menos un numero';
  if (obtenerEdadesIntegrantes < 0) return 'Este campo debe ser mayor a 0';
  if(obtenerEdadesIntegrantes > 120) return 'Este campo debe ser menor a 120';
  return '';
}

function validarCalculador(event){

  const errorEdades = validarEdadesIntegrantes(obtenerEdadesIntegrantes);
  const errorCantidadIntegrantes = validarNumeroIntegrantes(cantidadIntegrantes);

  const errores = {
    cantidadIntegrantes: errorCantidadIntegrantes,
    obtenerEdadesIntegrantes: errorEdades
  };

  event.preventDefault();
};

function manejarErrores(errores){
  const keys = Object.keys(errores);
  let cantidadErrores = 0;

  keys.forEach(function(key){
    const error = errores[key];
    if(error){
      cantidadErrores++;
      $form[key].className = 'error';
    } else {
      $form[key].className = '';
    }
    return cantidadErrores;
  });
}
