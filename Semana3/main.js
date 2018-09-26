//alecs.garza@data4.mx
let request = require ('request');

//POST
/*
const URL_POST = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
const jasonSend ={
        "name": "Bianca",
        "last_name": "Prado",
        "nacionalidad": "MX",
        "biography": "Fool of the hill",
        "gender": "F",
        "age": 27
}
request.post({url: URL_POST, form: jasonSend},(error, response, body)=>{
    response.statusCode === 201
    ? console.log(JSON.parse(body))
    : console.log(error);
});

//POST PROMESA
const miPost = new Promise((resolve, reject)=>{
    request.post("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/",(error, response, body)=>{
        response.statusCode == 200
        ? resolve (JSON.parse(body))
        : reject (error);
    })
})

miPost
    .then (json => console.log(json.body))
    .catch (error => console.log(error));

*/
//GET
let URL_GET = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/322/";
request.get(URL_GET,(error, response, body) => {
    response.statusCode ===201
    let json = (JSON.parse(body));
    console.log(json);
});

//GET  -  PROMESA

let miGet = new Promise((resolve, reject)=>{
    request.get("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/",(error, response, body)=>{
        response.statusCode == 200
        ? resolve (JSON.parse(body))
        : reject (error);
    })
})

miGet
    .then (json => console.log(json.body))
    .catch (error => console.log("Not found"));
/*
//PUT ONE

const URL_PUT ="https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/322/";
const jasonSend ={
    "name": "CRAZY",
    "last_name": "Prado",
    "nacionalidad": "MX",
    "biography": "Fool of the hill",
    "gender": "F",
    "age": 27
  
}
request.put({url:URL_PUT, form:jasonSend  },(error,response,body)=>{
    response.statusCode === 200
    ? console.log(JSON.parse(body))
    : console.log(JSON.parse(body));
})

//PATCH

const URL_PATCH = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/322";
request.patch({url:URL_PATCH},( error, response, body)=>{
    response.statusCode === 201
    ? console.log(JSON.parse(body))
    :console.log(error);
    
});

//DELETE 

const URL_DELETE = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/369/";
request.delete({url:URL_DELETE},(error, response, body)=>{
    response.statusCode === 204
    ? console.log(JSON.parse(body))
    :console.log("No existo");
})

*/

createAuthor();