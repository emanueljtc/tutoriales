const numeros = [1, 2, 3, 4, 5]

/* Codigo Imperativo */
console.time('Imperativo')

function squared(numeros) {
    let array = []
    for (let i = 0; i < numeros.length; i++) {
        array.push(numeros[i] * numeros[i])
    }
    return console.log(array)
}
squared(numeros)
console.timeEnd('Imperativo')

/* CODIGO DECLARATIVO */
console.time('Declarativo');
console.log(numeros.map(num => num * num))
console.timeEnd('Declarativo');