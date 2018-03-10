const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mevn-stack').then(() => console.log('base de datos conectada'));
//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(bodyParser.json());


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});