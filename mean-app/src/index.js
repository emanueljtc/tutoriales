const cors = require('cors');
const express = require('express');
const app = express();
const indexRoutes = require("./routes/index");
const tasksRoutes = require("./routes/tasks");

// configuraciones
app.set('port', process.env.PORT || 3000)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas 
app.use(indexRoutes);
app.use('/api', tasksRoutes);



app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});