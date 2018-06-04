;
((c, d) => {
    // Formas de Crear un Objeto

    // 1. Objeto Literal
    c('******Objeto Literal*****')

    const perro = {
        nombre: 'Jetter',
        edad: '4',
        raza: 'Mestizo',
        genero: 'Macho',
        esterilizado: false,
        ladrar() {
            c('guauu guauuu!')
        },
        comer(comida = 'perrarina') {
            c(`${this.nombre} come ${comida}`)
        },
        aparecer(imagen) {
            d.write(`<img src="${imagen}">`)
        }
    }
    c(
        perro,
        perro.nombre,
        perro.edad,
        perro.raza,
        perro.genero,
        perro.esterilizado
    )

    perro.ladrar()
    perro.comer()
    perro.comer('carne')
    perro.aparecer('https://www.mundoperros.es/wp-content/uploads/2017/10/perro-adulto-830x565.jpg')

    // 2- Prototipo Object
    c('*****Prototipo Object*****')
    const perro2 = new Object()
    perro2.nombre = 'Fadul'
    perro2.edad = 2
    perro2.raza = 'Damalta'
    perro2.genero = 'hembra'
    perro2.esterilizado = false
    perro2.ladrar = () => c('guauuu guauuu')
    perro2.comer = (comida = 'perrarina') => c(`${perro2.nombre} come ${comida}`)
    perro2.aparecer = imagen => d.write(`<img src="${imagen}">`)

    c(
        perro2,
        perro2.nombre,
        perro2.edad,
        perro2.raza,
        perro2.genero,
        perro2.esterilizado
    )

    perro2.ladrar()
    perro2.comer()
    perro2.aparecer('https://www.mundoperros.es/wp-content/uploads/2017/10/perro-adulto-830x565.jpg')

    // 3- Función Constructora
    c('***** FUNCION CONSTRUCTORA  *****')

    function Perro(nombre, edad, raza, genero, esterilizado) {
        //atributos
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
        this.genero = genero
        this.esterilizado = esterilizado

        //metodos
        this.ladrar = () => c('guaooo guaoo')
        this.comer = (comida) => c(`${this.nombre} come ${comida}`)
        this.aparecer = (imagen) => d.write(`<img  src="${imagen}"`)
    }

    const perro3 = new Perro('Exploiter', 2, 'Pitbull', 'Macho', false)
    c(
        perro3,
        perro3.nombre,
        perro3.edad,
        perro3.raza,
        perro3.genero,
        perro3.esterilizado
    )
    perro3.ladrar()
    perro3.comer('puchero')

    // 4- Clases apartir de ES6
    c('***** Clases apartir de ES6 *****')

    class Dog {
        constructor(nombre, edad, raza, genero, esterilizado) {
            //atributos
            this.nombre = nombre
            this.edad = edad
            this.raza = raza
            this.genero = genero
            this.esterilizado = esterilizado
        }

        //metodos
        ladrar() {
            c('guaooo guaoo')
        }

        comer(comida) {
            c(`${this.nombre} come ${comida}`)
        }

        aparecer(imagen) {
            d.write(`<img  src="${imagen}"`)
        }
    }
    const perro4 = new Perro('Coquito', 2, 'Pitbull', 'Macho', false)
    c(
        perro4,
        perro4.nombre,
        perro4.edad,
        perro4.raza,
        perro4.genero,
        perro4.esterilizado
    )
    perro4.ladrar()
    perro4.comer('puchero')
})(console.log, document);