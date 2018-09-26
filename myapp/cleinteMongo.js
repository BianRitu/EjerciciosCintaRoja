console.log("soy el cleinte de MOngo");
const mongoose = require('mongoose');
const url = "mongodb://<dbuser>:<dbpassword>@ds233500.mlab.com:33500/data_ritu";


/*const express = require('express');
const bodyParser = require('body-parser');
const cleinteMongo = require('./cleinteMongo.js');*/


mongoose.connect(url,{userNewUrlParser: true}, ()=>{
    console.log("Conexion exitosa con la base de datos");
});

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const alumnoSchema = Schema({
    alumno: ObjectId, //ObjectId hará referencia al modelo llamado Curso
    nombre : String,
    edad: Number,
    sexo: String,
    curso: {
        type: ObjectId,
        ref: 'Curso'
    }
});

const cursoSchema = Schema ({
    curso : ObjectId,
    nombre: String,
    description: String,
    precio: Number

});


const Alumno = mongoose.model('Alumno', alumnoSchema);
const Curso = mongoose.model('Curso', cursoSchema);

module.exports = {Alumno, Curso};


