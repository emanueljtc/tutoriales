const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-tasks';
mongoose.conect(URI)
    .then(db => console.log('DB IS CONNECT'))
    .catch(err => console.log(err));

module.exports = mongoose;