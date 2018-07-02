((c, d, ajax, j) => {
    const startwars = d.querySelector('#startwars')
    pagination = d.querySelector('#pagination')

    function carga(startList) {
        let startwarsInfo,
            startwarsTemplate = ''
        if (ajax.status >= 200 && ajax.status < 400) {
            startwarsInfo = j.parse(ajax.responseText)
            c(startwarsInfo)
            startwarsTemplate += `
             <h3>Personajes de StartWars encontrados: ${startwarsInfo.count}</h3>
             <ol start="${startList}">
            `
            startwarsInfo.results.forEach(people => startwarsTemplate += `<li>${people.name}</li>`)
            startwarsTemplate += `
            </ol>
            <nav id="pagination">
                <a href="${startwarsInfo.previous}" id="previous">atras</a>
                <a href="${startwarsInfo.next}" id="next">siguiente</a>
            </nav>
            `
        } else {
            startwarsTemplate = `<b>Servidor NO responde. error Nº ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
        }

        startwars.innerHTML = startwarsTemplate
    }
    d.addEventListener('DOMContentLoaded', e => {
        ajax.open('GET', 'https://swapi.co/api/people/', true)
        ajax.addEventListener('load', carga)
        ajax.send()
    })

    d.addEventListener('click', e => {
        e.preventDefault()
        c(e)
        if (e.target.localName === 'a' && e.target.href.indexOf('null') === -1) {
            let startList = (e.target.search.slice(-1) - 1) * 10 + 1
            ajax.open('GET', e.target.href || 'https://swapi.co/api/people/', true)
            ajax.addEventListener('load', () => carga(startList))
            ajax.send()
        }
    })
})(console.log, document, new XMLHttpRequest(), JSON);