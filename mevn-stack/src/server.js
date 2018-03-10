const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mevn-stack').then(() => console.log('base de datos conectada'));
//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes - API



//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});