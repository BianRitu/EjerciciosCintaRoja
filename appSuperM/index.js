const express = require('express');
const bodyParser = require('body-parser');
const {Article, Recibo} = require('./MyMongoose.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.get('/', (req, res) =>
    res.send('Hello amigos'));

app.listen(port, () => 
    console.log(`App listening on port ${port}!`));

//******************* CRUD Artículos ***********************
//Create Post Uno
app.post('/api/articles/',(request, response) => {
    let jsonCliente = request.body;

    const nuevoArticle = Article(jsonCliente);

    nuevoArticle.save((error, article) =>{
        response.status(201)
                .send({
                    "message": "Article created",
                    "body": article,
                    "error": error

                })
    })

});

// Read   -> Get todos
app.get('/api/articles/', (request, response) => {
    Article.find()
            .exec()
            .then( jsonResultado => {
                response
                    .status(200)
                    .send({
                        "message": "List of articles obtained",
                        "body" : jsonResultado
                    });
            })
            .catch( error => console.log(error));
});

// Read -> Get uno
app.get('/api/articles/:id/', (req, res)=>{
    const articleId = req.params.id;

    Article.findById(articleId)
            .exec()
            .then( article =>{
                res.status(200).send(article);
            })
            .catch( error => {
                res.status(404).send(error);
            })
});


//Update -- Put uno

app.put('/api/articles/:id/', (req, res) => {
    const articleId = req.params.id;

    Article.findByIdAndUpdate(
        articleId,{$set: req.body},
        {new: true}
    )
    .exec()
    .then( articleUpdated => {
        res.status(200).send(articleUpdated);
    })
    .catch(error => {
        res.status(400).send(`Error: ${error}`);
    });

});

//Delete -- borra uno 

app.delete('/api/articles/:id/', (req, res) => {
    const articleId = req.params.id;

    Article.finByIdAndRemove(articleId)
    .exec()
    .then( resultado => {
        res.status(204).send({
            "message": "Article has been deleted",
            "body" : resultado
        })
    })
    .catch( error => {
        res.status(404).send(error)
    })
});


// ******************* CRUD RECIBOS **********************

// Crear  - Post uno

app.post('/api/recibos/', (request, response) =>{
    let json = request.body;

    response.status(201)
            .send({
                "message": "Recibo creado",
                "body" : json
            });
});

//Read -- Get todos

app.get('/api/recibos/', (request,response)=>{
    response.status(200).send({
        "message": "Lista de recibos ",
        "body": { "nombre": "paquetazo"}
    });
});

//Read -- Get uno

app.get('/api/cursos/:id/', (req, res) => {
    const reciboId = req.params.id;

    res.status(200).send({
        "message": "Recibo encontrado",
        "body" : {"nombre": "paquetazo"}
    });
});

// Update -- put one 

app.put('/api/cursos/:id/', (req, res) =>{
        const reciboId = req.params.id;

        res.status(200).send({
            "message": "Recibo modificado",
            "body":{ "articulos": "paketazo grande"}
        });
});

// Delete -- borra uno 

app.delete('/api/cursos/:id/', (req, res) => {
    const reciboId = req.params.id;
//no count 204
    res.status(204).send({
        "message": "Recibo elimimado",
        "body": {}
    });
});

