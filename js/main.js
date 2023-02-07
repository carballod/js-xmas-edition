const validarNombre = function(nombre){
    const contieneSoloLetras = /^[A-z]+$/i;

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

function validarFormulario(event){

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        'descripcion-regalo': errorDescripcionRegalo,
        nombre: errorNombre,
        ciudad: errorCiudad
    };

    const esExito = manejarErrores(errores) === 0;

    if(esExito){
        $form.className = 'oculto';
        document.getElementById('#exito').className = '';
    }

    event.preventDefault();
}

function manejarErrores(errores){

    // Object.keys(errores) = ['descripcion-regalo': '', nombre: '', ciudad: '']
    // keys = ['descripcion-regalo': '', nombre: '', ciudad: '']
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            cantidadErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[key].className = '';
        }

        return cantidadErrores;
    });

    // errorNombre = errores.nombre; // nombre;
    // errorCiudad = errores.ciudad; // ciudad;
    // errorDescripcionRegalo = errores.descripcionRegalo; // descripcionRegalo

    // if (errorNombre){
    //     $form.nombre.className = "error";
    // } else {
    //     $form.nombre.className = "";
    // }

    // if (errorCiudad){
    //     $form.ciudad.className = "error"
    // } else{
    //     $form.ciudad.className = ""
    // }

    // if (errores.descripcionRegalo){
    //     $form['descripcion-regalo'].className = "error";
    // } else{
    //     $form['descripcion-regalo'].className = "";
    // }
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;



// CTRL + / para comentar varias lineas de codigo