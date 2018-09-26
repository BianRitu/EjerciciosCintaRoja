
const request= require('request');

let promise = new Promise (function(resolve,reject){
    resolve("Esta promesa se resolvió");
    reject("Esta promesa no se resolvio");
});

promise.then(function(respuesta){
    console.log(respuesta);
}).catch(function(error){
   console.log(error); 
});

/*let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Se resolvió la condición ");
    },3000);
})

promise.then((respuesta)=>{
    console.log(respuesta);
})*/

/*let promise = new Promise ((resolve, reject) =>{
     let numero = 6;

//ternario intentar

     if(numero%2==0){
        resolve("Este numero es par");
     }else{
        reject("Este numero no es par");
     }

     promise.then((respuesta)=>{
         console.log(respuesta);
     }).catch((error)=>{
         console.log(error);
     });
    
    })*/


 /*let promesaSWAPI = new Promise((resolve, reject)=>{
    request.get("https://swapi.co/api/people/1", 
    (error, response, body)=>{
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject("Codigo de respuesta:" + response.statusCode);
    });

 });

 promesaSWAPI
 .then( json => console.log(json))
 .catch( error => console.log(error));*/

 let promesa = new Promise((resolve, reject)=>{
     request.get("http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse",
     (error, response, body)=>{
         response.statusCode.strStyle == 200
         ? resolve(JSON.parse(body))
         : reject("El genero no corresponde"+ response.statusCode);
     });
 });

 promesa.then(json => console.log(json.artist[0].strGenre))
 .catch(error => console.log(error))

 /////MAP
/*
 var minutos = [120, 80, 200, 100];

var misHoras = minutos.map(function(minutes){
    return minutes = (minutes/60) >= 2;
})

console.log(misHoras);*/


//for each
//for of

//NASA//////////////////////////////
/*
 let promesa = new Promise((resolve, reject)=>{
    request.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-09&end_date=2018-09-14&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i",
    (error, response, body)=>{
        response.statusCode.strStyle == 200
        ? resolve(JSON.parse(body))
        : reject("Nos va a matar"+ response.statusCode);
    });
});

promesa .then(json => {
    let asteroidesPeligrosos = [];
    let fechas = json.near_earth_objects;


.catch( error => console.log(error)); 
*/
////////////////////////////////////////

let promesaSWAPI = new Promise((resolve, reject)=>{
    request.get("https://swapi.co/api/people/1/",
    (error, response, body)=>{
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject("Codigo de respuesta: "+ response.statusCode);
    });
});

promesaSWAPI
    .then( json => console.log(json.films))
    .catch( error => console.log(error));



///////////////////////////////////////////////////////////

//1.- https://coinmarketcap.com/api/ devolver el nombre de las 10 criptomonedas mas caras en pesos mexicanos.
//2- Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, 
//sus moves, tipos, tamaño y peso
   

let cripto = new Promise((resolve, reject)=>{
    request.get("https://api.coinmarketcap.com/v2/ticker/?limit=10",
    (error, response, body)=>{
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject("Codigo de respuesta: "+ response.statusCode);
    });
});

cripto
    .then(json => console.log(json))
    .catch(error => console.log(error));


promesa.then((json)=>{
    let miRank = [];
    let precios = json.rank;

})



