((c) => {
    //POO con Clases
    /* Con la llegada de ES6 la definicion de una funcion ha cambiado y nos
    ofrece la posibilidad de crear clases 
    
    ES6 aporta un azucar sintactico para declarar un clase como en la mayoria
    de los lenguajes POO, pero por debajo sigue siendo una funcion prototipal
    
    El metodo especial constuctor recibe los parametros que anteriormente recibia la 
    funcion constructora
    
    Las Clases ES6 sustituyen a las funciones prototipales de ES5

    Las declaraciones de clases no siguen las reglas de hoisting como si lo hacen
    las declaraciones de funciones, esto quiere decir que solo existen tras ser declaradas
    
    De forma implicita una clase se comporta como una constante, no siendo posible redeclararla
    mas adelante en un mismo ambito o scope

    los metodos no se declaran de forma explicita como var, let o const

    Al tratarse de un constructor y no una funcion, no hay una salida de datos
    explicita con return

    Encontramos nuevas palabras reservadas: constructor, super, get, set, static
    */
    c('***** POO con Clases *****')

    class Carrito {

        constructor(articulo) {
            this._articulo = articulo,
                this._carrito = {}
        }
        agregar(articulo, cantidad) {
            this._carrito[articulo] = cantidad
        }
        quitar(articulo) {
            delete this._carrito[articulo]
        }
        _iterable() {
            let message = 'Carrito: \n'
            for (let key in this._carrito)
                message += `\t${this._carrito[key]} ${key}\n`

            return message
        }
        ver(articulo = 'todos') {
            return (articulo === 'todos') ?
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
    c(comics.ver('Flash int Paradox'))
    c(comics.ver('Civil War'))
    comics.quitar('Civi War')
    c(comics.ver('Civi War'))
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
    c('****** Herencia, Polimorfismo******')

    class Telefono {
        constructor(marca, modelo, numero) {
            this.marca = marca
            this.modelo = modelo
            this._numero = numero
            this.puedoLlamar = true
        }
        llamar() {
            c('Riiing Riiing!!!!')
        }
    }

    class Celular extends Telefono {
        constructor(marca, modelo, numero) {
            super(marca, modelo, numero)
            this.tengoCables = false
        }
        vibrar() {
            c('Usted Recibio un Zumbido Vbrrrr Vbrrrrr!!!')
        }
    }


    class Smartphone extends Celular {
        constructor() {
            super(marca, modelo, numero)
            this.tengoInternet = true
        }
        conectar() {
            c('Conectado a Internet!!!')
        }
    }
})(console.log)