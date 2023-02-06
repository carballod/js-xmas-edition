function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'validarNombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
      'Este campo debe tener menos de 50 caracteres',
      'validarNombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre('123123123') === 'El campo nombre solo acepta letras',
    'Validar nombre no valido que el nombre solo tenga letras'
  )

  console.assert(
    validarNombre('Fabricio') === '', "validarNombre fallo con un nombre valido"
  );
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacio', 'validarCiudad no mostro un error cuando la ciudad es vacia'
    );

    console.assert(
        validarCiudad('Buenos Aires') === '',
        'validarCiudad no funciono con un nombre de ciudad valido'
    );
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") === 'El campo descripcion regalo no puede estar vacio',
        'validarDescripcionRegalo no valido que el campo no este vacio'
    );

    console.assert(
        validarDescripcionRegalo('akdakkssksakdakkssksakdakkssksakdakkssksakdakkssksakdakkssksakdakkssksakdakkssksakdakkssksakdakkssks') === 'El campo descripcion es muy largo',
        'validarDescripcionRegalo no valido que el campo no sea muy largo'
    );

    console.assert(
        validarDescripcionRegalo("Regalo") === "",
        'La funcion validar descripcion no funciono con una descripcion correcta'
    )

    console.assert(
        validarDescripcionRegalo(",.,.,.,.") === 'El campo descripcion solo puede tener numeros y letras',
        "La funcion validar descripcion regalo no valido que fuera solo numeros y letras"
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
