function problema1() {
    Swal.fire({
        title: 'Ingrese un número N',
        input: 'number',
        inputAttributes: { min: 1 },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let n = parseInt(result.value);
            let resultado = "";
            for (let i = 1; i <= n; i++) {
                resultado += i + " ";
            }
            Swal.fire('Resultado', resultado, 'info');
        }
    });
}

function problema2() {
    Swal.fire({
        title: 'Ingrese un número N',
        input: 'number',
        inputAttributes: { min: 1 },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title ',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let n = parseInt(result.value);
            let resultado = "";
            for (let i = 1; i <= n; i += 2) {
                resultado += i + " ";
            }
            Swal.fire('Resultado', resultado, 'info');
        }
    });
}

function problema3() {
    Swal.fire({
        title: 'Ingrese un número N',
        input: 'number',
        inputAttributes: { min: 1 },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let n = parseInt(result.value);
            let resultado = "";
            for (let i = n; i >= 1; i--) {
                resultado += i + " ";
            }
            Swal.fire('Resultado', resultado, 'info');
        }
    });
}

function problema4() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `<br/> 9 x ${i} = ${9 * i}\n`;
    }
    Swal.fire('Tabla del 9', resultado, 'info');
}

function problema5() {
    Swal.fire({
        title: 'Ingrese un número',
        input: 'text',
        inputAttributes: { pattern: '\\d*' },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        let numero = result.value;
        if (/^\d+$/.test(numero)) {
            let suma = 0;
            for (let i = 0; i < numero.length; i++) {
                suma += parseInt(numero[i]);
            }
            Swal.fire('Resultado', 'Suma de dígitos: ' + suma, 'info');
        } 
    });
}

function problema6() {
    Swal.fire({
        title: 'Ingrese el número N',
        input: 'number',
        inputAttributes: { min: 1 },
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
        }
    }).then((resultN) => {
        if (resultN.isConfirmed) {
            let n = parseInt(resultN.value);
            Swal.fire({
                title: 'Ingrese el número M',
                input: 'number',
                inputAttributes: { min: 1 },
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                customClass: {
                    title: 'custom-title',
                }
            }).then((resultM) => {
                let m = parseInt(resultM.value);
                let suma = 0;
                for (let i = Math.min(n, m); i <= Math.max(n, m); i++) {
                    if (i % 2 === 0) {
                        suma += i;
                    }
                }
                Swal.fire('Resultado', 'Suma de números pares: ' + suma, 'info');
            });
        }
    });
}

function problema7() {
    Swal.fire({
        title: 'Ingrese un número N',
        input: 'number',
        inputAttributes: { min: 1 },
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let n = parseInt(result.value);
            let suma = 0;
            for (let i = 1; i <= n; i++) {
                suma += i;
            }
            Swal.fire('Resultado', 'Sumatoria de los primeros ' + n + ' números: ' + suma, 'info');
        }
    });
}

function problema8() {
    Swal.fire({
        title: 'Ingrese un número N',
        input: 'number',
        inputAttributes: { min: 1 },
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let n = parseInt(result.value);
            let resultado = 1;
            for (let i = 1; i <= n; i++) {
                resultado *= i;
            }
            Swal.fire('Resultado', 'Factorial de ' + n + ': ' + resultado, 'info');
        }
    });
}