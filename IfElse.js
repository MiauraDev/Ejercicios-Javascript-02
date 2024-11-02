function determinarParidad() {
    Swal.fire({
        title: 'Ingrese un número',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let numero = parseInt(result.value);
            let mensaje = (numero % 2 === 0) ? 'El número es par.' : 'El número es impar.';
            Swal.fire('Resultado', mensaje, 'info');
        }
    });
}

function divisiblePorCinco() {
    Swal.fire({
        title: 'Ingrese un número',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let numero = parseInt(result.value);
            let mensaje = (numero % 5 === 0) ? 'Es divisible por 5.' : 'No es divisible por 5.';
            console.log(mensaje);
            Swal.fire('Resultado en Console', mensaje, 'info');
        }
    });
}

function divisiblePorCincoYOnce() {
    Swal.fire({
        title: 'Ingrese un número',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let numero = parseInt(result.value);
            let mensaje = (numero % 5 === 0 && numero % 11 === 0) ? 'Es divisible por 5 y 11.' : 'No es divisible por 5 y 11.';
            console.log(mensaje);
            Swal.fire('Resultado en Console', mensaje, 'info');
        }
    });
}

function numeroMayor() {
    Swal.fire({
        title: 'Ingrese el primer número',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result1) => {
        if (result1.isConfirmed) {
            let num1 = parseInt(result1.value);
            Swal.fire({
                title: 'Ingrese el segundo número',
                input: 'number',
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                customClass: {
                    title: 'custom-title',
                }
            }).then((result2) => {
                if (result2.isConfirmed) {
                    let num2 = parseInt(result2.value);
                    let mayor = (num1 > num2) ? num1 : num2;
                    Swal.fire('Resultado', 'El número mayor es: ' + mayor, 'info');
                }
            });
        }
    });
}

function numeroMayorTernario() {
    Swal.fire({
        title: 'Ingrese el primer número',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title ',
        }
    }).then((result1) => {
        if (result1.isConfirmed) {
            let num1 = parseInt(result1.value);
            Swal.fire({
                title: 'Ingrese el segundo número',
                input: 'number',
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                customClass: {
                    title: 'custom-title',
                }
            }).then((result2) => {
                if (result2.isConfirmed) {
                    let num2 = parseInt(result2.value);
                    Swal.fire('Resultado', 'El número mayor es: ' + (num1 > num2 ? num1 : num2), 'info');
                }
            });
        }
    });
}

function empiezaConNumeroOLetra() {
    Swal.fire({
        title: 'Ingrese un texto',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let primerCaracter = result.value.charAt(0);
            let mensaje = (!isNaN(primerCaracter)) ? 'Empieza con un número.' : 'Empieza con una letra.';
            Swal.fire('Resultado', mensaje, 'info');
        }
    });
}

function trianguloValido() {
    Swal.fire({
        title: 'Ingrese el primer ángulo',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result1) => {
        if (result1.isConfirmed) {
            let angulo1 = parseInt(result1.value);
            Swal.fire({
                title: 'Ingrese el segundo ángulo',
                input: 'number',
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                customClass: {
                    title: 'custom-title',
                }
            }).then((result2) => {
                if (result2.isConfirmed) {
                    let angulo2 = parseInt(result2.value);
                    Swal.fire({
                        title: 'Ingrese el tercer ángulo',
                        input: 'number',
                        showCancelButton: true,
                        confirmButtonText: 'Aceptar',
                        customClass: {
                            title: 'custom-titler',
                        }
                    }).then((result3) => {
                        if (result3.isConfirmed) {
                            let angulo3 = parseInt(result3.value);
                            let esValido = (angulo1 + angulo2 + angulo3 === 180);
                            Swal.fire('Resultado', esValido ? 'El triángulo es válido.' : 'El triángulo no es válido.', 'info');
                        }
                    });
                }
            });
        }
    });
}

function empiezaConMayuscula() {
    Swal.fire({
        title: 'Ingrese una palabra',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let primerCaracter = result.value.charAt(0);
            let mensaje = (primerCaracter === primerCaracter.toUpperCase()) ? 'Empieza con mayúscula.' : 'No empieza con mayúscula.';
            Swal.fire('Resultado', mensaje, 'info');
        }
    });
}

function esBisiesto() {
    Swal.fire({
        title: 'Ingrese un año',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let año = parseInt(result.value);
            let esBisiesto = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0));
            Swal.fire('Resultado', esBisiesto ? 'Es un año bisiesto.' : 'No es un año bisiesto.', 'info');
        }
    });
}

function adivinarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    Swal.fire({
        title: 'Adivina el número (entre 1 y 10)',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let numeroUsuario = parseInt(result.value);
            let mensaje = (numeroUsuario === numeroAleatorio) ? 'Buen trabajo' : 'No corresponde';
            Swal.fire('Resultado', mensaje, 'info');
        }
    });
}
