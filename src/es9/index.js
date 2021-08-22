// Clase 9 

// Operador de Reposo
// No permite extraer las propiedades de un objeto que aun no se ha construido

const obj = {
    name: 'Eduardo',
    age: 27,
    country: 'MX',
}

let { name, ...all } = obj
console.log(name, all)
console.log(all)

// ==== Console ====
// = > Eduardo {age: 27, contry: 'MX}
// = > {age: 27, contry: 'MX}

// ---------------------------------------------------------------------

// Utilizando las propiedades de propagación
// Podremos unir uno o cuantos elementos queramos de objetos a un nuevo objeto

const obj = {
    name: 'Eduardo',
    age: 27
}

// Utilzamos el operador de propagacion para anidar estos dos elementos (desglosamos un objeto)
const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)

// ---------------------------------------------------------------------

// Promise.finaly
// Podemos saber cuando ha terminado el llamado y poder ejecutar alguna funcion o logica de codigo segun sea el caso 

const helloWord = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello Word'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo')) // Se ejecuta cuando la promesa se resuelve o arroja un error

// ---------------------------------------------------------------------

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1] //  numero del grupo
const month = match[2]
const day = match[3]

console.log(year, month, day)