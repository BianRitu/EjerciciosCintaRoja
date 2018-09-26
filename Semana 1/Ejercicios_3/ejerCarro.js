class Carro{
    constructor(color, peso, marca){
        this.color = color;
        this.peso =peso;
        this.marca = marca;

    }

    arrancar(){
        return "El carro " + this.marca + " de " +this.color+ " arranca";
    }

    apagar(){
        return "El carro " + this.marca + " se apaga";

    }
}

let miCarro = new Carro("negro", "1000kg", "Toyota")
    console.log(miCarro.arrancar());
    console.log(miCarro.apagar());
    

