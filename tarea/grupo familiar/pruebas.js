function probarValidarNumeroIntegrantes(){
    console.assert(
        validarNumeroIntegrantes('') === 'Este campo debe tener al menos un integrante',
        'validarCantidadIntegrantes no validó que el campo no sea vacío'
    );

    console.assert(
        validarNumeroIntegrantes(31) === 'Este campo no puede ser mayor a 30',
        'validarCantidadIntegrantes no validó que el campo no sea mayor a 30'
    );
}

function probarValidarEdadIntegrantes(){
    console.assert(
        validarEdadesIntegrantes('') === 'Este campo debe tener al menos un numero',
        'validarEdadIntegrantes no validó que el campo no sea vacío'
    );

    console.assert(
        validarEdadesIntegrantes(-1) === 'Este campo debe ser mayor a 0',
        'validarEdadIntegrantes no validó que el campo no sea menor a 0'
    );

    console.assert(
        validarEdadesIntegrantes(121) === 'Este campo debe ser menor a 120',
        'validarCantidadIntegrantes no validó que el campo no sea mayor a 120'
    );
}

probarValidarNumeroIntegrantes();
probarValidarEdadIntegrantes();