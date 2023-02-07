const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

const contieneSoloLetras = /^[A-z]+$/i;

console.log(nombre);
console.log(comportamiento);

const validarNombre = function(nombre){
    if (nombre.length === 0) return 'Este campo debe tener al menos 1 caracter';
    else if (nombre.length > 50) return 'Este campo debe tener menos de 50 caracteres';
    else if (!contieneSoloLetras.test(nombre)) return 'El campo nombre solo acepta letras';

    return '';
};

const validarCiudad = function(ciudad){
    if (ciudad.length === 0) return 'El campo ciudad no puede estar vacio';

    return '';
};

const validarDescripcionRegalo = function(descripcionRegalo){
    if (descripcionRegalo.length === 0) return 'El campo descripcion no puede estar vacio';
    else if (descripcionRegalo.length >= 100) return 'La descripcion debe tener menos de 100 caracteres';
    else if (!/^[A-z0-9]+$/i.test(descripcionRegalo)) return 'El campo descripcion solo puede tener numeros y letras';

    return '';
}