;
((c, d, ajax) => {
    const respuestaFetch = d.querySelector('#fetch')
    let tpl = ''

    fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(albums => {
            c(albums)
            albums.forEach(el => tpl += `<a href="${el.url}"><img src="${el.thumbnailUrl}"></a>`)
            respuestaFetch.innerHTML = tpl
        })
        .catch(err => c(err.message))
})(console.log, document, XMLHttpRequest);
((c, d, ajax) => {
    c('Subir Imagen asincronamente')
    const img = d.querySelector('#fetch-img')

    fetch('./assets/img/js-logo.png')
        .then(response => response.blob())
        .then(blob => {
            c(blob)
            let objectURl = URL.createObjectURL(blob)
            img.src = objectURl
            img.style.maxWidth = '200px'
        })
        .catch(err => c(err.message))
})(console.log, document, XMLHttpRequest)