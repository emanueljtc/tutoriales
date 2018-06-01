let contador = (() => {
    // Por convencion, a las variables privadas se les antepone un '_' 
    let _contador = 0

    function incrementar() {
        return _contador++
    }

    function decrementar() {
        return _contador--
    }

    function valor() {
        return _contador
    }

    return {
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }
})();

console.log(contador.valor())
contador.incrementar()
contador.incrementar()
console.log(contador.valor())
contador.decrementar()
console.log(contador.valor())