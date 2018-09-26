/*const request = require('request');
request.get('http://pokeapi.co/api/v2/pokemon/55',
(error, response, body) =>{
    console.log(response.statusCode);
    console.log(typeof body);
    
    let json =JSON.parse(body);

    console.log(json.name);
    console.log(json.types);
    if (response.statusCode===200){
        console.log("peticion exitosa")
        console.log(json.name)
    }else{
        console.log("Pokemon no encontrado");
    }
//json.type.map(element)
//element.type.name
//1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.

});

*/
/*1- peticionLibro(“i robot”);http://openlibrary.org/search.json?q=i+robot) buscar un 
libro y traer el o los autores del primer libro

2- Hacer una petición por autor y devolver la lista de sus libros 
(http://openlibrary.org/search.json?author=asimov)*/
const request = require('request');
function peticion(){
    request.get('http://openlibrary.org/search.json?q=irobot',(error, response, body) =>{
    let json =JSON.parse(body);
    console.log(json.docs[0].title_suggest);
    console.log(json.docs[0].author_name);
    if(response.author_name = "Ulrike Barthelmess"){
        console.log("Sus libros son");
        console.log(docs.author_name.title);
    }else{
        console.log("Otro autor");
    }
});
}

peticion();

