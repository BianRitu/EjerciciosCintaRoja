const mongoose = require('mongoose');
const url = 'mongodb://bian_admin:root123@ds111993.mlab.com:11993/supermercado';

mongoose.connect(url,{useNewUrlParser: true},
() => {
    console.log("conectada a DB");
});

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

/*const alumnoSchema = Schema({
    alumno: ObjectId,
    nombre: String,
    apellidos: String,
    curso: {
        type:ObjectId,
        ref: 'Curso'
    }
});*/

const articleSchema = Schema({
    nombre : ObjectId,
    precio : Number, 
    existencia : Number
})

/*const cursoSchema = Schema({
    curso :ObjectId,
    nombre: String,
    descripcion: String,
    precio: Number
});*/



const reciboSchema = Schema({
    subtotal : Number,
    IVA : Number,
    total : Number, 
    articulos : Number
});

//const Alumno = mongoose.model('Alumno', alumnoSchema);
//const Curso = mongoose.model('Curso', cursoSchema);

const Article = mongoose.model('Article', articleSchema);
const Recibo = mongoose.model('Recibo', reciboSchema);

module.exports = {Article, Recibo};