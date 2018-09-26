
/*
const express = require('express');
const app = express();

app.get('/',(request, response) => {
    response.send("Hello");
});

app.listen(3000, () => console.log('Listening on port 3000'));
/*
/*
////////////////////////////////////////////////////////////MASAVI CODE

app.get("/", (req, res) => res.send("La API Funciona!!!"));

app.post("/api/v1/mensajes/", (request, response) => {
    response.status(201).send({mensaje: "Haz hecho una petición POST"});
});

// Request Params
app.get("/api/v1/autores/:id/:numero/:saludo/", (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

// Request Query Params
app.get("/api/v1/refrigeradores", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.post("/api/v1/autores/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000...");
});


*/

//
//Si no encuentra el puerto , va a tomar el 3000
// use port 3000 unless there exists a preconfigured port
/*
var port = process.env.port || 3000;

app.listen(port);
*/
//instalar de manera global
//npm install -g nodemon  





const express = require('express');
const bodyParser = require('body-parser');
const cleinteMongo = require('./cleinteMongo.js');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// CRUD Alumnos
// CREATE  ->  Post One
app.post('/api/alumnos/', (request, response) => {
   let json = request.body; 

   const nuevoAlumno = Alumno({
       nombres: json.nombres,
       apellidos: json.apellidos,
       sexo: json.sexo,
       edad: json.edad
   });

   nuevoAlumno
   //callback al ehecutar metodo save
        .save((error,alumno )=>{
            response.status(201).send({
                "mensaje": "Alumno creado esxitosamente",
                "cuerpo" : json
            });
        })
     

    /*response.status(201).send({
        "mensaje": "Alumno creado esxitosamente",
        "cuerpo" : json
    });*/
});


//CREANDO CURSO
/*
app.post('/api/cursos/',(request, response)=>{
    let json = request.body;
    response.status(201).send({
        "mensaje": "Curso creado exitosamente",
        "cuerpo" : json
    });
});*/



//READ  --> GET ALL
/*
app.get('/api/alumnos/', (request, response) => {

    //IR A LA BD Y PEDIR UN JSON CON TODOS LOS ALUMNOS
    //GUARDARLO EN UN OBJETO (jsonResultado)
    response.status(200).send({"Lista de alumnos obtenida exitosamente",
            "mensaje": "Alumano creado exitosamente"
          
});
});*/

// GET ALL - Cursos
/*
app.get('api/cursos', (req, resp)=>{
    const alumnoId = req.params.id;

    Alumno
        .findById(alumnoId)
        .exec()
        .then( alumno => {
            res.status(200).send(alumno);
        })
   /* res.status(200).send({
        "mensaje" : "Lista de alumnos obtenida exitosamente",
        "cuerpo" : json

});
});*/



// READ    ->  Get All
// READ    ->  Get One

app.get('/api/alumnos/:id/', (req, res)=>{
    const alumnos = req.params.id;

    Alumno.find()
    .exec()
    .then( resultado => console.log(resultado))
    .catch(console.log(error))
    //res.send(req.params);
    //pedir a la base de datos el alumno con id  solicitado

    res.status(200).send({
        "mensaje": "Alumno hallado exitosamente",
        "body" : {"nombre ": "Bianca Prado"}
     
    })

});

//READ -> CURSOS 

// UPDATE  ->  Put One
//new -> moongose
app.get('/api/cursos/:id/', (req, res)=>{
    const cursos = req.params.id;

    res.status(200).send({
        "mensaje" : "Alumnos hallado exitosamente",
        "body" : { "nombre" : "Bianca Prado"}
    })
});
//////////////////////////////////////////////

app.put('/api/alumnos/:id/',(req, resp)=>{
    const alumnoId = req.params.id;
    //Pediria a la base de datos que modifique al alumno con id = alumno
    //Mostraría al cliente los datos del alumno 

    Alumno
        .findByIdAndUpdate(
            alumnoId,
            {$set: req.body}
        )
        .exec()
        .then( alumnosActualizado => {
            res.status(200).send(alumnosActualizado);
        })
        .catch(res.satus(400).send('No se pudo modificar'));

   /* res.status(200).send({
        "message": "Alumno modificado exitosamente",
        "body" : {"nombre": ""}
    });*/

});
// DELLETE ->  Delete One

app.delete('api/alumnos/:id/', (req, res)=>{
    const alumnoId = req.params.id;

    res.status(2014).send({
        "message": "Alumno modificado exitosamente",
        "body" : {"nombre": ""}
    })
})

// CRUD Cursos

// use port 3000 unless there exists a preconfigured port
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

/////////////////////////////////////////////////////////////////////////





