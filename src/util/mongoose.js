const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fastifyCrud')
.then(() => {
    console.log('mongoose esta conectado');
}).catch((err) => {
    console.log('hay un problema y la BD no esta conectado');
});