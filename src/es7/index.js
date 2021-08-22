// Clase 6 ¿Que se implemento en ES7?

// En esta version se incorporan dos cambios muy particulares
// 1 El valor de include
// 2 Operaciones en forma exponencial (POW)
// Sustitulle index of 

// Iclude metodo que trabaja sonbre un arreglo o string, nos permite saber si hay un elemento dentro de este valor
let numbers = [1,2,3,7,8]

// Validamos si dentro del arreglo se incluye el numero 7
if (numbers.includes(9)) {
    console.log('Si se encuentra el valor 7')
} else {
    console.log('No se encuentra')
}

// -----------------------------------------------------------------------------------

// Como vamos a elevar a una potencia.

let base = 4
let exponent = 4
let result = base ** exponent

console.log(result)