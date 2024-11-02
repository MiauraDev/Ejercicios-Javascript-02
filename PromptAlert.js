function sumarDosNumeros() {
    Swal.fire({
        title: 'Ingrese el primer número',
        input: 'text',
        inputAttributes: { pattern: '\\d*' },
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result1) => {
        if (result1.isConfirmed) { 
            let num1 = result1.value;
            Swal.fire({
                title: 'Ingrese el segundo número',
                input: 'text',
                inputAttributes: { pattern: '\\d*' },
                confirmButtonText: 'Aceptar',
                customClass: {
                    title: 'custom-title',
                }
            }).then((result2) => {
                if (result2.isConfirmed) { 
                    let num2 = result2.value;
                    if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                        let suma = parseFloat(num1) + parseFloat(num2);
                        Swal.fire('Resultado', 'La suma de los números es: ' + suma, 'info');
                    } else {
                        Swal.fire('Error', 'Ingrese números válidos.', 'error');
                    }
                }
            });
        }
    });
}


function convertirCelsiusAFahrenheit() {
    Swal.fire({
        title: 'Ingrese la temperatura en Celsius',
        input: 'text',
        inputAttributes: { pattern: '\\d*' },
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        let celsius = result.value;
        if (/^-?\d+(\.\d+)?$/.test(celsius)) {
            let fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
            Swal.fire('Resultado', `La temperatura en Fahrenheit es: ${fahrenheit}`, 'info');
        }
    });
}

function dividirPorDiez() {
    Swal.fire({
        title: 'Ingrese un número',
        input: 'text',
        inputAttributes: { pattern: '\\d*' },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        let numero = result.value;
        if (/^\d+$/.test(numero)) {
            let resultado = parseFloat(numero) / 10;
            Swal.fire('Resultado', `El resultado de dividir por 10 es: ${resultado}`, 'info');
        }
    });
}

function tipoDeDato() {
    let a = [1, 2, 3];
    Swal.fire('Resultado', `El tipo de dato de 'a' es: ${typeof a}`, 'info');
}