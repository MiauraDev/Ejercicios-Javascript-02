// Función para encontrar todos los divisores de un número
function findDivisors() {
    Swal.fire({
        title: 'Divisores de un número',
        input: 'number',
        inputLabel: 'Ingresa un número entero',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
            inputLabel: 'custom-label' 
        },
        
        inputValidator: (value) => {
            if (!value || value <= 0) return 'Ingresa un número entero positivo.';
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const num = parseInt(result.value);
            let divisors = [];
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) divisors.push(i);
            }
            Swal.fire(`Los divisores de ${num} son: ${divisors.join(', ')}`);
        }
    });
}

// Función para verificar si un número es primo
function isPrime() {
    Swal.fire({
        title: 'Número Primo',
        input: 'number',
        inputLabel: 'Ingresa un número mayor o igual a 2',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
            inputLabel: 'custom-label' 
        },
        inputValidator: (value) => {
            if (!value || value < 2) return 'El número debe ser mayor o igual a 2.';
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const num = parseInt(result.value);
            let isPrime = true;

            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            Swal.fire(
                isPrime
                    ? `El número ${num} es primo.`
                    : `El número ${num} no es primo.`
            );
        }
    });
}

// Función para verificar si un número es perfecto
function isPerfect() {
    Swal.fire({
        title: 'Número Perfecto',
        input: 'number',
        inputLabel: 'Ingresa un número entero positivo',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'custom-title',
            inputLabel: 'custom-label' 
        },
        
        inputValidator: (value) => {
            if (!value || value <= 0) return 'Ingresa un número entero positivo.';
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const num = parseInt(result.value);
            let sum = 0;

            for (let i = 1; i < num; i++) {
                if (num % i === 0) sum += i;
            }

            Swal.fire(
                sum === num
                    ? `El número ${num} es un número perfecto.`
                    : `El número ${num} no es un número perfecto.`
            );
        }
    });
}
