import express from 'express'

const routes = express.Router()

routes
    .get('/', (req, res, next) => {
        res.render('index', {
            title: 'Titulo de mi Template Home',
            description: 'template home'
        })
    })
    .get('/about', (req, res, next) => {
        res.render('index', {
            title: 'Titulo de mi Template about',
            description: 'template about'
        })
    })

export default routes