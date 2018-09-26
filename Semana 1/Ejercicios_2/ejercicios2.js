alert("hello");

let miFun = () => {
    console.log("Hola");

}
console.log(miFun());

//----------------------------------
let resta = (int1 , int2) => {
    let resultado = int1 - int2;
    return resultado;
}

console.log(resta(1,3));

//-------------------------------------
//Arreglos

let arreglo =[];

arreglo ["manzana", "lechuga","pollo"];
console.log(arreglo[2]);

//--------------------------------------

let miArreglo =[];
for(let i=0; i<=100; i++){
    miArreglo.push(i);
}

console.log(miArreglo);

//--------------------------------------

let directores = ["Del Toro","Kawasaki","Quentin","otro men","otro men"];
for(i=0;i<directores.length;i++){
    console.log(i);
    console.log(directores[i]);
}

//-------------------------------------



