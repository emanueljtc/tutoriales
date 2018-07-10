;
((c) => {
    c('**** Patron Observador ****')

    class Click {
        constructor() {
            this.handlers = []
        }
        subscribe(fn) {
            this.handlers.push(fn)
        }

        unsubscribe(fn) {
            this.handlers = this.handlers.filter(item => (item !== fn) ? item : false)
        }

        fire(msg) {
            this.handlers.forEach(item => item(msg))
        }
    }

    class Log {
        constructor() {
            this.log = ''
        }

        add(msg) {
            this.log += `${msg}\n`
        }

        show() {
            c(this.log)
            this.log = ''
        }
    }

    const click = new Click(),
        clickHandler = item => log.add(`dispara: ${item}`),
        log = new Log()
    click.subscribe(clickHandler)
    click.fire('seguidor 1')
    click.unsubscribe(clickHandler)
    click.fire('seguidor 2')
    click.fire('seguidor 3')


    log.show()
})(console.log);

((c) => {
    //Pub
    class Player {
        constructor() {
            this.players = []
        }

        add(play) {
            this.players.push(play)
        }

        notify(obj) {
            this.players.forEach(play => play(obj))
        }
    }
    //Sub
    class Fight {
        constructor(fighter1, fighter2) {
            this.player = new Player()
            this.fighter1 = fighter1
            this.fighter2 = fighter2
            this.round = 1
        }

        readyGo() {
            let match = {}

            if (Math.floor((Math.random() * 2) + 1) === 1) {
                match = {
                    winner: this.fighter1,
                    looser: this.fighter2
                }
            } else {
                match = {
                    winner: this.fighter2,
                    looser: this.fighter1
                }
            }

            match.round = this.round
            this.round++

                this.player.notify(match)
        }
    }

    const kof = new Fight('Kyo', 'Iori')
    kof.player.add(obj => c(`Ronda: ${obj.round} \n Ganador: ${obj.winner} \n Perdedor: ${obj.looser}`))
    kof.readyGo()
    kof.readyGo()
    kof.readyGo()

})(console.log)