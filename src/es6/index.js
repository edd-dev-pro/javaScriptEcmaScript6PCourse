// Calse 2
// Parametros por defecto
// Podemos establecer ciertos valores que le pasamos a una funcion de forma por defecto

// Antes es6
function newFunction(name, age, country) {
    var name = name || 'Eduardo';
    var age = age || 27;
    var country = country || 'MX';
    console.log(name, age, country)
}

// Despues es6
function newFunction2(name = 'Eduardo', age = 27, country = 'MX') {
    console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', 23, 'MX')

// --------------------------------------------------------------------

// Templates Literals
// Nos permiten separa o unir varios elementos

// Antes
let hello = 'hello'
let word = 'word'
let epicPhrase = hello + ' ' + word
console.log(epicPhrase)

// Despues
let epicPhrase2 = `${hello} ${word}` // Comillas francesas
console.log(epicPhrase2)

// =====================================================================

// Clase 3
// Multilinea en los string

// Antes es6
let lorem = 'Vivamus ut gravida neque, id feugiat turpis. Cras varius maximus elit, et aliquet lorem ultrices quis. \n'
+ 'otra frase epica que necesitamos.'

// Despues es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`
console.log(lorem)
console.log(lorem2)

// --------------------------------------------------------------------

// Destructuracion de elementos

// Antes es6
let person = {
    'name': 'Eduardo',
    'age': 27,
    'country': 'MX'
}

console.log(person.name, person.age, person.country)

// Destructuracion
// Despues es6
let {name, age, country} = person
console.log(name, age, country)

// --------------------------------------------------------------------

// Operador de propagación
// Nos permite expandir en ciertas situaciones varios elementos

let team1 = ['Oscar', 'Eduardo', 'Sahsa']
let team2 = ['Diego', 'Juan', 'Ricardo']

// Al utilizar el operador, nos permite traer dentro de education traer los ELEMENTOS y unirlos en uno mismo.
let education = ['David', ...team1, ...team2]

console.log(education)

// --------------------------------------------------------------------

// Scope de Bloque {}
{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)
// console.log(globalLet)

// --------------------------------------------------------------------

// Antes es6
var a = 'b'
a = 'a'
console.log(a)

// Despues es6
// No se puede reasignar.
const a = 'b'
a = 'a'
console.log(a)

// =====================================================================

// Clase 4

// Propiedad de Objetos mejorada
// Se trabaja con asignacion de objetos.

//Antes es6
let name = 'Eduardo'
let age = 27
obj = { name: name, age: age}

// Despues es6
obj2 = { name, age} 
console.log(obj2)

// --------------------------------------------------------------------

// Arrow Fuction
// Solventan un problema particular o a trabajar con dos elemntos:
// Una sintaxis mas reducida.
// Un this no vinculado a la funcion

const names = [
    {name: 'Eduardo', age: 27},
    {name: 'Ricardo', age: 28}
]

let listOfNames = names.map(function (item) {
    console.log(item.name)
})

// Arrow Fuction 
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num

// --------------------------------------------------------------------

// Promesas
// Con las promesas podemos trabjar el asincronismo en los callback

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola')) // a una promesa podemos anidar varios then
    .catch(error => console.log(error))

// =====================================================================

// Clase 5

// Clases
// Sintaxis mas clara para manejar objetos (Protoripos) y herencia dentro de JS (Herencia prototipal)

class calculator {
    constructor () {
        this.valueA = 0 // asiganmos las variables que estan dentro de un global
        this.valueB = 0
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    } 
}

const calc = new calculator()
console.log(calc.sum(2, 2))

// --------------------------------------------------------------------

// Import y Export
// Esto es trabajar con modulos

import {hello} from './module' // Se importa la funcion del modulo y especificamos la ruta del modulo.

hello() // funcion disponible en este doc.

// Asi podremos separa en modulos cuantos elementos sean necesarios
// Esto significa que podremos separa nuestra logica, como trabajar una logica que solo se encarge de un request a un api
// Generar un calculo matematico en diferentes modulos y llamarlo segun sea el caso dentro del doc principal (index.js)

// --------------------------------------------------------------------

// Generators
// Es una funcion especial que retorna una seria de valores segun el algoritmo definido

function* helloWord() {
    if (true) {
        yield 'Hello' // Nos permite retornan algo, guarda el estado de forma interna
    }
    if (true) {
        yield 'Word' // Segundo elemento que sera llamado cuando sea ejecutado el sig. valor
    }
}

const generatorsHello = helloWord()

// Ahora podemos utlizar el valor next, nos permitira ejecutar la primer logica y obtener el valor segun sea el caso
// Cuando se ejecute el siguiente valor next recordara donde estaba, en este caso la asignacion logica que acabamos de crear 
// para mostrar el segundo valor, y asi por cada uno de los pasos que pueda llegar a tener esta logica dentro del generator.

console.log(generatorsHello.next().value) // con value obtenemos el valor retornado.
console.log(generatorsHello.next().value)
console.log(generatorsHello.next().value)