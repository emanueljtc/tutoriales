const router = require('express').Router();

router.get('/tasks', (req, res, next) => {
    res.send('API AQUI');
});

module.exports = router;