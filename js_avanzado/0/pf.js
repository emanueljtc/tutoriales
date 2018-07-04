;
((c) => {
    /* 
       Reduce, Map y filter - metodos funcionales implementados en ES5

       reduce
         reune resultados 
         Se usa como acumulador de resultados
         Espera una expresion que cuente con un parametro acumulador y el elemento
         en el que se encuentra el iterador
         lo que devuelve reduce es el valor acumulado
         se comporta parecido un GROUP BY de SQL
       
       map 
        Transforma datos
        Recorre un array de elementos y transforma sus datos por medio de una funcion
        Recibe un expresion como parametro que realiza la transformacion
       
       filter
           Elimina datos no deseados
           espera una expresion que indique si el elemento en el que se encuentra 
           es deseado o no ideal para hacer busquedas en un array
           se comporta parecido a un 'WHERE' de SQL

    */
    c('*****Metodos Funcionales ES5****')
    c('metodo reduce')
    c([1, 2, 3, 4, 5].reduce((acumulado, elemento) => acumulado + elemento))
    c([1, 2, 3, 4, 5].reduce((acumulado, elemento) => acumulado * elemento))
    c('metodo map')
    c([1, 2, 3, 4, 5].map(elemento => elemento * elemento))
    c([1, 2, 3, 4, 5].map(elemento => -elemento))
    c('metodo filter')
    c([1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 0))
    c([1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 1))
})(console.log);
((c) => {
    c('Metodos Funcionales con Vanilla JS Reducir, Transformar y Filtrar ')
    const reducir = (vector, funcion, inicial) => {
        return (function recursiva(vector, funcion, indice, acumulado) {
            return (indice > vector.length - 1) ?
                acumulado :
                recursiva(vector, funcion, indice + 1, funcion(acumulado, vector[indice], indice, vector))
        })(vector, funcion, 0, inicial)
    }

    const transformar = (vector, funcion) => {
        return reducir(vector, (acumulado, elemento, indice, vector) => {
            return acumulado.concat(funcion(elemento, indice, vector))
        }, [])
    }
    const filtrar = (vector, funcion) => {
        return reducir(vector, (acumulado, elemento, indice) => {
            return funcion(elemento, indice, vector) ?
                acumulado.concat(elemento) :
                acumulado

        }, [])
    }
    c('reducir')
    c(reducir([1, 2, 3, 4, 5], (acumulado, elemento) => acumulado + elemento, 0))
    c(reducir([1, 2, 3, 4, 5], (acumulado, elemento) => acumulado * elemento, 1))
    c('transformar')
    c(transformar([1, 2, 3, 4, 5], elemento => -elemento))
    c(transformar([1, 2, 3, 4, 5], elemento => elemento * elemento))
    c('filtrar')
    c(filtrar([1, 2, 3, 4, 5], elemento => elemento % 2 === 0))
    c(filtrar([1, 2, 3, 4, 5], elemento => elemento % 2 === 1))

})(console.log);
((c) => {
    c('*****Programacion Funcional*****')
        //Funcion recursiva para obtener el factorial de un numero
        //(n+! = sumatoria de todos los numeros naturales desde 1 hasta n)

    //Funcion recursiva para obtener la suma factorial de un numero
    //(n+! = sumatoria de todos los numeros naturales desde 1 hasta n)

    //funcion recursiva para calcular la potencia de un numero b elevado al exponente e
    //(b elevado a e = se obtine como el producto de b con sigo e veces)

    //funcion para determinar si un numero es par o impar sin el uso del operador modulo

    //Funcion recursiva que sume los digitos de un nùmero
    //pe 125 = 1 + 2 + 5 = 8

    //Funcion recursiva para determinar si un elemento esta contenido dentro de un vector

})(console.log)