((c) => {
    c('*****Programacion Reactiva****')
    const createUser = () => {
        let id = Math.floor(Math.random() * 10000)
        users.push(id)
        c(`Usuario ${id} creado`)
    }

    const getUsers = () => {

        c('obteniendo Usuarios')
        c(`Usuarios: ${users}\n total de usuarios: ${users.length}`)
    }

    let users = []

    setInterval(() => {
        c('enviando informacion')
        createUser()
        getUsers()
    }, 5000)
    setInterval(() => {
        c('enviando informacion')
        createUser()
        getUsers()
    }, 2500)
    setInterval(() => {
        c('enviando informacion')
        createUser()
        getUsers()
    }, 7500)
})(console.log)