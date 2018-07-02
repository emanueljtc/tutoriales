((c, d, ajax, j) => {
    const movies = d.querySelector('#movies')

    // c('Json.stringify()', {}, j.stringify({}), 'Json.Parse', '{value: 2, result:2}', j.parse('{"value": "2", "result":"2"}'))
    ajax.open('GET', './assets/movies.json', true)
    ajax.addEventListener('load', e => {
        let moviesInfo,
            moviesTemplate = ''
        if (ajax.status >= 200 && ajax < 400) {
            moviesInfo = j.parse(ajax.responseText)
            c(moviesInfo)

        } else {

        }
    })
    ajax.send()
})(console.log, document, new XMLHttpRequest(), JSON);