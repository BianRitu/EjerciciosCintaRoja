const mongoose = require('mongoose');
const url = 'mongodb://bian_admin:root123@ds111993.mlab.com:11993/supermercado';

mongoose.connect(
    url,
    { userNewUrlParser: true},
    () => {
        console.log("Conection has been successful!");
    }
);

