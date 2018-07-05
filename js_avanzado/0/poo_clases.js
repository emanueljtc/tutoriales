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
    let privado = new WeakMap()
    class Telefono {
        constructor(marca, modelo, numero) {
            this.marca = marca
            this.modelo = modelo
                // this._numero = numero
            privado.set(this, { _numero: numero })
            this.puedoLlamar = true
        }
        set numero(numero) {
            //this._numero = numero
            privado.get(this)._numero = numero
        }

        get numero() {
            // return c(this._numero)
            return c(privado.get(this)._numero)
        }
        llamar() {
            c('Riiing Riiing!!!!')
        }
        verInfo() {
            return c(
                `${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo Llamar: ${this.puedoLlamar}\n`
            )
        }
        static queEs() {
            c('el telefono es un dispositivo de telecomunicacion diseñado para transmitir señales acusticas por medio de señales eléctricas')
        }
    }

    Telefono.queEs()
    let tel = new Telefono('Panasonic', 'KX-TS550', '04123456727')
    tel.llamar()
    tel.numero
    tel.numero = '04165615973'
    tel.numero
    tel.verInfo()

    //Mixins
    //En los lenguajes POO, un mixin es una clase que ofrece cierta
    // funcionalidad para ser heredada por una subclase, pero que no esta
    // ideada para ser autonona
    // es una especie de clase abstracta
    const Operadora = Superclass => class extends Superclass {
        asignarOperadora(operadora) {
            return c(`la operadora asignada es ${operadora}`)
        }
    }

    const Red = Superclass => class extends Superclass {
        asignarRed(red) {
            return c(`la red de datos asignada es ${red}`)
        }
    }
    class Celular extends Operadora(Red(Telefono)) {
        constructor(marca, modelo, numero) {
            super(marca, modelo, numero)
            this.tengoCables = false
        }
        vibrar() {
            c('Usted Recibio un Zumbido Vbrrrr Vbrrrrr!!!')
        }
        verInfo() {
            return c(
                `${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo Llamar: ${this.puedoLlamar}\n`,
                `\tTengo Cables: ${this.tengoCables}\n`
            )
        }
    }
    let cel = new Celular('Nokia', '5120', '04124634911')
    cel.verInfo()
    cel.llamar()
    cel.vibrar()
    cel.numero
    cel.numero = '04262442085'
    cel.numero
    cel.asignarRed('2g')
    cel.asignarOperadora('movilnet')

    class Smartphone extends Celular {
        constructor(marca, modelo, numero) {
            super(marca, modelo, numero)
            this.tengoInternet = true
        }
        conectar() {
            c('Conectado a Internet!!!')
        }
    }
    let sm = new Smartphone('Motorola', 'G4', '0412675456')
    sm.verInfo()
    sm.llamar()
    sm.vibrar()
    sm.conectar()
    sm.numero
    sm.asignarRed('4g')
    sm.asignarOperadora('Digitel')
})(console.log)
((c) => {
    c('console log')
})(console.log)