//ejercicio 1

let convertir = (grados) => {
   let resultados = ((9/5*grados)+32);
   console.log(resultados);
}

console.log(convertir(250));

//ejercicio 2



//ejercicio 6. - Guardar en un array los 20 primeros números pares

let myArray = [];
for(i=0;i<=20;i++){
        if(i%2 == 0){
            myArray.push(i);
           
        }
        
}
console.log(myArray);

//3. - Leer un arreglo de enteros y sacar su promedio
let promedio =() => {

let misEnteros = [22, 222,322,564,674, 90, 100];
let miPromedio =0 ;
for(i=0; i<misEnteros.length;i++){
     miPromedio = misEnteros[i]+miPromedio; 
     divi = miPromedio/misEnteros.length; 
     console.log(divi);    
}
}
promedio();

//OBJETOS

var cuadrado = {
    base:0,
    altura:0,
    
};

var triangulo = {
    base:0,
    altura:0

}

var rectangulo = {
    base:0,
    altura:0
}

function CalcularArea(){

    
}





