// Función para generar los primeros N números primos
function generatePrimes() {
    Swal.fire({
        title: 'Generar N números primos',
        input: 'number',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        inputLabel: 'Ingresa la cantidad de números primos que deseas generar',
        inputValidator: (value) => {
            if (!value || value <= 0) return 'Ingresa un número entero positivo.';
        },
        customClass: {
            title: 'custom-title',
            inputLabel: 'custom-label' 
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const n = parseInt(result.value);
            let primes = [];
            let num = 2;

            while (primes.length < n) {
                let isPrime = true;

                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break;
                    }
                }

                if (isPrime) primes.push(num);
                num++;
            }

            Swal.fire(`Los primeros ${n} números primos son: ${primes.join(', ')}`);
        }
    });
}

// Función para generar los primeros N números perfectos
function generatePerfectNumbers() {
    Swal.fire({
        title: 'Generar N números perfectos no mayor a 4',
        input: 'number',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        inputLabel: 'Ingresa la cantidad de números perfectos que deseas generar pero no mayor a 4',
        inputValidator: (value) => {
            if (!value || value <= 0) return 'Ingresa un número entero positivo.';
        },
        customClass: {
            title: 'custom-title',
            inputLabel: 'custom-label' 
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const n = parseInt(result.value);
            let perfectNumbers = [];
            let num = 2;

            while (perfectNumbers.length < n) {
                let sum = 0;

                for (let i = 1; i < num; i++) {
                    if (num % i === 0) sum += i;
                }

                if (sum === num) perfectNumbers.push(num);
                num++;
            }

            Swal.fire(`Los primeros ${n} números perfectos son: ${perfectNumbers.join(', ')}`);
        }
    });
}
