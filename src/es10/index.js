// Clase 10!

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

// Nos retorna un array con cualquier subarray aplanado
console.log(array.flat())   // Si argumentos solo aplana un nivel
console.log(array.flat(2)) // tiene dos sub matrizes

// ==== Console ====
// = > [1, 2, 3, 1, 2, 3, [1, 2, 3]]
// =
// = > [
// = >  1, 2, 3, 1, 2
// = >  3, 1, 2, 3
// = > ]


// --------------------------------------------------------------------

// Flat map
// Permite mapear cada elemento, pasarle una funcion y aplanarlo segun el resultado

let array = [1, 2, 3, 4, 5]
console.log(array.flatMap(value => [value * 2])) // devuelve el velor y un nuevo valor con el proceso

// ==== Console ====
// = > [
// = >  1, 2, 2, 4, 3
// = >  6, 4, 8, 5, 10
// = > ]

// --------------------------------------------------------------------

// Trim Start
// Permite eliminar los espacion en blanco de un string

let hello = '      hello world'
console.log(hello)
console.log(hello.trimStart())

let hello = 'hello world          '
console.log(hello)
console.log(hello.trimEnd())

// --------------------------------------------------------------------

// Optional Catch Biding
// Podemos pasar de forma opcional el parametro de error al valor de catch

try {
    
} catch { // no es nesesario incluir el error como parametro, ya va implicito en el proceso de catch
    error   
}

// --------------------------------------------------------------------

// From Entries
// Va a transformar (clave: valor) en un objeto, ayuda cuando se trabaja con arreglos y se necesite tranformarlo en objetos
let entries = [['name', 'eduardo'], ['age', 27]]
console.log(Object.fromEntries(entries))

// ==== Console ====
// = > {name: 'eduardo', age: 27}

// --------------------------------------------------------------------

// Symbol Object
// Nos permite acceder a una descripcion

let mySymbl = `My Symbl`
let symbl = Symbol(mySymbl)
console.log(symbl.description)

// ==== Console ====
// = > My Symbl