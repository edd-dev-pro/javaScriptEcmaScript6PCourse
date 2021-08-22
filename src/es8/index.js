// Clase 7 

// Una de las caracteristicas añadidas Object entries, el cual nos permite devolver la clabe y valores de un Objeto en una matriz (cada elemento es un array en el array)
const data = {
    frontend: 'Eduardo',
    backend: 'Isabel',
    desing: 'Ana'
}

// Transformamos el objeto a una matriz
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// -----------------------------------------------------------------------

// Object Values, devuelve los valores de un objeto a una arreglo
const data = {
    frontend: 'Eduardo',
    backend: 'Isabel',
    desing: 'Ana', // Trailing comas
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

// -----------------------------------------------------------------------

// Padding

// Como podemos anteponer o agregar una string vacia o elementos a este string  
const string = 'Hello'
console.log(string.padStart(7, 'hi')) // 1. Cuantos caracteres voy a tener (max length, cuantos vamos a añadir) 2. cuales son los esos carateres.
console.log(string.padEnd(12, ' -----'))
console.log('Food'.padEnd(12, '  -----'))

// -----------------------------------------------------------------------

// Trailing comas

const obj = {
    name: 'Eduardo', // Puede segir un nuevo valor o ya no
}

// ========================================================================

// Clase 8

// Asyn Await
const helloWord = () => {
    return new Promise((resolve, rejecte) => {
        (false)
            ? setTimeout(() => resolve('Hello Word'), 3000)
            : rejecte(new Error('Test Error'))
    })
}

const helloAsyn = async () => {
    const hello = await helloWord()
    // const hello2 = await anotherFunction()
    console.log(hello)
}

helloAsyn()

const anotherFunction = async () => {
    try {
        const hello = await helloWord()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()