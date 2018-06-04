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
})(console.log);