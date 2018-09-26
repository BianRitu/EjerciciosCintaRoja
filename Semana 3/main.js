console.log("hi");
let request = require ('request');
/*
let URL_GET = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
request.get(URL_GET,(error, response, body) => {
    let json = (JSON.parse(body));
    console.log(json[0]);
});*/

//POST
const URL_POST = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors";
const jasonSend ={
        "id": 1216,
        "name": "Bianca",
        "last_name": "Prado",
        "nacionalidad": "MX",
        "biography": "Fool of the hill",
        "gender": "F",
        "age": 27,
        "is_alive": true
}
request.post({url:URL_POST, form: jasonSend},(error, response, body)=>{
    response.statusCode === 201
    ? console.log(JSON.parse(body))
    : cosole.log(error);
});


//GET ONE

const URL_GET = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
/*const jsonGet ={
        "id": 322,
        "name": "Hola",
        "last_name": "Comoestas",
        "nacionalidad": "MX",
        "biography": "Todomuybien y tu?",
        "gender": "M",
        "age": 21,
        "is_alive": true
}*/
request.get({url:URL_GET,form: jasonGet},(error, response, body)=>{
    response.statusCode ===201
    ? console.log(JSON.parse(body))
    : console.log(error);
});

//PUT ONE
/*
cost URL_PUT ="https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";

*/
