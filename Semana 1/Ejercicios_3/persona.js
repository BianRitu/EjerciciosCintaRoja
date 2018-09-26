class Persona{
    constructor(nombre, apellidop, apellidom, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.apellidop = apellidop;
        this.apellidom = apellidom;
        this.edad = edad;
        this.sexo =sexo;
        this.peso =peso;
        this.altura =altura;
    }
    getNombre(){
        return this.nombre;
    }

    getEdad(){
        return this.edad;
    }

    getSexo(){
        return this.sexo;
    }

    
    getPeso(){
        return this.peso;
    }

    getAltura(){
        return this.altura;
    }

//IMC = Peso (kg) / altura (m)2
  calcularIMC(){
        let calcular = this.peso / this.altura;
        return "El indice de masa corporal es" + calcular; 
    }

    esMayorEdad(){
       
            if(this.edad<=18){
            console.log("Eres menor de edad");
        
      } 
    }
//PAMB901103

    miRfc(){
        for(i=0;i<=nombre.lenght;i++){
            
        }
    }
}


let miPersona = new Persona("Bianca","Prado", "Mercado", 80, "Femenino", 1000, 163)
    console.log(miPersona.calcularIMC());
    console.log(miPersona.esMayorEdad());
    console.log(miPersona.miRfc());
    




