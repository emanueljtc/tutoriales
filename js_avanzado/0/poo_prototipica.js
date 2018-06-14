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
    //POO con Funciones Constructoras
    c('**********POO con Funciones Constructoras**********')

    function Carrito(articulo) {
        this._articulo = articulo
        this._carrito = {}

        this.agregar = (articulo, cantidad) => this._carrito[articulo] = cantidad

        this.quitar = articulo => delete this._carrito[articulo]

        this._iterable = () => {
            let message = 'Carrito: \n'
            for (let key in this._carrito)
                message += `\t${this. _carrito[key]} ${key}\n`

            return message
        }

        this.ver = (articulo = 'todos') => {
            return (articulo === 'todos')
                //? this._carrito
                ?
                this._iterable() :
                (this._carrito.hasOwnProperty(articulo)) ?
                `${this._carrito[articulo]} ${articulo}` :
                `El articulo ${articulo} no existe en el Carrito`
        }
    }

    const comics = new Carrito('Comics')
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
    c(comics.ver())
    c('**********Patrón de Diseño: Factoria o Fábrica**********')
        /*
          Esta forma de codificar las funciones como clases se conoce como Factory Pattern o Template functions
          
          Un problema importante que tiene este tipo de estructura, es que cuando creamos un nuevo objeto a partir de estas funciones, se reservará espacio en memoria para toda las funciones
          
          Con un objeto creado no supone mucha desventaja, pero con varios objetos sí
        */
    const libros = new Carrito("Libros"),
        musica = new Carrito("Música"),
        juegos = new Carrito("Juegos"),
        peliculas = new Carrito("Peliculas"),
        series = new Carrito("Series")

    //Esto supone que los métodos agregar, quitar ver, e _iterable están siendo replicados en memoria, lo que es ineficiente
    c(
        libros, '\n',
        musica, '\n',
        juegos, '\n',
        peliculas, '\n',
        series
    )

    //Para solucionar esto podemos hacer uso del objeto Prototype que permite que objetos de la misma clase compartan métodos y no sean replicados en memoria de manera ineficiente

})(console.log);
((c) => {
    //POO con Prototype
    c('*****POO con Prototype*****')

    function Carrito(articulo) {
        this._articulo = articulo,
            this._carrito = {}
    }

    Carrito.prototype = {
        agregar: function(articulo, cantidad) {
            this._carrito[articulo] = cantidad
        },
        quitar: function(articulo) {
            delete this._carrito[articulo]
        },
        _iterable: function() {
            let message = 'Carrito: \n'
            for (let key in this._carrito)
                message += `\t${this._carrito[key]} ${key}\n`

            return message
        },
        ver: function(articulo = 'todos') {
            return (articulo === 'todos') ?
                this._iterable() :
                (this._carrito.hasOwnProperty(articulo)) ?
                `${this._carrito[articulo]} ${articulo}` :
                `El articulo ${articulo} no existe en el Carrito`
        }
    }

    /* Carrito.prototype.agregar = function () {}
    Carrito.prototype.quitar = function () {}
    Carrito.prototype.ver = function () {} */
    const comics = new Carrito('Comics')
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
    c(comics.ver())
    const libros = new Carrito("Libros"),
        musica = new Carrito("Música"),
        juegos = new Carrito("Juegos"),
        peliculas = new Carrito("Peliculas"),
        series = new Carrito("Series")
    c(
        libros, '\n',
        musica, '\n',
        juegos, '\n',
        peliculas, '\n',
        series
    )
    libros.agregar('Santa Biblia', 1)
    libros.ver()
})(console.log);

((c) => {
    //Herencia Prototipica
    // Las funciones Constructoras pueden heredar directamente de 
    // constructores gracias al Prototype
    c('****** Herencia Prototipica******')

    function Telefono() {
        this.puedoLlamar = true
    }
    Telefono.prototype = {
        llamar: function() {
            c('Riiing Riiing!!!!')
        }
    }

    function Celular() {
        this.tengoCables = false
    }
    Celular.prototype = new Telefono()
    Celular.prototype.vibrar = function() {
        c('Usted Recibio un Zumbido Vbrrrr Vbrrrrr!!!')
    }

    function Smartphone() {
        this.tengoInternet = true
    }
    Smartphone.prototype = new Celular()
    Smartphone.prototype.conectar = function() {
        c('Conectado a Internet!!!')
    }

    let g4 = new Smartphone()
    c(g4)
    g4.llamar()
    c(g4.puedoLlamar)
    g4.vibrar()
    c(g4.tengoCables)
    g4.conectar()
    c(g4.tengoInternet)
})(console.log)