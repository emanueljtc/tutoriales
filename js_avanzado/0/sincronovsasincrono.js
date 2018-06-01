const fs = require('fs'),
    file = './assets/archivo.txt'

/*Codigo Sincrono */
/* console.time('Sincrono')
console.log('\nAbriendo Archivo...')
let content
try {
    content = fs.readFileSync(file, 'utf8')
    console.log(content)
} catch (err) {
    console.log(err.message)
}
console.log('Haciendo Otra Cosa')
console.log('Haciendo Otra Cosa más')
console.timeEnd('Sincrono') */

/*Codigo Asincrono */

console.time('Asincrono')
console.log('\nAbriendo Archivo...')
let content = fs.readFile(file, 'utf8', (err, content) => (err) ? console.log(err.message) : console.log(content))
console.log('Haciendo Otra Cosa')
console.log('Haciendo Otra Cosita más ...')
console.timeEnd('Asincrono')