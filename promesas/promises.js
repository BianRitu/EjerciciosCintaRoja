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