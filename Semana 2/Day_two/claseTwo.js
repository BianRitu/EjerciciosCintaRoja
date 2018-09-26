/*var lista = [1,2,3,4,5,5,6,7,23,4234,12,312]
const obj = [
    {data:"hola",nombre:"juana"},
    {data:"oli",nombre:"Panchito"},
    {data:"asd",nombre:"pedro"}]
    
var acumulador = obj.map((element)=>{
    return element.nombre
})

//console.log(acumulador);

var tasks = [
    {
      name     : 'Write for Envato Tuts+',
      duration : 120
    },
    {
      name     : 'Work out',
      duration : 60
    },
    {
      name     : 'Procrastinate on Duolingo',
      duration : 240
    }
  ];

  var filter = tasks.filter((element)=>{
      return element.duration >= 120 
  })
  console.log(filter)*/

 /* 1.- Escribe una funcion que tome una cadena de palabras en mayusculas 
 y la regrese en minusculas.
  Entrada: [“hola”,”como”,”estas”]
  Salida: [“HOLA”,”COMO”,”ESTAS”]*/

  var saludoInicial = ["hola", "como", "estas"];

  var saludoMayus = saludoInicial.map(function(saludoInicial){
      return saludoInicial.toUpperCase(saludoInicial);
  })
  console.log(saludoMayus);
  
/*2.- Crea una funcion que reciba como parametro una cadena de palabras 
y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.
  Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
  Salida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,”YEI”]*/

var cadenaInicial = ["Hola amigos", "cinta roja cdmx y gdl","yei" ];
var transforma = cadenaInicial.map(function(cadenaInicial){
     return cadenaInicial = (cadenaInicial.split(" ")%2==0).toUpperCase;
    
    
})
console.log(transforma);



/*3. Hacer un arreglo de 4 cantidades de tiempo en minutos 
[120, 80, 200, 100], y agarrar sólo las que son mayores a dos horas 
(hacer la comparación en horas)
60 -1hr
120-x
*/

var minutos = [120, 80, 200, 100];

var misHoras = minutos.map(function(minutes){
    return minutes = (minutes/60) >= 2;
})

console.log(misHoras);

/*4.- A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los 
elementos por 7, y después sólo traer los que son menores a 30*/


var miLista = [1, 3, 5, 7, 9];
var multiplicar = miLista.map(function(misNumeros){
    misNumeros = (misNumeros*7);
    return   misNumeros <= 30;
})

console.log(multiplicar);

