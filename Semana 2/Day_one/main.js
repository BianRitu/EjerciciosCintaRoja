class Cuenta{
    constructor(titular, cantidad){
        this.titular =titular;
        this.cantidad =cantidad;
    }


ingresar(cantidad){
    if(this.cantidad + cantidad > 900){
        return "Estas superando el límite de $900; operación cancelada";
    }else {
        this.cantidad = this.cantidad +cantidad;
        return "Operación exitosa: Tu saldo es de " + this.cantidad;
    }
}

retirar(cantidad){
    if(this.cantidad -cantidad < 10 ){
        return "No tienes fondos suficientes, el mínimo es de $10";
    } else {
        this.cantidad = this.cantidad -cantidad;
        return "Has retirado $" + cantidad + ". Tu saldo actual es de " + this.cantidad;
    }
}
}
let cuenta = new Cuenta ("Bianca Prado", 600);
console.log(cuenta.cantidad);
console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(400));

console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100));


//RFC


class Persona{

    constructor(nombre, fecha, sexo, peso, altura){
        this.nombre=nombre;
        this.fecha=fecha;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
    }

    calcularIMC(){
        return this.peso/(this.altura * this.altura);
    }

    isMayor(){
        //1997-07-15
        let year=this.fecha.split("-");
        if((2018-parseInt(year[0])) >= 18){
            return true;
    
        }else{
            return false;
        }
    }

    calcularRFC(){
        let nombre=this.nombre.split(" ");
        let apellidoPaterno=nombre[1]
        let letraUno=apellidoPaterno[0];
        let letraDos;

        for(let i=1; i<apellidoPaterno.length; i++){
            if(apellidoPaterno[i].toLowerCase()=="a" || apellidoPaterno[i].toLowerCase()=="e" || apellidoPaterno[i].toLowerCase()=="i" || apellidoPaterno[i].toLowerCase()=="o" || apellidoPaterno[i].toLowerCase()=="u"){
                letraDos=apellidoPaterno[i].toUpperCase();
                break;
            }
        }

        let apellidoMaterno = nombre[2];
        let letraTres = apellidoMaterno[0];
        let n=nombre[0];
        let letraCuatro=n[0];
        let year=this.fecha.split("-");
        let anio = year[0][2] + year[0][3];
        console.log(anio);

        return letraUno+letraDos+letraTres+letraCuatro+anio+year[1]+year[2];


    }
}

let p1 = new Persona("Bianca Prado Mercado", "1990-11-03", "M", 100, 1.63);

console.log(p1.calcularIMC());
console.log(p1.isMayor());
console.log(p1.calcularRFC());

//HERENCIA




