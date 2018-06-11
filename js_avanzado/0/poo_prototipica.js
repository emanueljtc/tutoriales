;
((c) => {
    //Anidacion de Objetos
    //Un objeto es una coleccion de variables y funciones agrupadas
    // de manera estructural
    //A las variables definidas dentro de un obj se les llama atributos
    //A las funciones defininidas dentro de un obj se les llama metodos

    // Entonces un Obj puede tener propiedades y estas propiedades tener en
    //su interior màs propiedades que incluso sean objetos

    //Esto se representa en forma de arbol y podemos acceder a sus propiedades
    // con: 
    //1) Notacion de punto
    //2) Notacion de array
    //3) Notacion Mixta
    c('*****Anidacion de Objetos*****')
    const curso = {
        titulo: 'Curso de Javascript Avanzado: Paradigmas de Programacion',
        docente: {
            nombre: 'Jonathan Mircha',
            edad: 33,
            nacionalidad: 'Mexicana',
            contacto: {
                email: 'jonamircha@gmail.com',
                url: 'http://jhonmircha.com',
                twitter: '@jonmircha',
                ubicacion: 'CDMX'
            }
        },
        costo: 40,
        url: 'http:ed.team/cursos/javascript-avanzado',
        online: true,
        plataforma: {
            nombre: 'EDteam',
            url: 'https://ed.team',
            oficinas: ['Lima', 'Bogota', 'Namekusei']
        }
    }

    c(curso.docente.nombre)
    c(curso['docente'].contacto['url'])
    c(curso['plataforma']['nombre'])
    c(curso.plataforma['oficinas'][2])
})(console.log);
((c) => {
    //POO con Closures
    c('*****POO con Closures*****')

    function Carrito(articulo) {
        let _articulo = articulo,
            _carrito = {}

        function agregar(articulo, cantidad) {
            _carrito[articulo] = cantidad
        }

        function quitar(articulo) {
            delete _carrito[articulo]
        }

        function _iterable() {
            let message = 'Carrito: \n'
            for (let key in _carrito)
                message += `\t${_carrito[key]} ${key}\n`

            return message
        }

        function ver(articulo = 'todos') {
            return (articulo === 'todos') ?
                _iterable() :
                (_carrito.hasOwnProperty(articulo)) ?
                `${_carrito[articulo]} ${articulo}` :
                `El articulo ${articulo} NO existe en el Carrito`
        }

        return {
            agregar: agregar,
            quitar: quitar,
            ver: ver
        }
    }

    const comics = Carrito('Comics')
    c(comics)
    comics.agregar('Flash Point Paradox', 2)
    comics.agregar('The Return of the Dark Knight', 3)
    comics.agregar('Civil War', 3)
    comics.agregar('Final Crisis', 1)
    c(comics.ver())
    c(comics.ver('Flash Point Paradox'))
    c(comics.ver('Civil War'))
    comics.quitar('Civil War')
    c(comics.ver('Civil War'))

})(console.log);
((c) => {
    //POO con Constructor
    c('*****POO con Constructor*****')

    function Carrito(articulo) {
        let _articulo = articulo,
            _carrito = {}

        function agregar(articulo, cantidad) {
            _carrito[articulo] = cantidad
        }

        function quitar(articulo) {
            delete _carrito[articulo]
        }

        function _iterable() {
            let message = 'Carrito: \n'
            for (let key in _carrito)
                message += `\t${_carrito[key]} ${key}\n`

            return message
        }

        function ver(articulo = 'todos') {
            return (articulo === 'todos') ?
                _iterable() :
                (_carrito.hasOwnProperty(articulo)) ?
                `${_carrito[articulo]} ${articulo}` :
                `El articulo ${articulo} no existe en el Carrito`
        }

        return {
            agregar: agregar,
            quitar: quitar,
            ver: ver
        }
    }

    const comics = Carrito('Comics')
    c(comics)
    comics.agregar('Flash Point Paradox', 2)
    comics.agregar('The Return of the Dark Knight', 3)
    comics.agregar('Civil War', 3)
    comics.agregar('Final Crisis', 1)
    c(comics.ver())
    c(comics.ver('Flash Point Paradox'))
    c(comics.ver('Civil War'))
    comics.quitar('Civil War')
    c(comics.ver('Civil War'))

})(console.log);