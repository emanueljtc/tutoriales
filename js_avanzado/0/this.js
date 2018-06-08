;
((c) => {
    //1. Asignacion Implicita: 
    //Caso 1
    //this esta siendo invocado dentro de un metodo
    //this, hace referencia al objeto que contiene  el metodo donde se invoca
    c('******* Asignacion de This implicita *******')

    let yo = {
        nombre: 'Emanuel Torres',
        edad: 27,
        saludar: function() {
            c(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
        }
    }

    yo.saludar()

    // Caso 2
    // existe un funcion que recibe un objeto como parametro dentro de ella se le asigna  un metodo al objeto
    // this en este caso hace referencia al objeto que se le añade el metodo

    let preparandoSaludo = function(obj) {
        obj.saludar = function() {
            c(`Hola mi nombre es ${this.nombre}`)
        }
    }

    const jhon = {
            nombre: 'Jhonatan',
            edad: 28
        },
        alvaro = {
            nombre: 'Alvaro',
            edad: 38
        }
    preparandoSaludo(jhon)
    preparandoSaludo(alvaro)

    jhon.saludar()
    alvaro.saludar()
        // Caso 3
        // una funcion que retorna un objeto, que contiene un metodo que invoca el this
    let Humano = function(nombre, edad, perro) {
        return {
            nombre: nombre,
            edad: edad,
            saludar: function() {
                c(`Hola mi nombre es ${this.nombre}`)
            },
            perro: {
                nombre: perro,
                saludar: function() {
                    c(`${this.nombre} guauu guaaa!!!!`)
                }
            }
        }
    }

    const ema = Humano('Emanuel', 27, 'Jetter');
    ema.saludar()
    ema.perro.saludar()
})(console.log);

((c) => {
    // 2. Asignación explícita
    // Desde ES5 cuando deseamos explicitamente referenciar this contamos con 3 metodos
    // call, apply y bind
    c('*******Asignacion de this Explícita*******')
    const nombrar = function(f1, f2, f3) {
        c(`${this.nombre} es el lenguaje Frontend de la Web y tiene librerias y frameworks
        muy poderosos como: ${f1}, ${f2}, ${f3}`)
    }

    const lenguaje = {
        nombre: 'Javascript',
        version: 6
    }
    let frameworks = ['Angular', 'React', 'Vue.js']
        //call: permite definir a que va a hacer referencia this, en su primer parametro, 
        //los parametros siguientes son los q recibe la función
    nombrar.call(lenguaje, frameworks[0], frameworks[1], frameworks[2])
        //apply: este nos permite referenciar this en el primer parametro,
        //pero este nos permite pasar un array, como los parametros de la funcion
    nombrar.apply(lenguaje, frameworks)
    let frameworksJS = nombrar.bind(lenguaje, frameworks[0], frameworks[1], frameworks[2])
    frameworksJS()
})(console.log);

((c) => {
    //3. Asignacion con new
    //cuando invocamos this en un constructor, este hace
    // referencia al objeto que se esta instanciando
    c('*********Asignación con new*********')

    let Framework = function(nombre, url, lenguaje) {
        this.nombre = nombre
        this.url = url
        this.lenguaje = lenguaje
    }

    const react = new Framework('React', 'https://facebook.github.io/react/', 'JavaScript'),
        vue = Object.create(Framework)
    vue.nombre = 'Vue.js'
    c(react, vue)
})(console.log);
((c) => {
    //4. Asignación Global
    // Uno de los grandes errores con this, es que cuando no se tiene
    // una referencia al objeto, que representa this, este hace referencia
    // al objeto global:
    //window en los navegadores
    // global en Node.js
    c('*********Asignacion Global**********')
    const dimeUnFramework = function() {
        c(this.nombre)
    }
    dimeUnFramework()
        //variable global
        //nombre = 'angular'
    window.nombre = 'Angular'
    dimeUnFramework()
})(console.log);
((c) => {
    // 5. Arrow Functions
    c('*****Arrow Functions y el problema de this*****')

    const lenguaje = {
        name: 'Javascript',
        version: 6,
        frameworks: [
            { name: 'Angular', url: 'https://angular.io/' },
            { name: 'React', url: 'https://facebook.github.io/react' },
            { name: 'Vue.js', url: 'https://vuejs.org/' }
        ],
        nombrar: function() {
            // El problema de this en javascript
            /* this.frameworks.forEach(function(fw) {
                c(`${fw.name} es un framework de ${this.name}`)
            }) */
            // Solucion de ES3
            /*  let that = this
             this.frameworks.forEach(function(fw) {
                     if (fw.name === 'React') {
                         c(`${fw.name} es una libreria de ${that.name}`)
                     }
                     if (fw.name != 'React') {
                         c(`${fw.name} es un framework de ${that.name}`)
                     }
                 }) */
            //Solucion ES5
            /*     this.frameworks.forEach(function(fw) {
                    if (fw.name === 'React') {
                        c(`${fw.name} es una libreria de ${this.name}`)
                    }
                    if (fw.name != 'React') {
                        c(`${fw.name} es un framework de ${this.name}`)
                    }
                }.bind(this)) */
            // Solucion ES6
            this.frameworks.forEach(fw => {
                if (fw.name === 'React') {
                    c(`${fw.name} es una libreria de ${this.name}`)
                }
                if (fw.name != 'React') {
                    c(`${fw.name} es un framework de ${this.name}`)
                }
            })
        }
    }
    lenguaje.nombrar()
})(console.log);