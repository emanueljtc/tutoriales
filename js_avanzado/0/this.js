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