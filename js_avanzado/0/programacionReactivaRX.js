;
((c) => {
    c('**********Programación Reactiva con RxJS**********')

    const createUser = () => {
        let id = Math.floor(Math.random() * 10000)
        users.push(id)
        c(`Usuario ${id} creado`)
    }

    const getUsers = () => {
        c('Obteniendo Usuarios')
        c(`Usuarios: ${users}\nTotal de Usuarios: ${users.length}`)
    }

    let users = [],
        pub = Rx.Observable.create(user => {
            setInterval(() => {
                c('Enviando información...')
                user.next(getUsers())
                user.next(getUsers())
                user.next(getUsers())
            }, 2500)
        })

    pub.subscribe(() => createUser())
})(console.log);