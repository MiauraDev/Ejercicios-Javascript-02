const size = 5; // Cambia el tamaño según lo que necesites

// Función para mostrar el patrón en SweetAlert
function showPattern(patternFunction) {
    const pattern = patternFunction();
    Swal.fire({
        title: 'Patrón Generado',
        html: `<pre>${pattern}</pre>`,
        width: 600,
        padding: '3em',
        background: '#f5f5f5',
        confirmButtonText: 'Cerrar'
    });
}

// Función para el Cuadrado lleno
function squareFull() {
    let pattern = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            pattern += '* ';
        }
        pattern += '\n';
    }
    return pattern;
}

// Función para el Cuadrado hueco
function squareHollow() {
    let pattern = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}

// Función para el Tablero de Ajedrez
function chessBoard() {
    let pattern = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}

// Función para la Pirámide Izquierda
function leftPyramid() {
    let pattern = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < i; j++) {
            pattern += '* ';
        }
        pattern += '\n';
    }
    return pattern;
}

// Función para la Pirámide centrada
function centeredPyramid() {
    let pattern = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < size - i; j++) {
            pattern += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            pattern += '*';
        }
        pattern += '\n';
    }
    return pattern;
}

// Función para la Pirámide invertida
function invertedPyramid() {
    let pattern = '';
    for (let i = size; i >= 1; i--) {
        for (let j = 0; j < size - i; j++) {
            pattern += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            pattern += '*';
        }
        pattern += '\n';
    }
    return pattern;
}

// Función para el Diamante
function diamond() {
    let pattern = '';
    // Parte superior del diamante
    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < size - i; j++) {
            pattern += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            pattern += '*';
        }
        pattern += '\n';
    }
    // Parte inferior del diamante
    for (let i = size - 1; i >= 1; i--) {
        for (let j = 0; j < size - i; j++) {
            pattern += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            pattern += '*';
        }
        pattern += '\n';
    }
    return pattern;
}