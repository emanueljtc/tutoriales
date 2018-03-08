const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('hola mundo');
});

module.exports = router;