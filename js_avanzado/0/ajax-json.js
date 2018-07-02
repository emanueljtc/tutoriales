((c, d, ajax, j) => {
    const movies = d.querySelector('#movies')

    // c('Json.stringify()', {}, j.stringify({}), 'Json.Parse', '{value: 2, result:2}', j.parse('{"value": "2", "result":"2"}'))
    ajax.open('GET', './assets/movies.json', true)
    ajax.addEventListener('load', e => {
        let moviesInfo,
            moviesTemplate = ''
        if (ajax.status >= 200 && ajax.status < 400) {
            moviesInfo = j.parse(ajax.responseText)
            c(moviesInfo, moviesInfo['movies'])

            moviesInfo['movies'].forEach(movie => {
                moviesTemplate += `
                 <article>
                    <h2>${movie.title}</h2>
                    <p><b>${movie.year}</b></p>
                    <p><i>${movie.genres}</i></p>
                    <img src="${movie.poster}">
                 </article>
                `
            });
        } else {
            moviesTemplate = `<b>Servidor NO responde. error Nº ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
        }
        movies.innerHTML = moviesTemplate
    })
    ajax.send()
})(console.log, document, new XMLHttpRequest(), JSON);